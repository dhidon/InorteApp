import 'react-native-gesture-handler'
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';

import AuthProvider from './src/contexts/auth';
import { PacienteProvider } from './src/contexts/paciente';
import Routes from './src/routes/Index';
import AnamneseProvider from './src/contexts/anamneseContext';

export default function App() {

  return (
    <NavigationContainer>
      <AuthProvider>
        <PacienteProvider>
          <AnamneseProvider>
            <StatusBar/>
            <Routes/>
          </AnamneseProvider>
        </PacienteProvider>
      </AuthProvider>
    </NavigationContainer>

  )
}