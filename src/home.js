import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const HomeScreen = (props) => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Image
            source={require('../assets/settings-icon.png')} // Replace with your settings icon
            style={styles.icon}
          />
        </TouchableOpacity>
        <Text style={styles.appName}>BILLMATE</Text>
        <TouchableOpacity>
          <Image
            source={require('../assets/profile-icon.png')} // Replace with your profile picture
            style={styles.profileIcon}
          />
        </TouchableOpacity>
      </View>

      {/* Welcome Message */}
      <Text style={styles.welcomeText}>Welcome User</Text>

      {/* Menu Options */}
      <View style={styles.menu}>
        <TouchableOpacity style={styles.menuItem}>
          <Image
            source={require('../assets/dashboard-icon.png')} // Replace with a suitable dashboard icon
            style={styles.menuIcon}
          />
          <Text style={styles.menuText}>Dashboard</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Image
            source={require('../assets/notifications-icon.png')} // Replace with a suitable notifications icon
            style={styles.menuIcon}
          />
          <Text style={styles.menuText}>Notifications</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Image
            source={require('../assets/activity-icon.png')} // Replace with a suitable activity icon
            style={styles.menuIcon}
          />
          <Text style={styles.menuText}>Activity</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Image
            source={require('../assets/budget-icon.png')} // Replace with a suitable budget icon
            style={styles.menuIcon}
          />
          <Text style={styles.menuText}>Budget Plans</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E0E0E0', // Pale grey background
  },
  header: {
    marginTop: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#212121', // Deep black header
  },
  icon: {
    width: 24,
    height: 24,
    tintColor: '#FFFFFF', // White color for the settings icon
  },
  profileIcon: {
    width: 36,
    height: 36,
    borderRadius: 18,
  },
  appName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF', // White color for app name
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
    color: '#212121', // Rich black
  },
  menu: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  menuItem: {
    width: '42%',
    backgroundColor: '#CDDC39', // Lime green background
    padding: 20,
    margin: 10,
    borderRadius: 10,
    alignItems: 'center',
    elevation: 5, // Shadow effect
  },
  menuIcon: {
    width: 150,
    height: 150,
    marginBottom: 10,
    tintColor: '#37474F', // Charcoal grey for icons
  },
  menuText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#37474F', // Charcoal grey for text
  },
});

export default HomeScreen;
