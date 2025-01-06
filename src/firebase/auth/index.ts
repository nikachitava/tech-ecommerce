import { auth } from "../firebase";
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signInWithPopup,
	GoogleAuthProvider,
} from "firebase/auth";

interface UserTypes {
	email: string;
	password: string;
}

export const doCreateUserWithEmailAndPassword = async ({
	email,
	password,
}: UserTypes) => {
	try {
		return await createUserWithEmailAndPassword(auth, email, password);
	} catch (error) {
		console.error("Error creating user:", error);
		throw error;
	}
};

export const doSignInWithEmailAndPassword = async ({
	email,
	password,
}: UserTypes) => {
	try {
		return await signInWithEmailAndPassword(auth, email, password);
	} catch (error) {
		console.error("Error signing in:", error);
		throw error;
	}
};

export const doSignInWithGoogle = async () => {
	try {
		const provider = new GoogleAuthProvider();

		const result = await signInWithPopup(auth, provider);
		console.log("Signed in with Google");
		return result.user;
	} catch (error) {
		console.error("Error signing in with Google:", error);
		throw error;
	}
};

export const doSignOut = async () => {
	try {
		return await auth.signOut();
	} catch (error) {
		console.error("Error signing out:", error);
		throw error;
	}
};
