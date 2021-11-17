import {
	createAsyncThunk,
	createSlice,
	isRejectedWithValue,
} from '@reduxjs/toolkit';
import { fetchTestimonials } from './testimonialsAPI';

const initialState = {
	loading: false,
	testimonials: [],
	error: '',
};

export const getAllTestimonials = createAsyncThunk(
	'testimonials/getAllTestimonials',
	async () => {
		try {
			const {
				data: { testimonials },
			} = await fetchTestimonials();
			return testimonials;
		} catch (error) {
			return isRejectedWithValue(error);
		}
	}
);

export const testimonialsSlice = createSlice({
	name: 'testimonials',
	initialState: initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(getAllTestimonials.pending, (state) => {
				state.loading = true;
			})
			.addCase(getAllTestimonials.fulfilled, (state, { payload }) => {
				state.loading = false;
				state.testimonials = payload;
			})
			.addCase(getAllTestimonials.rejected, (state, { payload }) => {
				state.loading = false;
				state.error = payload;
			});
	},
});

export const selectTestimonials = (state) => state.testimonials;

export default testimonialsSlice.reducer;
