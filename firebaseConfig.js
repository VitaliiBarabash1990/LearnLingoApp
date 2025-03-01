import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyADC1mTCG_sgow0CznH3QclbDR9RxjBNkw",
	authDomain: "teacherlearn-56a90.firebaseapp.com",
	databaseURL:
		"https://teacherlearn-56a90-default-rtdb.europe-west1.firebasedatabase.app",
	projectId: "teacherlearn-56a90",
	storageBucket: "teacherlearn-56a90.firebasestorage.app",
	messagingSenderId: "431018046253",
	appId: "1:431018046253:web:401bf49dc87af7d8bcd9a4",
	measurementId: "G-15T1DQRGHM",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
