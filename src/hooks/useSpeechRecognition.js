import { useState, useEffect } from 'react';

export const useSpeechRecognition = (lang) => {
    const [text, setText] = useState('');
    const [isListening, setIsListening] = useState(false);
    const [recognition, setRecognition] = useState(null);

    useEffect(() => {
        if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
            const SpeechRec = window.SpeechRecognition || window.webkitSpeechRecognition;
            const rec = new SpeechRec();
            rec.continuous = true;
            rec.interimResults = true;
            rec.lang = lang === 'hindi' ? 'hi-IN' : lang === 'kannada' ? 'kn-IN' : 'en-IN';

            rec.onresult = (event) => {
                let finalTranscript = '';
                for (let i = event.resultIndex; i < event.results.length; i++) {
                    const transcript = event.results[i][0].transcript;
                    if (event.results[i].isFinal) {
                        finalTranscript += transcript + ' ';
                    }
                }
                if (finalTranscript) {
                    setText((prev) => prev + finalTranscript);
                }
            };

            rec.onerror = (event) => {
                console.error('Speech recognition error', event.error);
                setIsListening(false);
            };

            rec.onend = () => {
                setIsListening(false);
            };

            setRecognition(rec);
        } else {
            console.warn('Speech recognition not supported in this browser.');
        }
    }, [lang]);

    const startListening = () => {
        if (recognition) {
            setText('');
            setIsListening(true);
            recognition.start();
        }
    };

    const stopListening = () => {
        if (recognition) {
            setIsListening(false);
            recognition.stop();
        }
    };

    return { text, setText, isListening, startListening, stopListening, hasSupport: !!recognition };
};
