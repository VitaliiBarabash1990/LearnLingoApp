// Реєстрація користувача (Sign Up)

// import { createUserWithEmailAndPassword } from "firebase/auth";
// import { auth } from "./firebaseConfig";

// const signUp = async (email, password) => {
// 	try {
// 		const userCredential = await createUserWithEmailAndPassword(
// 			auth,
// 			email,
// 			password
// 		);
// 		console.log("User registered:", userCredential.user);
// 	} catch (error) {
// 		console.error("Error signing up:", error.message);
// 	}
// };

// Вхід користувача (Login)
// import { signInWithEmailAndPassword } from "firebase/auth";
// import { auth } from "./firebaseConfig";

// const login = async (email, password) => {
// 	try {
// 		const userCredential = await signInWithEmailAndPassword(
// 			auth,
// 			email,
// 			password
// 		);
// 		console.log("User logged in:", userCredential.user);
// 	} catch (error) {
// 		console.error("Error logging in:", error.message);
// 	}
// };

// Отримання даних про поточного користувача
// import { onAuthStateChanged } from "firebase/auth";
// import { auth } from "./firebaseConfig";

// onAuthStateChanged(auth, (user) => {
// 	if (user) {
// 		console.log("Current user:", user);
// 	} else {
// 		console.log("No user signed in");
// 	}
// });

// Вихід користувача (Logout)

// import { signOut } from "firebase/auth";
// import { auth } from "./firebaseConfig";

// const logout = async () => {
// 	try {
// 		await signOut(auth);
// 		console.log("User logged out");
// 	} catch (error) {
// 		console.error("Error logging out:", error.message);
// 	}
// };
