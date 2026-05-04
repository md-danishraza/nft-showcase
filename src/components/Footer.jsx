import React from "react";

function Footer() {
  return (
    <footer className="w-full relative mt-20 overflow-hidden">
      {/* Background Glowing Blobs - Large and Lightful */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Massive Bottom Right Blob - Main highlight as in design */}
        <div className="absolute -bottom-60 -right-60 w-[1000px] h-[1000px] rounded-full bg-gradient-to-r from-grad-start via-highlight to-grad-start opacity-50 blur-[180px] animate-pulse-slow"></div>

        {/* Secondary Right Blob - Extra lightful */}
        <div className="absolute bottom-0 right-0 w-[800px] h-[800px] rounded-full bg-grad-end opacity-40 blur-[150px] animate-blob-float"></div>

        {/* Top Left Subtle Blob */}
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-grad-start opacity-20 blur-[120px] animate-pulse-slow animation-delay-1000"></div>

        {/* Center Right Accent Blob */}
        <div className="absolute top-1/2 right-20 w-[400px] h-[400px] rounded-full bg-highlight opacity-25 blur-[130px] animate-float-3"></div>

        {/* Floating decorative dots around right side */}
        <div className="absolute bottom-40 right-[15%] w-4 h-4 rounded-full bg-grad-start opacity-40 blur-sm animate-float-1"></div>
        <div className="absolute top-60 right-[10%] w-3 h-3 rounded-full bg-highlight opacity-30 blur-sm animate-float-2"></div>
        <div className="absolute bottom-80 right-[5%] w-5 h-5 rounded-full bg-grad-end opacity-35 blur-md animate-float-5"></div>
      </div>

      {/* Glassmorphic Container */}
      <div className="relative z-10 w-full bg-[#131114]/60 backdrop-blur-xl border-t border-white/10 py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          {/* Top Row: Logo, Links, Socials */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-10 lg:gap-12">
            {/* Logo with animation */}
            <div className="group cursor-pointer animate-fade-in-up">
              <div className="font-clash text-3xl md:text-4xl font-bold bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent tracking-wide group-hover:scale-105 transition-transform duration-300">
                NFTme
              </div>
            </div>

            {/* Navigation Links */}
            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 lg:gap-10 font-poppins text-sm md:text-base text-white/80 animate-fade-in-up animation-delay-200">
              {["Explore", "Marketplace", "Artists", "Contact"].map(
                (link, idx) => (
                  <a
                    key={link}
                    href="#"
                    className="relative group transition-all duration-300"
                  >
                    <span className="hover:text-highlight transition-colors duration-300">
                      {link}
                    </span>
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-grad-start to-grad-end transition-all duration-300 group-hover:w-full"></span>
                  </a>
                )
              )}
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 md:gap-4 animate-fade-in-up animation-delay-400">
              {/* Instagram */}
              <a
                href="#"
                className="group relative w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-highlight/25"
              >
                <svg
                  className="w-5 h-5 transition-colors duration-300 group-hover:text-black"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="#"
                className="group relative w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-highlight/25"
              >
                <svg
                  className="w-5 h-5 transition-colors duration-300 group-hover:text-black"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>

              {/* Twitter/X */}
              <a
                href="#"
                className="group relative w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-highlight/25"
              >
                <svg
                  className="w-4 h-4 transition-colors duration-300 group-hover:text-black"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Bottom Row: Legal / Copyright */}
          <div className="mt-12 md:mt-16 lg:mt-20 text-center md:text-left animate-fade-in-up animation-delay-600">
            <p className="font-poppins text-[11px] sm:text-xs text-white/60 flex flex-wrap items-center justify-center md:justify-start gap-x-2 gap-y-2">
              <a
                href="#"
                className="hover:text-white transition-colors duration-300 hover:underline underline-offset-2"
              >
                Privacy policy
              </a>
              <span className="hidden md:inline text-white/20">|</span>
              <span>Copyright @ 2026. All Rights Reserved.</span>
              <span className="hidden md:inline text-white/20">|</span>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300 hover:underline underline-offset-2"
              >
                Terms of service
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
