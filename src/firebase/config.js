// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyC8hVVNKJ5XiQuXRULBWvFCGbzHoMt4teg',
	authDomain: 'responsive-commerce.firebaseapp.com',
	projectId: 'responsive-commerce',
	storageBucket: 'responsive-commerce.appspot.com',
	messagingSenderId: '871441436583',
	appId: '1:871441436583:web:f51c815de7911d2e35f082',
	measurementId: 'G-XTCPLMQM51',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
