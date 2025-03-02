import { ref, get } from "firebase/database";
import { database } from "../../firebase/config.js";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

export const getTeachers = createAsyncThunk(
	"teachers/getTeachers",
	async (_, thunkAPI) => {
		const dbRef = ref(database, "teachers");

		try {
			const snapshot = await get(dbRef);
			if (snapshot.exists()) {
				const data = snapshot.val();
				const allTeachers = Object.values(data);
				return allTeachers;
			} else {
				toast.warn("No data available");
			}
		} catch (error) {
			console.error("Error fetching data:", error);
			toast.error(error);
			return thunkAPI.rejectWithValue(error.message);
		}
	}
);
