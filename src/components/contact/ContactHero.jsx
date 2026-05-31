import React from "react";

function ContactHero() {
  return (
    <div className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
      {/* Animated Blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 -left-40 w-96 h-96 rounded-full bg-grad-start opacity-20 blur-[100px] animate-pulse-slow"></div>
        <div className="absolute bottom-20 -right-40 w-96 h-96 rounded-full bg-grad-end opacity-20 blur-[100px] animate-pulse-slow animation-delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-grad-start to-grad-end opacity-10 blur-[120px] animate-blob-float"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          {/* Badge */}
          <div className="inline-block mb-4 px-4 py-1 rounded-full bg-white/5 border border-white/10 animate-fade-in-up">
            <span className="font-poppins text-sm text-highlight">
              Get in Touch
            </span>
          </div>

          <h1 className="font-clash font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight mb-6 bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent animate-fade-in-up">
            Let's Talk
            <br />
            <span className="text-highlight">We'd Love to Hear</span> From You
          </h1>

          <p className="font-poppins text-base md:text-lg text-white/70 max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
            Have questions about our platform, partnership opportunities, or
            just want to say hello? Our team is here to help.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ContactHero;
