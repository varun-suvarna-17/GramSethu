import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { useSpeechRecognition } from '../hooks/useSpeechRecognition';
import Header from '../components/Header';
import { Mic, Square, ArrowRight, AlertCircle } from 'lucide-react';

const VoiceSymptomPage = () => {
    const { lang, t } = useLanguage();
    const { text, isListening, startListening, stopListening, hasSupport } = useSpeechRecognition(lang);
    const navigate = useNavigate();
    const [analyzing, setAnalyzing] = useState(false);

    const handleAnalyze = () => {
        if (!text.trim()) return;
        setAnalyzing(true);

        // Simple rule-based logic for MVP
        setTimeout(() => {
            let risk = 'Low';
            const lowerText = text.toLowerCase();

            if (lowerText.includes('chest pain') || lowerText.includes('ಛಾತಿ ನೋವು') || lowerText.includes('छाती में दर्द') || lowerText.includes('ಉಸಿರಾಟದ ತೊಂದರೆ') || lowerText.includes('सांस लेने में तकलीफ') || lowerText.includes('severe')) {
                risk = 'High';
            } else if (lowerText.includes('fever') || lowerText.includes('ಜ್ವರ') || lowerText.includes('बुखार') || lowerText.includes('pain') || lowerText.includes('ನೋವು') || lowerText.includes('दर्द')) {
                risk = 'Moderate';
            }

            // Save to local storage
            const report = {
                date: new Date().toISOString(),
                symptoms: text,
                risk: risk
            };

            const existing = JSON.parse(localStorage.getItem('gramsethu_reports') || '[]');
            localStorage.setItem('gramsethu_reports', JSON.stringify([report, ...existing]));

            navigate(`/result?risk=${risk}`);
        }, 1500);
    };

    return (
        <div className="min-h-[100dvh] bg-gray-50 flex flex-col font-sans">
            <Header />
            <main className="flex-1 max-w-2xl w-full mx-auto p-4 sm:p-6 flex flex-col fade-in">
                <div className="bg-white p-6 sm:p-10 rounded-[2rem] shadow-sm border border-gray-100 flex-1 flex flex-col">
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight text-center mb-2">
                        {t('record_symptom')}
                    </h2>
                    <p className="text-base text-gray-500 text-center font-medium mb-10">
                        Tell us how you are feeling in your own voice.
                    </p>

                    {!hasSupport && (
                        <div className="bg-red-50 border border-red-100 text-red-700 p-4 rounded-2xl flex items-center gap-3 mb-8 shadow-sm">
                            <AlertCircle size={24} className="shrink-0" />
                            <p className="font-medium text-sm leading-relaxed">Speech recognition is not supported in this browser. Please use Google Chrome or Edge.</p>
                        </div>
                    )}

                    <div className="flex-1 flex flex-col items-center justify-center">
                        <button
                            onClick={isListening ? stopListening : startListening}
                            disabled={!hasSupport}
                            className={`w-36 h-36 sm:w-44 sm:h-44 rounded-full flex items-center justify-center transition-all duration-300 shadow-xl shadow-primary/20 ${isListening
                                    ? 'bg-red-500 hover:bg-red-600 animate-pulse ring-8 ring-red-500/20 shadow-red-500/30'
                                    : 'bg-primary hover:bg-primaryLight hover:scale-105 active:scale-95'
                                }`}
                        >
                            {isListening ? (
                                <Square size={48} className="text-white bg-transparent" fill="currentColor" />
                            ) : (
                                <Mic size={56} className="text-white" />
                            )}
                        </button>

                        <p className={`mt-8 text-lg font-bold transition-opacity duration-300 ${isListening ? 'opacity-100 text-red-500' : 'opacity-0'}`}>
                            {t('listening')}
                        </p>
                    </div>

                    <div className="w-full bg-gray-50/50 rounded-3xl border-2 border-dashed border-gray-200 p-6 sm:p-8 min-h-[140px] mb-8 relative transition-colors focus-within:border-primary/50 focus-within:bg-white">
                        {!text && !isListening ? (
                            <p className="text-gray-400 italic text-center absolute inset-0 flex items-center justify-center font-medium">
                                Your symptoms will appear here in text...
                            </p>
                        ) : (
                            <p className="text-gray-800 text-xl leading-relaxed font-medium">{text}</p>
                        )}
                    </div>

                    <button
                        onClick={handleAnalyze}
                        disabled={!text.trim() || analyzing}
                        className={`w-full py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-2 transition-all duration-200 ${text.trim() && !analyzing
                                ? 'bg-primary text-white hover:bg-primaryLight hover:-translate-y-1 active:translate-y-0 shadow-lg shadow-primary/30 border border-transparent'
                                : 'bg-gray-100 text-gray-400 cursor-not-allowed border border-gray-200'
                            }`}
                    >
                        {analyzing ? (
                            <span className="flex items-center gap-3">
                                <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                                Analyzing Symptoms...
                            </span>
                        ) : (
                            <>
                                {t('analyze')}
                                <ArrowRight size={22} />
                            </>
                        )}
                    </button>
                </div>
            </main>
        </div>
    );
};

export default VoiceSymptomPage;
