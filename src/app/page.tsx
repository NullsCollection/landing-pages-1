export default function Home() {
  // Project data array
  const projectData = [
    {
      id: 1,
      title: "Branding Design",
      category: "Branding",
      image:
        "https://images.unsplash.com/photo-1497215842964-222b430dc094?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: 2,
      title: "Best Marketing Tips",
      category: "Marketing",
      image:
        "https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: 3,
      title: "Web Design Trend",
      category: "Development",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80",
    },
    {
      id: 5,
      title: "Digital Marketing",
      category: "Marketing",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1115&q=80",
    },
    {
      id: 6,
      title: "Creative Agency",
      category: "Branding",
      image:
        "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: 7,
      title: "Creative Agency",
      category: "Branding",
      image:
        "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
  ];

  // Categories for filtering
  const categories = [
    "All Project",
    "Branding",
    "Design",
    "Marketing",
    "Development",
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="py-4">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <svg
                className="w-6 h-6 text-gray-500"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13 5L21 12L13 19"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M21 12H3"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-xl font-bold text-gray-500">SaaS</span>
            </div>

            <div className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-500 hover:text-gray-700">
                Home
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-700">
                Features
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-700">
                Team
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-700">
                Pricing
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-700">
                Contact
              </a>
            </div>

            <div className="hidden md:flex space-x-2">
              <button className="text-gray-500 hover:text-gray-700 transition-all border border-gray-500 px-6 py-2 rounded-md">
                Sign In
              </button>
              <button className="bg-[#b33b82] text-white px-6 py-1 rounded-md hover:bg-opacity-90 transition-all">
                Sign Up
              </button>
            </div>

            <div className="md:hidden">
              <button className="text-gray-500 hover:text-gray-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
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

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12 my-20">
            <div className="lg:w-1/2 grid grid-cols-2 gap-4">
              <div className="overflow-hidden rounded-lg">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                  alt="Team collaboration"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="overflow-hidden rounded-lg mt-8">
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                  alt="Team meeting"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="overflow-hidden rounded-lg">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                  alt="Developer working"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="overflow-hidden rounded-lg mt-8">
                <img
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                  alt="Design discussion"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            <div className="lg:w-1/2">
              <div className="mb-8">
                <span className="text-[#b33b82] font-semibold">
                  Why Choose Us
                </span>
                <h2 className="text-3xl font-bold text-gray-800 mt-2 mb-4">
                  Make Your Customers Happy By Giving Services.
                </h2>
                <p className="text-gray-600">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-[#b33b82]/10 p-3 rounded-full mr-4">
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
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">
                      A domain name is one of the first steps
                    </h3>
                    <p className="text-gray-600">
                      A domain name is one of the first steps to establishing
                      your brand. Secure a consistent brand image with a domain
                      name that matches your business.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-[#b33b82]/10 p-3 rounded-full mr-4">
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
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">
                      Professional and dedicated team
                    </h3>
                    <p className="text-gray-600">
                      Our team of professionals is dedicated to providing you
                      with the best service possible. We work tirelessly to
                      ensure your satisfaction.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <a
                  href="#"
                  className="inline-block bg-[#b33b82] text-white px-6 py-3 rounded-md hover:bg-opacity-90 transition-all font-medium"
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-6xl px-4 mb-20">
          <div className="text-center mb-12">
            <span className="text-[#b33b82] font-semibold">Our Portfolio</span>
            <h2 className="text-4xl font-bold text-gray-800 mt-2 mb-4">
              Our Recent Projects
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              There are many variations of passages of Lorem Ipsum available but
              the majority have suffered alteration in some form.
            </p>
          </div>

          {/* Filter Categories */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-2 rounded-md ${
                  index === 0
                    ? "bg-[#b33b82] text-white"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Project Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {projectData.map((project) => (
              <div
                key={project.id}
                className="group relative mx-auto max-w-sm pb-16"
              >
                {/* Background image */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-64 w-full rounded-2xl object-cover shadow-lg"
                />

                {/* Floating card */}
                <div
                  className="absolute inset-x-4 -bottom-10 rounded-2xl border border-slate-200 bg-white/95 p-6 shadow-xl backdrop-blur
                   transition duration-200 group-hover:-translate-y-0.5 group-hover:shadow-2xl text-center"
                >
                  <p className="text-sm font-medium text-gray-500">
                    {project.category}
                  </p>
                  <h3 className="mt-1 text-lg font-semibold text-gray-800">
                    {project.title}
                  </h3>
                  <button
                    className="mt-4 w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-2 text-gray-800
                     transition hover:bg-[#b33b82] hover:text-white active:scale-[0.98]"
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="text-white">
        <div className="container bg-slate-900 mx-auto max-w-6xl px-4 py-16 relative overflow-hidden">
          <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-white/10"></div>
          <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-white/10"></div>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Ready to get started?</h2>
            <p className="text-gray-200 max-w-2xl mx-auto">
              Start your journey with us today and unlock the full potential of
              your business.
            </p>
          </div>

          <div className="text-center">
            <a
              href="#"
              className="inline-block bg-white text-[#b33b82] px-6 py-3 rounded-md hover:bg-opacity-90 transition-all font-medium"
            >
              Get Started
            </a>
          </div>
        </div>
      </section>

      {/* Developer Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-12 my-20">
            <span className="text-[#b33b82] font-semibold">About Us</span>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Meet Our Development Team
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our expert developers create cutting-edge solutions with the
              latest technologies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Developer 1 */}
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="h-48 bg-gradient-to-r from-[#b33b82] to-purple-700 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-24 w-24 text-white"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Alex Johnson
                </h3>
                <p className="text-[#b33b82] font-medium mb-3">
                  Lead Frontend Developer
                </p>
                <p className="text-gray-600 mb-4">
                  Specializes in React and Next.js with 8+ years of experience
                  building responsive web applications.
                </p>
                <div className="flex space-x-3">
                  <a href="#" className="text-gray-500 hover:text-[#b33b82]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-500 hover:text-[#b33b82]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Developer 2 */}
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="h-48 bg-gradient-to-r from-[#b33b82] to-purple-700 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-24 w-24 text-white"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Sarah Chen
                </h3>
                <p className="text-[#b33b82] font-medium mb-3">
                  Backend Developer
                </p>
                <p className="text-gray-600 mb-4">
                  Expert in Node.js and database architecture with experience in
                  building scalable API solutions.
                </p>
                <div className="flex space-x-3">
                  <a href="#" className="text-gray-500 hover:text-[#b33b82]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-500 hover:text-[#b33b82]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Developer 3 */}
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="h-48 bg-gradient-to-r from-[#b33b82] to-purple-700 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-24 w-24 text-white"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Michael Rodriguez
                </h3>
                <p className="text-[#b33b82] font-medium mb-3">
                  UI/UX Designer
                </p>
                <p className="text-gray-600 mb-4">
                  Creates beautiful, intuitive interfaces with a focus on user
                  experience and accessibility.
                </p>
                <div className="flex space-x-3">
                  <a href="#" className="text-gray-500 hover:text-[#b33b82]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-500 hover:text-[#b33b82]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-6">
              Developed with ❤️ by RRM Digital Services
            </p>
            <a
              href="#"
              className="inline-flex items-center text-[#b33b82] hover:underline font-medium"
            >
              View all team members
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-1"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-6xl px-4 my-20">
          <div className="text-center mb-12">
            <span className="text-[#b33b82] font-semibold">Pricing Table</span>
            <h2 className="text-4xl font-bold text-gray-800 mt-2 mb-4">
              Our Pricing Plans
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              There are many variations of passages of Lorem Ipsum available but
              the majority have suffered alteration in some form.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row justify-center items-center gap-8 mt-16">
            {/* Basic Plan */}
            <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg p-8 relative overflow-hidden">
              <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-[#b33b82]/10"></div>
              <div className="relative z-10">
                <h3 className="text-lg font-semibold text-gray-700 mb-6">
                  STARTING FROM
                </h3>
                <div className="text-3xl font-bold text-[#b33b82] mb-6">
                  $ 19.99/mo
                </div>

                <ul className="space-y-4 mb-8">
                  <li className="text-center text-gray-600">5 User</li>
                  <li className="text-center text-gray-600">
                    All UI components
                  </li>
                  <li className="text-center text-gray-600">Lifetime access</li>
                  <li className="text-center text-gray-600">Free updates</li>
                  <li className="text-center text-gray-600">
                    Use on 1 (one) project
                  </li>
                  <li className="text-center text-gray-600">
                    4 Months support
                  </li>
                </ul>

                <button className="w-full border border-gray-300 text-[#b33b82] font-medium py-3 px-6 rounded-full hover:bg-gray-50 transition-colors">
                  Purchase Now
                </button>
              </div>
            </div>

            {/* Popular Plan */}
            <div className="w-full max-w-sm bg-[#b33b82] text-white rounded-lg p-8 relative overflow-hidden scale-105 shadow-xl z-10">
              <div className="absolute top-6 left-0 right-0 flex justify-center">
                <span className="bg-white text-[#b33b82] text-sm font-medium px-4 py-1 rounded-full">
                  POPULAR
                </span>
              </div>
              <div className="mt-8">
                <h3 className="text-lg font-semibold mb-6">STARTING FROM</h3>
                <div className="text-3xl font-bold mb-6">$ 30.99/mo</div>

                <ul className="space-y-4 mb-8">
                  <li className="text-center">5 User</li>
                  <li className="text-center">All UI components</li>
                  <li className="text-center">Lifetime access</li>
                  <li className="text-center">Free updates</li>
                  <li className="text-center">Use on 1 (one) project</li>
                  <li className="text-center">4 Months support</li>
                </ul>

                <button className="w-full bg-white text-[#b33b82] font-medium py-3 px-6 rounded-full hover:bg-gray-100 transition-colors">
                  Purchase Now
                </button>
              </div>
            </div>

            {/* Premium Plan */}
            <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg p-8 relative overflow-hidden">
              <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-[#b33b82]/10"></div>
              <div className="relative z-10">
                <h3 className="text-lg font-semibold text-gray-700 mb-6">
                  STARTING FROM
                </h3>
                <div className="text-3xl font-bold text-[#b33b82] mb-6">
                  $ 70.99/mo
                </div>

                <ul className="space-y-4 mb-8">
                  <li className="text-center text-gray-600">5 User</li>
                  <li className="text-center text-gray-600">
                    All UI components
                  </li>
                  <li className="text-center text-gray-600">Lifetime access</li>
                  <li className="text-center text-gray-600">Free updates</li>
                  <li className="text-center text-gray-600">
                    Use on 1 (one) project
                  </li>
                  <li className="text-center text-gray-600">
                    4 Months support
                  </li>
                </ul>

                <button className="w-full border border-gray-300 text-[#b33b82] font-medium py-3 px-6 rounded-full hover:bg-gray-50 transition-colors">
                  Purchase Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
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

      {/* Footer */}
      <footer className="bg-[#b33b82] text-white py-12">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <h3 className="text-xl font-bold mb-4">Company</h3>
              <p className="text-white/80 mb-4">
                We create digital experiences that help businesses grow and
                thrive in today's competitive landscape.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-6.626-5.373-12-12-12S2 5.373 2 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                    />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                    />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    Portfolio
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-xl font-bold mb-4">Services</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    Web Development
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    App Development
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    UI/UX Design
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    Digital Marketing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    Consulting
                  </a>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="text-xl font-bold mb-4">Newsletter</h3>
              <p className="text-white/80 mb-4">
                Subscribe to our newsletter for the latest updates and offers.
              </p>
              <form className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-grow p-2 rounded-l-md bg-white text-gray-900 placeholder-gray-500 focus:outline-none"
                />
                <button
                  type="submit"
                  className="bg-slate-900 text-white px-4 py-2 rounded-r-md hover:bg-slate-800 transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          <div className="border-t border-white/20 mt-12 pt-8 text-center text-white/80">
            <p>
              © {new Date().getFullYear()} Your Company. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
