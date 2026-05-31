import React, { useState } from "react";

function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is the difference between free and paid plans?",
      answer:
        "The free Creator plan allows up to 10 NFT mints per month with a 2% platform fee. Paid plans offer unlimited mints, lower fees, priority support, and additional features like verified badges and featured placements.",
    },
    {
      question: "Can I switch plans later?",
      answer:
        "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate your billing accordingly.",
    },
    {
      question: "Are there any hidden fees?",
      answer:
        "No, our pricing is completely transparent. You only pay the platform fee on sales (varies by plan) and standard blockchain gas fees, which go to network validators, not us.",
    },
    {
      question: "How do royalty payments work?",
      answer:
        "Royalties are automatically paid to creators whenever their NFT is resold on our platform. Pro plan users can set royalties up to 15%, while Creator plan users can set up to 10%.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept major cryptocurrencies including ETH, SOL, and MATIC. We also support credit card payments for plan subscriptions.",
    },
    {
      question: "Is there a discount for annual billing?",
      answer:
        "Yes, annual plans save you 20% compared to monthly billing. Plus, you get priority support and early access to new features.",
    },
  ];

  return (
    <div className="relative py-20 md:py-28 overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-grad-start opacity-5 blur-[150px] animate-pulse-slow"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-clash font-semibold text-3xl md:text-4xl lg:text-5xl mb-4 bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
          <p className="font-poppins text-white/60">
            Everything you need to know about our pricing
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="group bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-highlight/30 transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex justify-between items-center text-left"
              >
                <span className="font-clash font-semibold text-lg text-white group-hover:text-highlight transition-colors">
                  {faq.question}
                </span>
                <svg
                  className={`w-5 h-5 text-highlight transition-transform duration-300 flex-shrink-0 ml-4 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="px-6 pb-5">
                  <p className="font-poppins text-white/60 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Still have questions */}
        <div className="text-center mt-12 pt-8 border-t border-white/10">
          <p className="font-poppins text-white/60 mb-4">
            Still have questions?
          </p>
          <button className="text-highlight font-poppins font-semibold hover:underline transition-all">
            <a href="/contact">Contact our support team →</a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default FAQSection;
