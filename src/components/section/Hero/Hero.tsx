export default function Hero() {
  return (
    <section className="py-16 flex-grow flex items-center bg-[#b33b82]">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex flex-col md:flex-row items-center gap-12 my-20">
          {/* Left: Text */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Ready for SaaS Websites
              <br />
              Crafted by RRM Digital Services
            </h1>
            <p className="text-lg text-white/90 md:max-w-xl mb-8">
              Example Template for SaaS, Software, and App Landing Page.
              <br />
              Crafted with Tailwind Components by RRM Digital Services
            </p>
            <div className="flex flex-col sm:flex-row gap-4 md:justify-start justify-center">
              <button className="bg-white text-[#b33b82] px-6 py-3 rounded-md hover:bg-opacity-90 transition-all font-medium">
                Get Started Now
              </button>
              <button className="flex items-center justify-center space-x-2 text-white border border-white/30 px-6 py-3 rounded-md hover:bg-white/10 transition-all font-medium">
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M15.5 12L10.5 15.5V8.5L15.5 12Z"
                    fill="currentColor"
                  />
                </svg>
                <span>Play Intro Video</span>
              </button>
            </div>
          </div>

          {/* Right: Image */}
          <div className="w-full md:w-1/2">
            <div className="relative mt-8 md:mt-0">
              <img
                src="/images/illustration.png"
                alt="Dashboard Preview"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
