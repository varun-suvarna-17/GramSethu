import React from 'react';
import { Link } from 'react-router-dom';
import { Mic, HeartPulse, WifiOff, Stethoscope } from 'lucide-react';

const LandingPage = () => {
    return (
        <div className="min-h-[100dvh] bg-white flex flex-col font-sans fade-in">
            <main className="flex-1 flex flex-col items-center justify-center p-6 text-center max-w-3xl mx-auto w-full">

                {/* Illustration / Icon */}
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-6 shadow-sm">
                    <HeartPulse size={40} className="text-primary" />
                </div>

                {/* Main Headings */}
                <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-3 tracking-tight">
                    Gram<span className="text-primary">Sethu</span>
                </h1>
                <h2 className="text-lg md:text-xl text-gray-600 font-medium mb-8 max-w-md mx-auto leading-relaxed">
                    An Offline-First AI Triage Assistant for Rural Healthcare
                </h2>

                {/* Features Description */}
                <div className="bg-primary/5 border border-primary/10 rounded-2xl p-6 mb-10 w-full max-w-sm mx-auto text-left shadow-sm">
                    <ul className="space-y-4 text-gray-700 font-medium text-sm sm:text-base">
                        <li className="flex items-center gap-3">
                            <div className="bg-white p-2 rounded-full shadow-sm shrink-0">
                                <Mic size={18} className="text-primary" />
                            </div>
                            <span>Voice-based symptom reporting</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <div className="bg-white p-2 rounded-full shadow-sm shrink-0">
                                <WifiOff size={18} className="text-primary" />
                            </div>
                            <span>Works without constant internet</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <div className="bg-white p-2 rounded-full shadow-sm shrink-0">
                                <Stethoscope size={18} className="text-primary" />
                            </div>
                            <span>Guides users to appropriate care</span>
                        </li>
                    </ul>
                </div>

                {/* Action Buttons */}
                <div className="w-full max-w-sm space-y-4">
                    <Link
                        to="/auth?mode=login"
                        className="w-full flex items-center justify-center py-4 bg-primary text-white rounded-full font-bold text-lg hover:bg-primary-light active:scale-[0.98] transition-all shadow-md shadow-primary/30"
                    >
                        Login
                    </Link>
                    <Link
                        to="/auth?mode=register"
                        className="w-full flex items-center justify-center py-4 bg-white text-primary border-2 border-primary/20 rounded-full font-bold text-lg hover:bg-gray-50 hover:border-primary active:scale-[0.98] transition-all shadow-sm"
                    >
                        Register
                    </Link>
                </div>

            </main>

            {/* Footer */}
            <footer className="py-6 text-center text-gray-400 text-sm font-medium">
                &copy; 2026 GramSethu
            </footer>
        </div>
    );
};

export default LandingPage;
