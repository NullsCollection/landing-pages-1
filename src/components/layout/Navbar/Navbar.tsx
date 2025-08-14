const Navbar = () => {
  return (
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
  );
};

export default Navbar;
