import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchEmail = createAsyncThunk("email/fetchEmail ", async () => {
	try {
		const { data } = await axios.get("https://flipkart-email-mock.vercel.app/");
		return data;
	} catch (error) {
		console.error(error);
	}
});

export const emailSlice = createSlice({
	name: "emails",
	initialState: {
		status: "idle",
		error: null,
		emails: [],
		body: null,
		favorites: [],
		read: [],
		currentFilter: "",
	},

	reducers: {
		addFavorites: (state, action) => {
			state.favorites = state.favorites.concat(action.payload);
		},
		removeFavorites: (state, action) => {
			state.favorites = state.favorites.filter(
				(item) => item.id !== action.payload.id
			);
		},

		setFilter: (state, action) => {
			state.currentFilter = action.payload;
		},
		setRead: (state, action) => {
			state.read = state.read.concat(action.payload);
		},
	},

	extraReducers: (builder) => {
		builder.addCase(fetchEmail.pending, (state) => {
			state.status = "loading";
		});
		builder.addCase(fetchEmail.fulfilled, (state, action) => {
			state.emails = action.payload.list;
			state.status = "fulfilled";
		});
		builder.addCase(fetchEmail.rejected, (state) => {
			state.status = "error";
		});
	},
});
export const { addFavorites, setFilter, setRead, removeFavorites } =
	emailSlice.actions;

export default emailSlice.reducer;
