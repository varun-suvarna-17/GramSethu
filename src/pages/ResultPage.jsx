import React from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import Header from '../components/Header';
import { AlertTriangle, Info, CheckCircle, Home } from 'lucide-react';

const ResultPage = () => {
    const [searchParams] = useSearchParams();
    const { t } = useLanguage();
    const risk = searchParams.get('risk') || 'Low';

    const getRiskConfig = () => {
        switch (risk) {
            case 'High':
                return {
                    color: 'text-red-600',
                    bg: 'bg-red-50',
                    border: 'border-red-200',
                    icon: <AlertTriangle size={72} className="text-red-500" />,
                    title: t('high_risk'),
                    adviceKey: 'visit_phc'
                };
            case 'Moderate':
                return {
                    color: 'text-orange-600',
                    bg: 'bg-orange-50',
                    border: 'border-orange-200',
                    icon: <Info size={72} className="text-orange-500" />,
                    title: t('moderate_risk'),
                    adviceKey: 'moderate_risk'
                };
            default:
                return {
                    color: 'text-primary',
                    bg: 'bg-primary/10',
                    border: 'border-primary/20',
                    icon: <CheckCircle size={72} className="text-primary" />,
                    title: t('low_risk'),
                    adviceKey: 'low_risk'
                };
        }
    };

    const config = getRiskConfig();

    return (
        <div className="min-h-[100dvh] bg-gray-50 flex flex-col font-sans">
            <Header />
            <main className="flex-1 max-w-lg w-full mx-auto p-4 sm:p-6 flex flex-col justify-center fade-in">
                <div className={`p-8 sm:p-12 rounded-[2.5rem] shadow-sm border ${config.border} ${config.bg} flex flex-col items-center text-center relative overflow-hidden`}>

                    <div className="mb-8 p-5 bg-white rounded-full shadow-sm">
                        {config.icon}
                    </div>

                    <h2 className="text-lg text-gray-500 font-bold tracking-widest uppercase mb-3">
                        {t('risk_level')}
                    </h2>

                    <h3 className={`text-3xl sm:text-4xl font-extrabold ${config.color} mb-8 tracking-tight leading-tight px-4`}>
                        {config.title}
                    </h3>

                    <div className="w-full h-px bg-black/5 my-4"></div>

                    <div className="text-lg text-gray-800 font-medium bg-white/70 backdrop-blur p-6 sm:p-8 rounded-3xl w-full shadow-sm border border-white/50">
                        <h4 className="font-extrabold text-gray-900 mb-3 uppercase tracking-wide text-sm">{t('advice')}</h4>
                        <p className="leading-relaxed">{t(config.adviceKey) || config.title}</p>
                        {risk === 'High' && (
                            <div className="mt-6 font-bold text-red-700 bg-red-100/80 p-4 rounded-xl flex items-center justify-center gap-2 border border-red-200/50">
                                <AlertTriangle size={20} className="animate-pulse" />
                                {t('visit_phc')}
                            </div>
                        )}
                    </div>

                    <Link
                        to="/dashboard"
                        className="w-full py-5 mt-10 bg-white text-gray-900 border-2 border-gray-200 rounded-2xl font-bold text-lg hover:border-primary hover:text-primary active:scale-[0.98] transition-all flex items-center justify-center gap-3 shadow-sm hover:shadow-md"
                    >
                        <Home size={22} />
                        {t('go_dashboard')}
                    </Link>
                </div>
            </main>
        </div>
    );
};

export default ResultPage;
