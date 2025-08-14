export default function Pricing() {
  return (
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
                <li className="text-center text-gray-600">All UI components</li>
                <li className="text-center text-gray-600">Lifetime access</li>
                <li className="text-center text-gray-600">Free updates</li>
                <li className="text-center text-gray-600">
                  Use on 1 (one) project
                </li>
                <li className="text-center text-gray-600">4 Months support</li>
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
                <li className="text-center text-gray-600">All UI components</li>
                <li className="text-center text-gray-600">Lifetime access</li>
                <li className="text-center text-gray-600">Free updates</li>
                <li className="text-center text-gray-600">
                  Use on 1 (one) project
                </li>
                <li className="text-center text-gray-600">4 Months support</li>
              </ul>

              <button className="w-full border border-gray-300 text-[#b33b82] font-medium py-3 px-6 rounded-full hover:bg-gray-50 transition-colors">
                Purchase Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
