import { createSlice } from "@reduxjs/toolkit";
import { SignUp } from "./authOperations.js";
import { toast } from "react-toastify";

const initialState = {
	userId: null,
	login: null,
	email: null,
	isAuth: false,
	isAuthLoading: false,
	isError: null,
};

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		getCurrentUser: (state, { payload }) => ({
			...state,
			userId: payload.userId,
			login: payload.login,
			email: payload.email,
			avatar: payload.avatar,
			isAuth: true,
		}),
	},

	extraReducers: (builder) => {
		builder
			.addCase(SignUp.pending, (state) => {
				state.isAuthLoading = true;
				state.isError = null;
			})
			.addCase(SignUp.fulfilled, (state, { payload }) => {
				state.userId = payload.uid;
				state.login = payload.displayName;
				state.email = payload.email;
				state.isAuth = true;
				state.isAuthLoading = false;
			})
			.addCase(SignUp.rejected, (state, { payload }) => {
				console.error(payload.error);
				toast.error(`${payload.error}`);
				state.isAuthLoading = false;
				state.isError = payload.error;
			});
	},
});

export const { getCurrentUser } = authSlice.actions;

export default authSlice.reducer;
