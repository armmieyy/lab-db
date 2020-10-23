import firebase from 'firebase/app'
import 'firebase/firestore'

// Initialize Cloud Firestore through Firebase
if (!firebase.apps.length) {
  const firebaseConfig = {
    apiKey: 'AIzaSyBJvZfvVZPgTLWvlc55E1MUQNrTkZeevEY',
    authDomain: 'store-1238d.firebaseapp.com',
    databaseURL: 'https://store-1238d.firebaseio.com',
    projectId: 'store-1238d',
    storageBucket: 'store-1238d.appspot.com',
    messagingSenderId: '606503356112',
    appId: '1:606503356112:web:33a76f206a6bfe6e5800d5',
    measurementId: 'G-37XCKC380K',
  }

  firebase.initializeApp(firebaseConfig)
}

export const db = firebase.firestore()
