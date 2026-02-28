import React, { useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import Header from '../components/Header';
import { User, Phone, Lock } from 'lucide-react';

const AuthPage = () => {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const { t } = useLanguage();
    const initialMode = searchParams.get('mode') || 'login';
    const [mode, setMode] = useState(initialMode);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simple demo auth
        navigate('/dashboard');
    };

    return (
        <div className="min-h-[100dvh] bg-gray-50 flex flex-col font-sans">
            <Header />
            <main className="flex-1 flex flex-col items-center justify-center p-6 fade-in">
                <div className="w-full max-w-sm bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100">
                    <h2 className="text-3xl font-extrabold text-gray-900 mb-8 text-center tracking-tight">
                        {mode === 'login' ? t('login') : t('register')}
                    </h2>

                    <form onSubmit={handleSubmit} className="space-y-5">
                        {mode === 'register' && (
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-1.5 pl-1">{t('name')}</label>
                                <div className="relative">
                                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                                    <input
                                        type="text"
                                        required
                                        className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-gray-900 outline-none font-medium"
                                        placeholder="John Doe"
                                    />
                                </div>
                            </div>
                        )}

                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-1.5 pl-1">{t('phone')}</label>
                            <div className="relative">
                                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                                <input
                                    type="tel"
                                    required
                                    className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-gray-900 outline-none font-medium"
                                    placeholder="+91 0000000000"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-1.5 pl-1">{t('password')}</label>
                            <div className="relative">
                                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                                <input
                                    type="password"
                                    required
                                    className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-gray-900 outline-none font-medium"
                                    placeholder="••••••••"
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="w-full py-4 mt-8 bg-primary text-white rounded-2xl font-bold text-lg hover:bg-primaryLight active:scale-[0.98] transition-all shadow-md shadow-primary/20"
                        >
                            {mode === 'login' ? t('login') : t('register')}
                        </button>
                    </form>

                    <p className="mt-8 text-center text-sm text-gray-500 font-medium pb-2">
                        {mode === 'login' ? "Don't have an account? " : "Already have an account? "}
                        <button
                            onClick={() => setMode(mode === 'login' ? 'register' : 'login')}
                            className="text-primary font-bold hover:underline"
                        >
                            {mode === 'login' ? t('register') : t('login')}
                        </button>
                    </p>
                </div>
            </main>
        </div>
    );
};

export default AuthPage;
