🏥 GramSethu – MVP

Voice-First Rural Healthcare Assistant

GramSethu is an offline-first, voice-enabled rural healthcare assistant designed to support early symptom triage in low-connectivity environments.

This MVP demonstrates a clean, mobile-first interface built with modern web technologies and localized voice interaction.


---

🚀 Tech Stack

React (Vite)

Tailwind CSS v4

React Router DOM

Lucide React Icons

Web Speech API (webkitSpeechRecognition)

Web Storage API



---

✨ Features

🌍 Multi-Language Support

Implemented using React Context API with dictionary support for:

Kannada

Hindi

English



---

🎤 Voice Recognition

Custom useSpeechRecognition hook

Converts spoken input into text using the Web Speech API

Real-time transcription display



---

🧠 AI Simulation Logic (Rule-Based Triage)

The MVP uses a localized keyword-based rule system to simulate AI behavior:

Fever / Pain → Moderate Risk

Chest Pain / Shortness of Breath → High Risk

Other symptoms → Low Risk


Supports keyword detection in English, Kannada, and Hindi.


---

📱 Pages Included

Landing Page
Clean introduction with call-to-action.

Authentication Page
Combined Login & Register demo interface.

Dashboard
Main hub with welcome banner and voice record button.

Voice Symptom Page
Displays live transcription and evaluates symptoms.

Result Page
Displays triage level with color-coded feedback:

High → 🔴 Red

Moderate → 🟠 Orange

Low → 🟢 Green
Includes appropriate next-step guidance.




---

💾 Data Handling

Results stored locally using Web Storage API.

No external database integration (MVP scope).

Offline-first architecture.



---

🛠 Setup & Installation

1️⃣ Install Dependencies

npm install

2️⃣ Run Development Server

npm run dev

The application will start locally via Vite.


---

🧪 Build Verification

Successfully validated production build.

Resolved compatibility constraints between Vite and Tailwind CSS v4.

Application builds without runtime errors.



---

⚠️ Disclaimer

This MVP uses a simplified rule-based system to simulate AI triage logic.
It does not provide medical diagnosis and is intended solely for demonstration purposes.


---

🔮 Future Scope

Replace rule-based logic with trained ML model

Add encrypted storage

Expand dialect recognition

Integrate with public health APIs (subject to authorization)



---

👥 Team

Built as part of a hackathon MVP demonstration.


---

