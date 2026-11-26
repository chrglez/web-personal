import { createContext, useContext, useState } from 'react';
import { translations, type Lang } from '../i18n/translations';

interface LanguageContextType {
    lang: Lang;
    t: typeof translations['en'];
    toggle: () => void;
}

const LanguageContext = createContext<LanguageContextType>({
    lang: 'en',
    t: translations['en'],
    toggle: () => {},
});

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
    const [lang, setLang] = useState<Lang>('en');
    const toggle = () => setLang(l => l === 'en' ? 'es' : 'en');

    return (
        <LanguageContext.Provider value={{ lang, t: translations[lang], toggle }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLang = () => useContext(LanguageContext);
