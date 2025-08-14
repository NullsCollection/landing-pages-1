export default function ContactUs() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto max-w-6xl px-4 my-20">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Column - Contact Info */}
          <div className="lg:w-1/2">
            <span className="text-[#b33b82] font-semibold">Contact Us</span>
            <h2 className="text-4xl font-bold text-gray-800 mt-2 mb-4">
              Get In Touch With Us
            </h2>
            <p className="text-gray-600 mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eius tempor incididunt ut labore et dolore magna aliqua. Ut enim
              adiqua minim veniam quis nostrud exercitation ullamco
            </p>

            {/* Location */}
            <div className="flex items-start mb-8">
              <div className="bg-gray-100 p-3 rounded-lg mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-[#b33b82]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-lg">Our Location</h3>
                <p className="text-gray-600">
                  99 S.t Jomblo Park Pekanbaru
                  <br />
                  28292, Indonesia
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start mb-8">
              <div className="bg-gray-100 p-3 rounded-lg mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-[#b33b82]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-lg">Phone Number</h3>
                <p className="text-gray-600">(+62)81 414 257 9980</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start">
              <div className="bg-gray-100 p-3 rounded-lg mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-[#b33b82]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-lg">Email Address</h3>
                <p className="text-gray-600">info@yourdomain.com</p>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="lg:w-1/2 relative">
            <div className="bg-white p-8 rounded-lg shadow-lg relative z-10">
              <form>
                <div className="mb-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#b33b82]/20 focus:border-[#b33b82]"
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#b33b82]/20 focus:border-[#b33b82]"
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="tel"
                    placeholder="Your Phone"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#b33b82]/20 focus:border-[#b33b82]"
                  />
                </div>
                <div className="mb-6">
                  <textarea
                    placeholder="Your Message"
                    rows={4}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#b33b82]/20 focus:border-[#b33b82]"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#b33b82] text-white py-3 px-6 rounded-md hover:bg-[#a0346f] transition-colors font-medium"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Decorative dots pattern */}
            <div className="absolute top-10 -right-8 w-24 h-64 hidden lg:block">
              <div className="grid grid-cols-3 gap-2">
                {[...Array(24)].map((_, i) => (
                  <div
                    key={i}
                    className="w-2 h-2 rounded-full bg-[#b33b82]/20"
                  ></div>
                ))}
              </div>
            </div>

            {/* Decorative corner */}
            <div className="absolute -top-10 -right-10 w-40 h-40 hidden lg:block">
              <div className="w-full h-full border-t-8 border-r-8 border-[#b33b82] rounded-tr-3xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
