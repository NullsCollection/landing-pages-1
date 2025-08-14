import ProjectData from "../../../data/portfolio";

const categories = [
  "All Project",
  "Branding",
  "Design",
  "Marketing",
  "Development",
];

export default function Portfolio() {
  return (
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
          {ProjectData.map((project) => (
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
  );
}
