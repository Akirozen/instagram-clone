// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAfNrVyIPUNtf9oRmL5AeeG3nmAN9D8d1M',
  authDomain: 'instagram-clone-eea1c.firebaseapp.com',
  projectId: 'instagram-clone-eea1c',
  storageBucket: 'instagram-clone-eea1c.appspot.com',
  messagingSenderId: '594411800632',
  appId: '1:594411800632:web:f2a98f71317c815c637ecd',
}

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()

const db = getFirestore()
const storage = getStorage()

export { app, db, storage }
