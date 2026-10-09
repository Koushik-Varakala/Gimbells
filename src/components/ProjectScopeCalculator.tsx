import React, { useState } from 'react';
import { Check, MessageSquare, Phone, MapPin, ArrowRight } from 'lucide-react';

interface ProjectScopeProps {
  preselectedClient?: string;
}

export default function ProjectScopeCalculator({ preselectedClient }: ProjectScopeProps) {
  const [selectedServices, setSelectedServices] = useState<string[]>([
    'Videography',
    'Video + Digital Marketing + Social Media Management'
  ]);
  const [industry, setIndustry] = useState<string>(
    preselectedClient?.includes('Marble')
      ? 'Marble & Interior Showrooms'
      : preselectedClient?.includes('Stone')
      ? 'Stone & Landscaping'
      : preselectedClient?.includes('Fertility')
      ? 'Healthcare & Clinics'
      : 'Local Businesses & Showrooms'
  );
  const [businessName, setBusinessName] = useState(preselectedClient || '');
  const [contactName, setContactName] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const availableServices = [
    'Videography',
    'Digital Marketing',
    'Video + Digital Marketing + Social Media Management',
    'Social Media Management'
  ];

  const industries = [
    'Marble & Interior Showrooms',
    'Stone & Landscaping',
    'Healthcare & Clinics',
    'Real Estate & Villas',
    'Home Services & Contracting',
    'Other Local Business'
  ];

  const toggleService = (srv: string) => {
    setSelectedServices(prev =>
      prev.includes(srv) ? prev.filter(s => s !== srv) : [...prev, srv]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const getWhatsAppMessage = () => {
    const text = `Hi Gimbells (Koushik, Rohith, Krishna)! I am ${contactName || 'reaching out'} from ${businessName || 'my business'}. We are interested in: ${selectedServices.join(', ')} in the ${industry} field. Can we discuss?`;
    return encodeURIComponent(text);
  };

  return (
    <section id="contact" className="py-24 px-4 max-w-5xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-medium text-stone-400 dark:text-stone-500 mb-2">
          <span>Get In Touch</span>
          <span aria-hidden="true">·</span>
          <span>We're Always Happy to Chat</span>
        </div>
        <h2 className="font-outfit text-3xl sm:text-5xl text-[#292524] dark:text-[#F5F5F0] font-normal tracking-tight">
          Let’s discuss your business.
        </h2>
        <p className="mt-4 text-stone-600 dark:text-stone-400 text-base leading-relaxed">
          Reach out directly to Koushik, Rohith, and Krishna. We will discuss what fits your business best and give you honest, friendly advice.
        </p>
      </div>

      <div className="bg-white dark:bg-[#1C1B19] rounded-[2.5rem] p-6 sm:p-12 border border-stone-200/70 dark:border-stone-800 shadow-[0_4px_30px_-4px_rgba(0,0,0,0.06)] dark:shadow-[0_4px_30px_-4px_rgba(0,0,0,0.3)] transition-colors duration-200">
        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-8">
            
            {/* Step 1: Select Services */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-stone-500 dark:text-stone-400 font-mono mb-3">
                1. Select the Services You Need:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {availableServices.map((srv, idx) => {
                  const isChecked = selectedServices.includes(srv);
                  return (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => toggleService(srv)}
                      className={`p-4 rounded-2xl border text-left flex items-center justify-between transition-all cursor-pointer ${
                        isChecked
                          ? 'bg-[#FFE4E1]/30 dark:bg-[#FFB7B2]/15 border-[#FFB7B2] text-stone-900 dark:text-white shadow-xs'
                          : 'bg-stone-50/60 dark:bg-stone-900/60 border-stone-200/70 dark:border-stone-800 text-stone-600 dark:text-stone-300 hover:border-stone-300 dark:hover:border-stone-700'
                      }`}
                    >
                      <span className="text-sm font-outfit font-medium">{srv}</span>
                      <div
                        className={`w-5 h-5 rounded-full flex items-center justify-center ${
                          isChecked ? 'bg-[#FFB7B2] text-[#292524]' : 'border border-stone-300 dark:border-stone-600'
                        }`}
                      >
                        {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Select Industry */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-stone-500 dark:text-stone-400 font-mono mb-3">
                2. Your Industry or Field:
              </label>
              <div className="flex flex-wrap gap-2">
                {industries.map((ind, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setIndustry(ind)}
                    className={`px-4 py-2 rounded-full text-xs font-outfit font-medium transition-all cursor-pointer ${
                      industry === ind
                        ? 'bg-[#292524] text-white dark:bg-[#F5F5F0] dark:text-[#141312] shadow-xs'
                        : 'bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300 hover:text-stone-900 dark:hover:text-white hover:bg-stone-200/70 dark:hover:bg-stone-700'
                    }`}
                  >
                    {ind}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Contact Inputs */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-stone-500 dark:text-stone-400 font-mono mb-3">
                3. Your Contact Details:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <input
                    type="text"
                    required
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                    placeholder="Your Name"
                    className="w-full px-5 py-3.5 rounded-2xl bg-stone-50 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 text-stone-800 dark:text-stone-100 placeholder:text-stone-400 dark:placeholder:text-stone-500 text-sm font-outfit focus:bg-white dark:focus:bg-stone-900/90 focus:outline-none focus:ring-2 focus:ring-[#FFB7B2]"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    required
                    value={businessName}
                    onChange={(e) => setBusinessName(e.target.value)}
                    placeholder="Business Name"
                    className="w-full px-5 py-3.5 rounded-2xl bg-stone-50 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 text-stone-800 dark:text-stone-100 placeholder:text-stone-400 dark:placeholder:text-stone-500 text-sm font-outfit focus:bg-white dark:focus:bg-stone-900/90 focus:outline-none focus:ring-2 focus:ring-[#FFB7B2]"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Your Phone / WhatsApp"
                    className="w-full px-5 py-3.5 rounded-2xl bg-stone-50 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 text-stone-800 dark:text-stone-100 placeholder:text-stone-400 dark:placeholder:text-stone-500 text-sm font-outfit focus:bg-white dark:focus:bg-stone-900/90 focus:outline-none focus:ring-2 focus:ring-[#FFB7B2]"
                  />
                </div>
              </div>

              <div className="mt-4">
                <textarea
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Tell us a little about what you'd like to achieve..."
                  className="w-full px-5 py-3.5 rounded-2xl bg-stone-50 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 text-stone-800 dark:text-stone-100 placeholder:text-stone-400 dark:placeholder:text-stone-500 text-sm font-outfit focus:bg-white dark:focus:bg-stone-900/90 focus:outline-none focus:ring-2 focus:ring-[#FFB7B2]"
                />
              </div>
            </div>

            {/* Direct WhatsApp Callout & Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-stone-100 dark:border-stone-800">
              <div className="flex items-center gap-2 text-xs text-stone-600 dark:text-stone-400 font-medium">
                <Phone className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>Direct WhatsApp & Call: <strong>+91 7799001102</strong></span>
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                {/* Directed to 7799001102 */}
                <a
                  href={`https://wa.me/917799001102?text=${getWhatsAppMessage()}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-medium transition-colors flex items-center justify-center gap-2 shadow-xs"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send on WhatsApp</span>
                </a>

                <button
                  type="submit"
                  className="px-8 py-3.5 rounded-full bg-[#292524] hover:bg-stone-800 dark:bg-[#F5F5F0] dark:hover:bg-white dark:text-[#141312] text-white text-xs sm:text-sm font-medium transition-all shadow-md hover:scale-102 cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>Submit Note</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </form>
        ) : (
          <div className="text-center py-8">
            <div className="w-14 h-14 rounded-full bg-[#E8EFE8] dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-400 flex items-center justify-center mx-auto mb-4">
              <Check className="w-7 h-7 stroke-[2.5]" />
            </div>

            <span className="font-reenie text-3xl text-[#FFB7B2] block">
              note received!
            </span>

            <h3 className="font-outfit text-2xl sm:text-3xl font-normal text-[#292524] dark:text-[#F5F5F0] mt-1">
              Thank you, {contactName || 'Friend'}.
            </h3>

            <p className="mt-3 text-stone-600 dark:text-stone-400 text-sm sm:text-base max-w-md mx-auto leading-relaxed">
              We received your message for <strong className="font-medium text-stone-900 dark:text-stone-200">{businessName || 'your business'}</strong>. We’ll get in touch with you shortly. You can also message or call us anytime directly on WhatsApp at <a href="https://wa.me/917799001102" className="text-emerald-700 dark:text-emerald-400 font-semibold underline">7799001102</a>.
            </p>

            <div className="mt-8 flex justify-center gap-4">
              <a
                href={`https://wa.me/917799001102?text=${getWhatsAppMessage()}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-medium inline-flex items-center gap-2"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Open in WhatsApp (7799001102)</span>
              </a>

              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="text-xs text-stone-500 dark:text-stone-400 hover:text-stone-800 dark:hover:text-stone-200 underline cursor-pointer"
              >
                Edit details
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
