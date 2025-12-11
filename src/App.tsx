import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Hero } from './components/sections/Hero';
import { Projects } from './components/sections/Projects';
import { Publications } from './components/sections/Publications';
import { Teaching } from './components/sections/Teaching';

function App() {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans selection:bg-indigo-100 selection:text-indigo-900">
      <Navbar />

      <main>
        <Hero />
        <Projects />
        <Publications />
        <Teaching />

        {/* Contact Section inline for simplicity */}
        <section id="contact" className="py-24 bg-zinc-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
          <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to collaborate?</h2>
            <p className="text-xl text-zinc-400 mb-10 max-w-2xl mx-auto">
              I'm always open to discussing new research opportunities, speaking engagements, or interesting projects.
            </p>
            <button
              onClick={() => window.location.href = 'mailto:christian.gonzalez' + '@' + 'ulpgc.es'}
              className="inline-block px-8 py-4 bg-white text-zinc-900 rounded-full font-bold text-lg hover:scale-105 transition-transform"
            >
              Get in Touch
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
