import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import Header from '../components/Header';
import { Mic, FileText, User } from 'lucide-react';

const Dashboard = () => {
    const { t } = useLanguage();

    return (
        <div className="min-h-[100dvh] bg-gray-50 flex flex-col font-sans">
            <Header />
            <main className="flex-1 max-w-4xl w-full mx-auto p-4 sm:p-6 fade-in">
                <div className="bg-white p-6 sm:p-8 rounded-[2rem] shadow-sm border border-gray-100 flex items-center justify-between mb-6">
                    <div>
                        <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">{t('welcome')}, User!</h2>
                        <p className="text-gray-500 mt-2 font-medium">What would you like to do today?</p>
                    </div>
                    <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                        <User size={28} />
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2">
                    <Link
                        to="/voice"
                        className="flex flex-col items-center justify-center p-8 sm:p-10 bg-primary rounded-[2rem] text-white hover:bg-primaryLight hover:-translate-y-1 active:scale-[0.98] transition-all shadow-lg shadow-primary/30 group"
                    >
                        <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <Mic size={40} className="text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-center leading-tight">{t('report_symptoms')}</h3>
                    </Link>

                    <button
                        onClick={() => alert('Demo: No previous reports yet!')}
                        className="flex flex-col items-center justify-center p-8 sm:p-10 bg-white border border-gray-200 rounded-[2rem] text-gray-800 hover:border-primary/30 hover:bg-gray-50 hover:-translate-y-1 active:scale-[0.98] transition-all group shadow-sm"
                    >
                        <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-6 text-gray-400 group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                            <FileText size={40} />
                        </div>
                        <h3 className="text-2xl font-bold text-center leading-tight">{t('view_reports')}</h3>
                    </button>
                </div>
            </main>
        </div>
    );
};

export default Dashboard;
