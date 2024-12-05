import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Dashboard } from './pages/Dashboard';
import { Training } from './pages/Training';
import { Progress } from './pages/Progress';
import { Profile } from './pages/Profile';
import { TutorialView } from './pages/TutorialView';
import { DailyTip } from './pages/DailyTip';
import { AuthProvider } from './contexts/AuthContext';
import { DogProvider } from './contexts/DogContext';

export default function App() {
  return (
    <AuthProvider>
      <DogProvider>
        <BrowserRouter>
          <div className="min-h-screen bg-sand-50">
            <Header />
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/training" element={<Training />} />
                <Route path="/progress" element={<Progress />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/tutorial/:command" element={<TutorialView />} />
                <Route path="/daily-tip" element={<DailyTip />} />
              </Routes>
            </main>
          </div>
        </BrowserRouter>
      </DogProvider>
    </AuthProvider>
  );
}