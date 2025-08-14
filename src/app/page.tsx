import Navbar from "@/components/layout/Navbar/Navbar";
import Hero from "@/components/section/Hero/Hero";
import About from "@/components/section/About/About";
import Portfolio from "@/components/section/Portfolio/Portfolio";
import CTA from "@/components/section/cta/cta";
import Team from "@/components/section/Team/Team";
import Pricing from "@/components/section/Pricing/Pricing";
import ContactUs from "@/components/section/ContactUs/ContactUs";
import Footer from "@/components/layout/Footer/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Why Choose Us Section */}
      <About />

      {/* Portfolio Section */}
      <Portfolio />

      {/* CTA */}
      <CTA />

      {/* Developer Team Section */}
      <Team />

      {/* Pricing */}
      <Pricing />
      {/* Contact Us Section */}
      <ContactUs />
      {/* Footer */}
      <Footer />
    </div>
  );
}
