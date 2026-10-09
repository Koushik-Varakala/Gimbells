import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { FaqItem } from '../types';

const agencyFaqData: FaqItem[] = [
  {
    id: 'f1',
    question: 'How do video shoots with Gimbells work at our shop or clinic?',
    answer: 'We keep things very simple and respectful of your work. We visit your location with our iPhones and smooth handheld gimbal. There are no bulky lights or messy cables that block your customers. We take smooth video clips of your products, premises, and team in a friendly, 1-to-2 hour visit.'
  },
  {
    id: 'f2',
    question: 'What is included in the Video + Digital Marketing + Social Media package?',
    answer: 'This is our most popular all-in-one package. Each month, we come shoot fresh reels for your business, edit and post them to your Instagram page with clean captions, and run targeted ads on Meta & Google to bring real customer inquiries directly to your WhatsApp or phone.'
  },
  {
    id: 'f3',
    question: 'How soon can we expect customer inquiries?',
    answer: 'For our digital marketing ad campaigns, inquiries and calls typically start coming in within 2 to 3 days of launching the ads. For social media and video, your page starts looking professional and inviting immediately.'
  },
  {
    id: 'f4',
    question: 'Where are you based and which areas do you visit?',
    answer: 'We are based right here in Hyderabad and Shamshabad. We regularly visit businesses across Shamshabad, Chandanagar, Gachibowli, Jubilee Hills, and surrounding areas in Telangana.'
  },
  {
    id: 'f5',
    question: 'How can we get started or ask a quick question?',
    answer: 'You can chat with us or call us anytime directly on WhatsApp at 7799001102. We’ll discuss what your business needs and answer any questions with no pressure.'
  }
];

export default function FaqAccordion() {
  const [openIds, setOpenIds] = useState<Record<string, boolean>>({ f1: true });

  const toggle = (id: string) => {
    setOpenIds(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <section id="faq" className="py-24 px-4 max-w-4xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-14">
        <div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-medium text-stone-400 dark:text-stone-500 mb-2">
          <span>Common Questions</span>
          <span aria-hidden="true">·</span>
          <span>Simple & Honest Answers</span>
        </div>
        <h2 className="font-outfit text-3xl sm:text-5xl text-[#292524] dark:text-[#F5F5F0] font-normal tracking-tight">
          Frequently asked questions.
        </h2>
        <p className="mt-3 text-stone-600 dark:text-stone-400 text-sm sm:text-base">
          Everything you need to know about working with Gimbells.
        </p>
      </div>

      {/* Accordion List */}
      <div className="space-y-4">
        {agencyFaqData.map((item) => {
          const isOpen = !!openIds[item.id];
          return (
            <div
              key={item.id}
              className="bg-white dark:bg-[#1C1B19] rounded-[20px] border border-stone-200/60 dark:border-stone-800 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.03)] overflow-hidden transition-all duration-300 hover:border-stone-300 dark:hover:border-stone-700"
            >
              {/* Header */}
              <button
                type="button"
                onClick={() => toggle(item.id)}
                aria-expanded={isOpen}
                className="w-full p-6 flex items-center justify-between text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFB7B2] rounded-[20px] cursor-pointer group"
              >
                <span className="font-outfit text-base sm:text-lg font-medium text-[#292524] dark:text-[#F5F5F0] pr-4 group-hover:text-stone-900 dark:group-hover:text-white transition-colors">
                  {item.question}
                </span>

                {/* Plus icon rotating 45 deg */}
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-500 ease-in-out ${
                    isOpen
                      ? 'rotate-45 bg-[#FFE4E1] dark:bg-[#FFB7B2]/20 text-stone-800 dark:text-[#FFB7B2]'
                      : 'rotate-0 bg-stone-50 dark:bg-stone-800 text-stone-500 dark:text-stone-400 group-hover:bg-stone-100 dark:group-hover:bg-stone-700'
                  }`}
                >
                  <Plus className="w-4 h-4 transition-colors" />
                </div>
              </button>

              {/* Content */}
              <div
                className={`grid transition-[grid-template-rows,opacity] duration-500 ease-in-out ${
                  isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                }`}
              >
                <div className="overflow-hidden">
                  <div className="px-6 pb-6 text-sm sm:text-[15px] font-outfit text-stone-600 dark:text-stone-300 leading-relaxed font-normal">
                    {item.answer}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
