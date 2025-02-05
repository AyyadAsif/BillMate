import 'react-native-gesture-handler'; // Required for gesture handling in React Navigation
import { AppRegistry } from 'react-native'; // Required to register the app's entry point
import App from './App'; // Main app logic
import { name as appName } from './app.json'; // App name configuration

// Register the main app component
AppRegistry.registerComponent(appName, () => App);
