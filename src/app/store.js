import { configureStore } from "@reduxjs/toolkit";
import emailsReducer from "../features/EmailList/emailListSlice";
import emailBodyReducer from "../features/EmailBody/EmailBodySlice";
export const store = configureStore({
	reducer: {
		emails: emailsReducer,
		emailBody: emailBodyReducer,
	},
});
