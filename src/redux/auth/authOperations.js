import { createAsyncThunk } from "@reduxjs/toolkit";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../firebase/config.js";

export const SignUp = createAsyncThunk(
	"auth/signUpThunk",
	async (body, thunkAPI) => {
		try {
			await createUserWithEmailAndPassword(auth, body.email, body.password);

			await updateProfile(auth.currentUser, { displayName: body.login });

			const { uid, displayName, email } = auth.currentUser;

			return { uid, displayName, email };
		} catch (e) {
			return thunkAPI.rejectWithValue(e.message);
		}
	}
);
