# 🚀 PrepForge.AI

### AI-Powered Interview Preparation Platform

PrepForge.AI is an AI-powered interview practice platform built to help students and job seekers prepare for real-world interviews in a more structured and practical way.

Users can sign in with Google, choose their target role and experience level, upload their resume, practice AI-generated interview questions, answer questions using their voice, and review their performance through reports and interview history.

PrepForge.AI also includes a credit-based system that allows users to purchase additional interview credits through Razorpay.

> **Practice smarter. Improve continuously. Be ready for your next interview.**

## 🌐 Live Demo

🚀 **[Try PrepForge.AI](https://prepforge-client-njtz.onrender.com)**

## ✨ Features

- 🔐 Google Authentication using Firebase
- 🎯 Role-based Interview Preparation
- 📄 Resume Upload & Analysis
- 🤖 AI-generated Interview Questions
- 🎤 Voice-based Interview Practice
- ⏱️ Timed Interview Sessions
- 📊 Interview Reports & Feedback
- 🕒 Interview History
- 💳 Credit-based Interview System
- 💰 Razorpay Payment Integration
- 🔄 AI Model Fallback Support
- 📱 Responsive User Interface

## 🔄 How PrepForge.AI Works

The application follows a simple interview preparation workflow.

### 1. 🔐 Sign In

Users sign in using their Google account.

Firebase handles Google authentication, and the backend creates and manages the authenticated application session.

### 2. 🎯 Set Up an Interview

After signing in, users can choose:

- Target job role
- Experience level
- Interview mode

Users can also optionally upload their resume in PDF format.

### 3. 📄 Resume Processing

If a resume is uploaded, the backend processes the PDF and extracts its text using `pdfjs-dist`.

The extracted resume information is then used along with the selected role to generate more relevant interview questions.

### 4. 🤖 AI Question Generation

PrepForge.AI uses OpenRouter Chat Completions to generate interview questions.

The application also supports configured fallback AI models so that the interview generation process can remain reliable if the primary model is unavailable.

### 5. 🎤 Practice the Interview

Users answer the generated questions during an interview session.

The platform uses browser-based speech APIs to support voice-based answering and includes a timer to make the practice session feel more like a real interview.

### 6. 📊 Review Performance

After completing an interview, the application stores the interview data.

Users can access:

- Interview reports
- Feedback
- Previous interview sessions
- Interview history

This helps candidates understand their performance and identify areas they can improve.

### 7. 💳 Purchase Interview Credits

PrepForge.AI uses a credit-based system for interview sessions.

Users can purchase additional credits through Razorpay and use them for more interview practice sessions.

---

## 🛠️ Tech Stack

### Frontend

- React
- Vite
- Tailwind CSS
- Redux Toolkit
- React Router
- Axios
- Motion

### Authentication

- Firebase Google Authentication

### Backend

- Node.js
- Express.js

### Database

- MongoDB
- Mongoose

### Artificial Intelligence

- OpenRouter Chat Completions
- AI-generated interview questions
- Resume-based analysis
- Configured fallback AI models

### Resume Processing

- Multer for file uploads
- pdfjs-dist for PDF text extraction

### Payments

- Razorpay

### Interview Voice Features

- Browser Speech APIs
- Voice-based answering
- Interview timer

  
## 🏗️ Project Architecture

```text
                         ┌─────────────────────┐
                         │        User         │
                         └──────────┬──────────┘
                                    │
                                    ▼
                         ┌─────────────────────┐
                         │   React + Vite      │
                         │   Tailwind CSS      │
                         └──────────┬──────────┘
                                    │
                              REST API
                                    │
                                    ▼
                         ┌─────────────────────┐
                         │  Node.js + Express  │
                         └──────────┬──────────┘
                                    │
               ┌────────────────────┼────────────────────┐
               │                    │                    │
               ▼                    ▼                    ▼
       ┌──────────────┐    ┌────────────────┐   ┌──────────────┐
       │   MongoDB    │    │   OpenRouter   │   │   Razorpay   │
       │  + Mongoose  │    │      AI        │   │   Payments   │
       └──────────────┘    └────────────────┘   └──────────────┘
                                    │
                                    ▼
                         ┌─────────────────────┐
                         │ Interview Questions │
                         │ & AI Processing     │
                         └─────────────────────┘
```

## 🎯 Why I Built PrepForge.AI

Preparing for interviews can be challenging, especially when candidates don't always have someone available to practice with.

I built PrepForge.AI to create a more accessible and practical way to prepare for interviews.

Instead of simply reading a list of interview questions, candidates can actually practice answering them, use their resume as part of the preparation process, receive AI-generated questions, practice through voice, and review their previous sessions.

The idea behind the project is simple:

> **Prepare → Practice → Get Feedback → Improve → Perform Better**

## 💡 What I Learned

Building PrepForge.AI helped me work on several areas of full-stack development, including:
- Building REST APIs with Node.js and Express
- Working with MongoDB and Mongoose
- Managing frontend state with Redux Toolkit
- Implementing Google authentication with Firebase
- Integrating AI APIs using OpenRouter
- Processing uploaded PDF resumes
- Working with browser speech APIs
- Integrating Razorpay payments
- Managing authentication and sessions
- Connecting frontend and backend applications
- Working with environment variables and API security
- Deploying and maintaining a full-stack application
  
## 🚀 Future Improvements

Some improvements planned for future versions include:
- 🧠 More advanced AI interview evaluation
- 📊 Detailed performance analytics
- 🎯 Personalized learning recommendations
- 🏢 Company-specific interview preparation
- 💻 Technical coding interview mode
- 🎤 Improved speech and answer analysis
- 🤖 Support for additional AI models
- 📈 Skill-wise progress tracking
- 🏆 Interview preparation leaderboard
- 📱 Further mobile optimization

  ## 🤝 Feedback & Contributions

Thank you for taking the time to explore **PrepForge.AI**.

If you have any suggestions, ideas, or feedback that could help improve the project, feel free to open an issue or start a discussion in the repository.

If you find the project useful or interesting, consider giving it a ⭐ on GitHub. It helps support the project and encourages further development.

**Your feedback and contributions are always welcome.**


## 📌 Project Status

🟢 **Deployed & Actively Maintained**

PrepForge.AI is live and available to use, with ongoing improvements and new features planned.
