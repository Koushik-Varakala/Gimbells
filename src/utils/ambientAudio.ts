/**
 * Ambient audio synthesizer using Web Audio API.
 * Provides soft, calming soundscapes (rain, vinyl hearth, gentle meditation chime)
 * without external network dependencies.
 */

class AmbientSoundEngine {
  private ctx: AudioContext | null = null;
  private currentType: string = 'none';
  private masterGain: GainNode | null = null;
  private activeNodes: (AudioNode | number)[] = [];
  private chimeInterval: number | null = null;

  private initContext() {
    if (!this.ctx) {
      const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioContextClass();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
    if (!this.masterGain && this.ctx) {
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(0.25, this.ctx.currentTime);
      this.masterGain.connect(this.ctx.destination);
    }
  }

  public setVolume(volume: number) {
    if (this.masterGain && this.ctx) {
      this.masterGain.gain.setTargetAtTime(Math.max(0, Math.min(1, volume)), this.ctx.currentTime, 0.05);
    }
  }

  public stop() {
    if (this.chimeInterval) {
      clearInterval(this.chimeInterval);
      this.chimeInterval = null;
    }
    this.activeNodes.forEach(item => {
      if (typeof item === 'object' && 'stop' in item) {
        try {
          (item as AudioScheduledSourceNode).stop();
        } catch {
          // ignore already stopped
        }
      }
    });
    this.activeNodes = [];
    this.currentType = 'none';
  }

  public play(type: 'rain' | 'hearth' | 'chime') {
    this.initContext();
    if (!this.ctx || !this.masterGain) return;

    this.stop();
    this.currentType = type;

    if (type === 'rain') {
      this.playSoftRain();
    } else if (type === 'hearth') {
      this.playWarmHearth();
    } else if (type === 'chime') {
      this.playGentleChimes();
    }
  }

  private playSoftRain() {
    if (!this.ctx || !this.masterGain) return;
    const bufferSize = this.ctx.sampleRate * 2;
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);

    // Pink-ish noise generation
    let b0 = 0, b1 = 0, b2 = 0;
    for (let i = 0; i < bufferSize; i++) {
      const white = Math.random() * 2 - 1;
      b0 = 0.99886 * b0 + white * 0.0555179;
      b1 = 0.99332 * b1 + white * 0.0750759;
      b2 = 0.96900 * b2 + white * 0.1538520;
      data[i] = (b0 + b1 + b2 + white * 0.1) * 0.08;
    }

    const noise = this.ctx.createBufferSource();
    noise.buffer = buffer;
    noise.loop = true;

    // Filter to warm rain frequency
    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(650, this.ctx.currentTime);
    filter.Q.setValueAtTime(0.8, this.ctx.currentTime);

    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0.18, this.ctx.currentTime);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(this.masterGain);

    noise.start();
    this.activeNodes.push(noise, filter, gain);
  }

  private playWarmHearth() {
    if (!this.ctx || !this.masterGain) return;
    // Low warm drone
    const osc = this.ctx.createOscillator();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(110, this.ctx.currentTime);

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(220, this.ctx.currentTime);

    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0.08, this.ctx.currentTime);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.masterGain);
    osc.start();

    // Occasional subtle vinyl crackle
    const crackleBufferSize = this.ctx.sampleRate * 2;
    const crackleBuffer = this.ctx.createBuffer(1, crackleBufferSize, this.ctx.sampleRate);
    const data = crackleBuffer.getChannelData(0);
    for (let i = 0; i < crackleBufferSize; i++) {
      if (Math.random() < 0.003) {
        data[i] = (Math.random() * 2 - 1) * 0.15;
      } else {
        data[i] = (Math.random() * 2 - 1) * 0.005;
      }
    }
    const crackleSource = this.ctx.createBufferSource();
    crackleBufferSourceSetup: {
      crackleSource.buffer = crackleBuffer;
      crackleSource.loop = true;
      const crackleGain = this.ctx.createGain();
      crackleGain.gain.setValueAtTime(0.15, this.ctx.currentTime);
      crackleSource.connect(crackleGain);
      crackleGain.connect(this.masterGain);
      crackleSource.start();
      this.activeNodes.push(crackleSource, crackleGain);
    }

    this.activeNodes.push(osc, filter, gain);
  }

  private playSingleBell() {
    if (!this.ctx || !this.masterGain) return;
    const now = this.ctx.currentTime;
    const freqs = [528, 792, 1056]; // Healing frequency 528Hz and soft harmonics
    
    freqs.forEach((freq, idx) => {
      if (!this.ctx || !this.masterGain) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now);
      
      const initialGain = 0.08 / (idx + 1);
      gain.gain.setValueAtTime(0, now);
      gain.gain.linearRampToValueAtTime(initialGain, now + 0.08);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 4.5);
      
      osc.connect(gain);
      gain.connect(this.masterGain);
      
      osc.start(now);
      osc.stop(now + 4.6);
    });
  }

  private playGentleChimes() {
    this.playSingleBell();
    this.chimeInterval = window.setInterval(() => {
      this.playSingleBell();
    }, 6000);
  }

  public getCurrentType() {
    return this.currentType;
  }
}

export const ambientSound = new AmbientSoundEngine();

// Ensure audio cleanly releases on pagehide or tab close so closing tabs is always instantaneous
if (typeof window !== 'undefined') {
  window.addEventListener('pagehide', () => {
    ambientSound.stop();
  });
  window.addEventListener('beforeunload', () => {
    ambientSound.stop();
  });
}
