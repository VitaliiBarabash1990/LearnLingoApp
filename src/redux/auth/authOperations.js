import { createAsyncThunk } from "@reduxjs/toolkit";
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
	updateProfile,
} from "firebase/auth";
import { auth } from "../../firebase/config.js";

export const SignUp = createAsyncThunk(
	"auth/signUpThunk",
	async (body, thunkAPI) => {
		try {
			await createUserWithEmailAndPassword(auth, body.email, body.password);

			await updateProfile(auth.currentUser, { displayName: body.name });

			const { uid, displayName, email } = auth.currentUser;

			return { uid, displayName, email };
		} catch (e) {
			return thunkAPI.rejectWithValue(e.message);
		}
	}
);

export const LogIn = createAsyncThunk("auth/LogIn", async (body, thunkAPI) => {
	try {
		const response = await signInWithEmailAndPassword(
			auth,
			body.email,
			body.password
		);

		const { uid, displayName, email } = response.user;
		return { uid, displayName, email };
	} catch (e) {
		return thunkAPI.rejectWithValue(e.message);
	}
});

export const LogOut = createAsyncThunk("auth/LogOut", async (_, thunkAPI) => {
	try {
		await signOut(auth);
	} catch (e) {
		return thunkAPI.rejectWithValue(e.message);
	}
});
