import React, { useState, useEffect } from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Asset } from 'expo-asset';
import LoginScreen from './app/login.js'; // Adjust the path if needed
import HomeScreen from './app/home.js';
import SignupScreen from './app/signup.js';

const Stack = createStackNavigator();

export default function App() {
  const [isReady, setIsReady] = useState(false);

  // Function to preload images
  const cacheImages = (images) => {
    return images.map((image) => Asset.fromModule(image).downloadAsync());
  };

  // Load assets before app renders
  useEffect(() => {
    const loadAssetsAsync = async () => {
      try {
        const imageAssets = cacheImages([
          require('./assets/activity-icon.png'),
          require('./assets/adaptive-icon.png'),
          require('./assets/budget-icon.png'),
          require('./assets/dashboard-icon.png'),
          require('./assets/favicon.png'),
          require('./assets/gradient-background.jpg'),
          require('./assets/icon.png'),
          require('./assets/notifications-icon.png'),
          require('./assets/profile-icon.png'),
          require('./assets/settings-icon.png'),
          require('./assets/splash-icon.png'),
        ]);

        await Promise.all(imageAssets);
        setIsReady(true);
      } catch (error) {
        console.error('Error loading assets:', error);
      }
    };

    loadAssetsAsync();
  }, []);

  // Show a loading screen while assets are loading
  if (!isReady) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  // Render your app after assets are loaded
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login"
      screenOptions={{
        headerShown: false, // This disables the header for all screens
      }}
      >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
});
