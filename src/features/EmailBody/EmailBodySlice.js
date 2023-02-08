import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchEmailBody = createAsyncThunk(
	"email/fetchEmailBody ",
	async (id) => {
		try {
			const { data } = await axios.get(
				`https://flipkart-email-mock.now.sh/?id=${id}`
			);
			return data;
		} catch (error) {
			console.error(error);
		}
	}
);

export const emailBodySlice = createSlice({
	name: "emailBody",
	initialState: {
		status: "idle",
		error: null,
		id: "",
		body: "",
	},

	reducers: {},

	extraReducers: (builder) => {
		builder.addCase(fetchEmailBody.pending, (state) => {
			state.status = "loading";
		});

		builder.addCase(fetchEmailBody.fulfilled, (state, action) => {
			state.id = action.payload.id;
			state.body = action.payload.body;
			state.status = "fulfilled";
		});
		builder.addCase(fetchEmailBody.rejected, (state) => {
			state.status = "error";
		});
	},
});

export default emailBodySlice.reducer;
