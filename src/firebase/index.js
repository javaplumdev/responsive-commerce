import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
	onAuthStateChanged,
} from 'firebase/auth';
import {
	getFirestore,
	doc,
	setDoc,
	onSnapshot,
	collection,
	serverTimestamp,
	query,
	orderBy,
	deleteDoc,
} from 'firebase/firestore';

export {
	deleteDoc,
	signOut,
	signInWithEmailAndPassword,
	onAuthStateChanged,
	createUserWithEmailAndPassword,
	serverTimestamp,
	getFirestore,
	onSnapshot,
	doc,
	setDoc,
	collection,
	query,
	orderBy,
};
