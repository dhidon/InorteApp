import 'react-native-gesture-handler'
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';

import AuthProvider from './src/contexts/auth';
import Routes from './src/routes/Index';
import AnamneseProvider from './src/contexts/anamneseContext';

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <AnamneseProvider>
          <StatusBar/>
          <Routes/>
        </AnamneseProvider>
      </AuthProvider>
    </NavigationContainer>
  )
}