import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import Header from '../components/Header';
import { Mic, HeartPulse } from 'lucide-react';

const LandingPage = () => {
    const { t } = useLanguage();

    return (
        <div className="min-h-[100dvh] bg-gray-50 flex flex-col font-sans">
            <Header />
            <main className="flex-1 flex flex-col items-center justify-center p-6 text-center fade-in">
                <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                    <HeartPulse size={48} className="text-primary" />
                </div>
                <h2 className="text-4xl font-extrabold text-gray-900 mb-3 tracking-tight">{t('app_name')}</h2>
                <p className="text-lg text-gray-600 mb-10 max-w-xs leading-relaxed font-medium">
                    {t('tagline')}
                </p>

                <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-gray-100 w-full max-w-sm space-y-4">
                    <Link
                        to="/auth?mode=login"
                        className="w-full flex items-center justify-center py-4 bg-primary text-white rounded-2xl font-bold text-lg hover:bg-primaryLight active:scale-[0.98] transition-all shadow-md shadow-primary/20"
                    >
                        {t('login')}
                    </Link>
                    <Link
                        to="/auth?mode=register"
                        className="w-full flex items-center justify-center py-4 bg-white text-primary border-2 border-primary/20 rounded-2xl font-bold text-lg hover:bg-gray-50 hover:border-primary active:scale-[0.98] transition-all"
                    >
                        {t('register')}
                    </Link>
                </div>

                <div className="mt-12 flex items-center gap-2 text-gray-400 font-medium">
                    <Mic size={18} />
                    <span className="text-sm tracking-wide">Voice-First Healthcare</span>
                </div>
            </main>
        </div>
    );
};

export default LandingPage;
