import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
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
