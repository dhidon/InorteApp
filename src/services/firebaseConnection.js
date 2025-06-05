import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyAQmMZF_wMsemFzEbJJ7QEc15_zJyRKE00",
  authDomain: "inorteapp.firebaseapp.com",
  projectId: "inorteapp",
  storageBucket: "inorteapp.firebasestorage.app",
  messagingSenderId: "749970669637",
  appId: "1:749970669637:web:95e000efd6e96aafb7232c"
};

const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
})

export { auth }