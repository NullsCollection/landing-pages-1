export default function CTA() {
  return (
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
  );
}
