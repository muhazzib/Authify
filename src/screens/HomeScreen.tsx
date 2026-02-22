import React, { useContext } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import Card from '../components/Card';
import UserContext from '../store/context/UserContext';
import Button from '../components/Button';
import { LOADING_TYPES } from '../constants';

const HomeScreen = () => {
  const { state, logout } = useContext(UserContext);

  return (
    <View style={styles.container}>
      <Card styles={styles.card}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>{state.user?.name?.charAt(0)}</Text>
        </View>

        <Text style={styles.name}>{state.user?.name}</Text>
        <Text style={styles.email}>{state.user?.email}</Text>
        <Button
          handleSubmit={() =>
            Alert.alert('Logout', 'Are you sure you want to logout?', [
              { text: 'Cancel', style: 'cancel' },
              { text: 'Logout', onPress: logout, style: 'destructive' },
            ])
          }
          text="Logout"
          loading={state.loading === LOADING_TYPES.LOGOUT}
          styles={styles.logoutButton}
        />
      </Card>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f6f8',
    justifyContent: 'center',
    padding: 20,
  },
  card: {
    alignItems: 'center',
  },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: '#4f46e5',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  avatarText: {
    fontSize: 32,
    color: '#fff',
    fontWeight: 'bold',
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  email: {
    fontSize: 14,
    color: '#777',
    marginBottom: 10,
  },
  logoutButton: {
    backgroundColor: '#ef4444',
    paddingHorizontal: 40,
    borderRadius: 2,
  },
  logoutText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
