import React, { useState } from 'react';
import WelcomeScreen from './components/WelcomeScreen';
import SignUpScreen from './components/SignUpScreen';
import LoginScreen from './components/LoginScreen';
import LoggedInScreen from './components/LoggedInScreen';

type Screen = 'welcome' | 'signup' | 'login' | 'loggedIn';

function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('welcome');

  const handleSignUpPress = () => {
    setCurrentScreen('signup');
  };

  const handleLoginPress = () => {
    setCurrentScreen('login');
  };

  const handleBackToWelcome = () => {
    setCurrentScreen('welcome');
  };

  const handleLoginSuccess = () => {
    setCurrentScreen('loggedIn');
  };

  // Render the appropriate screen based on current state
  switch (currentScreen) {
    case 'signup':
      return <SignUpScreen onBackPress={handleBackToWelcome} />;
    
    case 'login':
      return <LoginScreen onBackPress={handleBackToWelcome} onLoginSuccess={handleLoginSuccess} />;
    
    case 'loggedIn':
      return <LoggedInScreen onLogoutPress={handleBackToWelcome} />;
    
    case 'welcome':
    default:
      return <WelcomeScreen onSignUpPress={handleSignUpPress} onLoginPress={handleLoginPress} />;
  }
}

export default App;