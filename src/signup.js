import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function SignupScreen() {
  const navigation = useNavigation();

  // State to handle form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    billReferenceNumber: '',
    age: '',
    address: '',
    country: '',
  });

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = () => {
    const { name, email, password, confirmPassword, billReferenceNumber, age, address, country } = formData;

    if (!name || !email || !password || !confirmPassword || !billReferenceNumber || !age || !address || !country) {
      Alert.alert('Error', 'Please fill in all fields.');
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match.');
      return;
    }

    Alert.alert('Success', 'Signup successful!');
    navigation.navigate('Home');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Signup</Text>

      <TextInput
        style={styles.input}
        placeholder="Name"
        placeholderTextColor="#888"
        value={formData.name}
        onChangeText={(text) => handleInputChange('name', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#888"
        keyboardType="email-address"
        value={formData.email}
        onChangeText={(text) => handleInputChange('email', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#888"
        secureTextEntry
        value={formData.password}
        onChangeText={(text) => handleInputChange('password', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        placeholderTextColor="#888"
        secureTextEntry
        value={formData.confirmPassword}
        onChangeText={(text) => handleInputChange('confirmPassword', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Bill Reference Number"
        placeholderTextColor="#888"
        value={formData.billReferenceNumber}
        onChangeText={(text) => handleInputChange('billReferenceNumber', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Age"
        placeholderTextColor="#888"
        keyboardType="numeric"
        value={formData.age}
        onChangeText={(text) => handleInputChange('age', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Address"
        placeholderTextColor="#888"
        value={formData.address}
        onChangeText={(text) => handleInputChange('address', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Country"
        placeholderTextColor="#888"
        value={formData.country}
        onChangeText={(text) => handleInputChange('country', text)}
      />

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#212121',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#fff',
  },
  input: {
    width: '90%',
    height: 50,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    marginBottom: 15,
    fontSize: 16,
  },
  button: {
    width: '90%',
    height: 50,
    backgroundColor: '#CDDC39',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginTop: 20,
  },
  buttonText: {
    color: '#212121',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
