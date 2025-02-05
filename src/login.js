import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import { Button } from 'react-native-paper'; // Importing Button from react-native-paper
//import LinearGradient from 'react-native-linear-gradient';

const LoginScreen = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Handle login logic here
    console.log('Email:', email);
    console.log('Password:', password);
    props.navigation.navigate('Home');
  };

  return (
    <ImageBackground
      source={require('../assets/gradient-background.jpg')}
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Welcome Back!</Text>

        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#aaa"
          value={email}
          onChangeText={setEmail}
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#aaa"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <Button
          mode="contained"
          onPress={handleLogin}
          style={styles.loginButton}
        >
          <Text style={styles.loginText}>Login</Text>
        </Button>

        <TouchableOpacity style={styles.forgotPassword}>
          <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => props.navigation.navigate('Signup')}>
          <Text style={{color: 'blue', textAlign: 'center' }}>Don't have an account? Sign up here!</Text>
        </TouchableOpacity>

      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  container: {
    width: '80%',
    padding: 20,
    backgroundColor: '#212121', // White background with some opacity
    borderRadius: 10,
    paddingVertical: 30,
    alignItems: 'center',
    elevation: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#CDDC39',
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 25,
    paddingHorizontal: 20,
    marginVertical: 10,
    fontSize: 16,
    backgroundColor: '#fff',
  },
  loginButton: {
    width: '100%',
    padding: 15,
    borderRadius: 25,
    marginTop: 20,
    backgroundColor: '#CDDC39', // Change the color to match your design
  },
  signupButton: {
    width: '100%',
    padding: 10,
    borderRadius: 25,
    marginTop: 20,
    backgroundColor: '#CDDC39',
  },
  loginText:{
    color: '#212121',
    fontSize: 22,
  },
  signupText:{
    color: '#212121',
    fontSize: 16,
  },
  forgotPassword: {
    marginTop: 15,
  },
  forgotPasswordText: {
    color: '#CDDC39',
    textDecorationLine: 'underline',
  },
});

export default LoginScreen;
