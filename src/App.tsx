import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Hero } from './components/sections/Hero';
import { Publications } from './components/sections/Publications';
import { Projects } from './components/sections/Projects';
import { Teaching } from './components/sections/Teaching';
import { useLang } from './context/LanguageContext';

function App() {
    const { t } = useLang();

    return (
        <div className="min-h-screen bg-white font-sans selection:bg-ulpgc-blue-10 selection:text-ulpgc-blue">
            <Navbar />

            <main>
                <Hero />
                <Projects />
                <Publications />
                <Teaching />

                <section id="contact" className="py-20 bg-ulpgc-blue">
                    <div className="max-w-5xl mx-auto px-6 text-center">
                        <h2 className="font-heading text-3xl font-bold text-white mb-4">
                            {t.contact.title}
                        </h2>
                        <p className="text-ulpgc-blue-10 mb-8 max-w-xl mx-auto leading-relaxed">
                            {t.contact.description}
                        </p>
                        <a
                            href="mailto:christian.gonzalez@ulpgc.es"
                            className="inline-block px-7 py-3 bg-white text-ulpgc-blue font-semibold rounded-full hover:bg-ulpgc-blue-10 transition-colors text-sm"
                        >
                            christian.gonzalez@ulpgc.es
                        </a>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}

export default App;
