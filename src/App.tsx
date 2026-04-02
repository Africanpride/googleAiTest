import { Navbar, Hero, About, Features, Services, Testimonials, Contact, Footer } from "./components/Sections";

export default function App() {
  return (
    <div className="min-h-screen font-sans">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Features />
        <Services />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
