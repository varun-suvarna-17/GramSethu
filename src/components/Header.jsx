import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Stethoscope, Globe } from 'lucide-react';

const Header = () => {
    const { lang, setLang } = useLanguage();

    return (
        <header className="bg-white shadow-sm sticky top-0 z-10 border-b border-gray-100">
            <div className="max-w-4xl mx-auto px-4 h-16 flex items-center justify-between">
                <div className="flex items-center gap-2 text-primary">
                    <Stethoscope size={28} />
                    <h1 className="text-xl font-bold tracking-tight">GramSethu</h1>
                </div>
                <div className="flex items-center gap-2 bg-gray-50 px-3 py-1.5 rounded-full border border-gray-100 lg:hover:bg-gray-100 transition-colors">
                    <Globe size={16} className="text-gray-500" />
                    <select
                        value={lang}
                        onChange={(e) => setLang(e.target.value)}
                        className="bg-transparent text-gray-700 text-sm font-medium focus:ring-0 focus:outline-none cursor-pointer"
                    >
                        <option value="english">English</option>
                        <option value="kannada">ಕನ್ನಡ</option>
                        <option value="hindi">हिंदी</option>
                    </select>
                </div>
            </div>
        </header>
    );
};

export default Header;
