import { configureStore } from '@reduxjs/toolkit';
import testimonialsReducer from '../features/testimonials/testimonialsSlice';

export const store = configureStore({
	reducer: {
		testimonials: testimonialsReducer,
	},
});
