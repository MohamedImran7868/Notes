import { Stack } from 'expo-router';
import { AuthProvider, useAuth } from '../contexts/AuthContext';
import { DarkModeProvider, useDarkMode } from './contexts/DarkModeContext'
import { TouchableOpacity, Text, StyleSheet, button, Button } from 'react-native';

const HeaderLogout = () => {
  const { user, logout } = useAuth();

  return user ? (
    <TouchableOpacity style={styles.logoutButton} onPress={() => {
      logout();
    }}>
      <Text style={styles.logoutText}>Logout</Text>
    </TouchableOpacity>
  ) : null;
};

const HeaderDarkMode = () =>{
  const {darkmode, toggleDarkMode} = useDarkMode();
  return(
    <Button title={darkmode ? '🌙' : '☀️'} onPress={toggleDarkMode} style={styles.darModeBtn}/>
  )
}

const RootLayout = () => {
  return (
    <AuthProvider>
      <DarkModeProvider>
        <Stack
          screenOptions={{
            headerStyle: {
              backgroundColor: '#24aef9',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontSize: 20,
              fontWeight: 'bold',
            },
            headerTitleAlign: 'center',
            headerRight: () => <HeaderLogout />,
            headerLeft: () => <HeaderDarkMode />,
            contentStyle: {
              backgroundColor: '#fff',
            },
          }}
        >
          <Stack.Screen name='index' options={{ title: 'Home' }} />
          <Stack.Screen name='notes' options={{ headerTitle: 'Notes' }} />
          <Stack.Screen name='auth' options={{ headerTitle: 'Login' }} />
        </Stack>
      </DarkModeProvider>
    </AuthProvider>
  );
};

const styles = StyleSheet.create({
  logoutButton: {
    marginRight: 15,
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: '#ff3b30',
    borderRadius: 8,
  },
  logoutText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  }
});

export default RootLayout;