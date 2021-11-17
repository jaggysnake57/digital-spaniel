//react
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// redux
import {
	getAllTestimonials,
	selectTestimonials,
} from '../../features/testimonials/testimonialsSlice';

// swiper
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';

// swiper css
import 'swiper/swiper-bundle.min.css'; // core Swiper
import 'swiper/modules/navigation/navigation.min.css'; // Navigation module
import 'swiper/modules/pagination/pagination.min.css'; // Pagination module

// components
import TestimonialCard from './TestimonialCard/TestimonialCard';
import Loading from '../Loading/Loading';

const Testimonials = () => {
	// hooks
	const dispatch = useDispatch();

	// state
	const { testimonials, loading } = useSelector(selectTestimonials);

	// swiper options
	const pagination = {
		clickable: true,
		el: '.pagination-container',
		renderBullet: function (index, className) {
			return '<span class="' + className + '"></span>';
		},
	};

	const breakpoints = {
		1400: {
			slidesPerView: 3,
		},
	};

	// use effects
	useEffect(() => {
		dispatch(getAllTestimonials());
	}, []);

	return (
		<>
			{!loading ? (
				<section className="testimonials">
					<div className="container">
						<h1 className="testimonials__title">
							Kind words <span>from our clients</span>
						</h1>
						{testimonials.length ? (
							<>
								<Swiper
									modules={[Pagination]}
									spaceBetween={50}
									slidesPerView={1}
									initialSlide={1}
									loop={true}
									centeredSlides={true}
									breakpoints={breakpoints}
									pagination={pagination}>
									{testimonials.map((test) => (
										<SwiperSlide key={test.id}>
											{({ isActive }) => (
												<TestimonialCard
													content={test}
													isActive={isActive}
												/>
											)}
										</SwiperSlide>
									))}
								</Swiper>
								<div className="pagination-container"></div>
							</>
						) : (
							<p>there has been an error</p>
						)}
					</div>
				</section>
			) : (
				<Loading />
			)}
		</>
	);
};

export default Testimonials;
