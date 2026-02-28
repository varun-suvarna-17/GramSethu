import React, { createContext, useState, useContext } from 'react';

const translations = {
    hindi: {
        app_name: "GramSethu",
        tagline: "Bridging Rural Voices to Healthcare",
        login: "लॉगिन करें",
        register: "रजिस्टर करें",
        welcome: "नमस्ते",
        report_symptoms: "लक्षण दर्ज करें (आवाज़ से)",
        view_reports: "पिछले रिपोर्ट देखें",
        record_symptom: "अपने लक्षण बताएं",
        analyze: "लक्षणों का विश्लेषण करें",
        listening: "सुन रहा हूँ...",
        risk_level: "जोखिम स्तर",
        advice: "सलाह",
        visit_phc: "कृपया नजदीकी PHC (प्राथमिक स्वास्थ्य केंद्र) जाएं",
        go_dashboard: "डैशबोर्ड पर जाएं",
        low_risk: "कम जोखिम - पर्याप्त आराम करें।",
        moderate_risk: "मध्यम जोखिम - डॉक्टर से सलाह लें।",
        high_risk: "उच्च जोखिम - तुरंत नजदीकी अस्पताल जाएं!",
        logout: "लॉग आउट",
        phone: "फ़ोन नंबर",
        password: "पासवर्ड",
        name: "नाम"
    },
    kannada: {
        app_name: "ಗ್ರಾಮಸೇತು",
        tagline: "ಗ್ರಾಮೀಣ ಧ್ವನಿಗಳನ್ನು ಆರೋಗ್ಯ ರಕ್ಷಣೆಗೆ ಸೇತುವೆಯಾಗಿಸುವುದು",
        login: "ಲಾಗಿನ್ ಮಾಡಿ",
        register: "ನೋಂದಾಯಿಸಿ",
        welcome: "ನಮಸ್ಕಾರ",
        report_symptoms: "ಲಕ್ಷಣಗಳನ್ನು ವರದಿ ಮಾಡಿ (ಧ್ವನಿ)",
        view_reports: "ಹಿಂದಿನ ವರದಿಗಳನ್ನು ವೀಕ್ಷಿಸಿ",
        record_symptom: "ನಿಮ್ಮ ಲಕ್ಷಣಗಳನ್ನು ರೆಕಾರ್ಡ್ ಮಾಡಿ",
        analyze: "ಲಕ್ಷಣಗಳನ್ನು ವಿಶ್ಲೇಷಿಸಿ",
        listening: "ಕೇಳುತ್ತಿದ್ದೇನೆ...",
        risk_level: "ಅಪಾಯದ ಮಟ್ಟ",
        advice: "ಸಲಹೆ",
        visit_phc: "ದಯವಿಟ್ಟು ಹತ್ತಿರದ PHC ಗೆ ಭೇಟಿ ನೀಡಿ",
        go_dashboard: "ಡ್ಯಾಶ್‌ಬೋರ್ಡ್‌ಗೆ ಹೋಗಿ",
        low_risk: "ಕಡಿಮೆ ಅಪಾಯ - ಸಾಕಷ್ಟು ವಿಶ್ರಾಂತಿ ಪಡೆಯಿರಿ.",
        moderate_risk: "ಮಧ್ಯಮ ಅಪಾಯ - ವೈದ್ಯರನ್ನು ಸಂಪರ್ಕಿಸಿ.",
        high_risk: "ಹೆಚ್ಚಿನ ಅಪಾಯ - ತಕ್ಷಣ ಹತ್ತಿರದ ಆಸ್ಪತ್ರೆಗೆ ಭೇಟಿ ನೀಡಿ!",
        logout: "ಲಾಗ್ ಔಟ್",
        phone: "ಫೋನ್ ಸಂಖ್ಯೆ",
        password: "ಪಾಸ್ವರ್ಡ್",
        name: "ಹೆಸರು"
    },
    english: {
        app_name: "GramSethu",
        tagline: "Bridging Rural Voices to Healthcare",
        login: "Login",
        register: "Register",
        welcome: "Welcome",
        report_symptoms: "Report Symptoms (Voice)",
        view_reports: "View Previous Reports",
        record_symptom: "Record your symptoms",
        analyze: "Analyze Symptoms",
        listening: "Listening...",
        risk_level: "Risk Level",
        advice: "Advice",
        visit_phc: "Please visit the nearest PHC",
        go_dashboard: "Go to Dashboard",
        low_risk: "Low Risk - Get plenty of rest.",
        moderate_risk: "Moderate Risk - Consult a doctor.",
        high_risk: "High Risk - Visit the nearest hospital immediately!",
        logout: "Log Out",
        phone: "Phone Number",
        password: "Password",
        name: "Name"
    }
};

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [lang, setLang] = useState('english');

    const t = (key) => translations[lang][key] || key;

    return (
        <LanguageContext.Provider value={{ lang, setLang, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => useContext(LanguageContext);
