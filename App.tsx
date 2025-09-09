
import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

function App() {
  const handleSignUp = () => {
    console.log('SignUp pressed');
  };

  const handleLogin = () => {
    console.log('Login pressed');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome</Text>
      
      <View style={styles.buttonContainer}>
        <TouchableOpacity 
          style={styles.signUpButton}
          onPress={handleSignUp}
          activeOpacity={0.8}
        >
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.loginButton}
          onPress={handleLogin}
          activeOpacity={0.8}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
      
      <Text style={styles.helperText}>Choose an option to continue</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  welcomeText: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginBottom: 60,
  },
  buttonContainer: {
    width: '100%',
    paddingHorizontal: 32,
  },
  signUpButton: {
    backgroundColor: '#2563eb',
    paddingVertical: 16,
    borderRadius: 30,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  loginButton: {
    backgroundColor: '#1f2937',
    paddingVertical: 16,
    borderRadius: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  helperText: {
    marginTop: 32,
    color: '#6b7280',
    fontSize: 14,
  },
});

export default App;

