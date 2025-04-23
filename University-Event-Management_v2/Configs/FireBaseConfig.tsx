// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
//@ts-ignore
import { getAuth, initializeAuth, getReactNativePersistence} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7Y4zNUlnN5vobjgANZimHvdrUBiBOj-Q",
  authDomain: "event-management-app-524ac.firebaseapp.com",
  projectId: "event-management-app-524ac",
  storageBucket: "event-management-app-524ac.firebasestorage.app",
  messagingSenderId: "241929572214",
  appId: "1:241929572214:web:3423d625751abe3449b457"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export const auth = initializeAuth(app,{
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
 })