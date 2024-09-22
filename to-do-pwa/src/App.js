import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Signup from './pages/SignUp';
import Dashboard from './pages/Dashboard';
import { logEvent } from 'firebase/analytics';
import { analytics } from './firebase';
import UserProfile from './pages/UserProfile';

function usePageViews() {
  const location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
      case '/':
        document.title = 'Login';
        break;
      case '/signup':
        document.title = 'Sign Up';
        break;
      case '/dashboard':
        document.title = 'Dashboard';
        break;
      case '/userprofile':
        document.title = 'user profile';
        break;
      default:
        document.title = 'React App';
    }

    logEvent(analytics, 'page_view', {
      page_path: location.pathname,
    });
  }, [location]);
}

function PageViewTracker() {
  usePageViews();
  return null;
}

function App() {
  return (
    <Router>
      <PageViewTracker />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/userprofile" element={<UserProfile />} />
      </Routes>
    </Router>
  );
}

export default App;
