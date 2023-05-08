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
} from 'firebase/firestore';

export {
	signOut,
	signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
	getFirestore,
	onSnapshot,
	doc,
	setDoc,
	collection,
};
