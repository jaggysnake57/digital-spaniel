// icons
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

const TestimonialCard = ({ content, isActive }) => {
	//  destructure state
	const {
		name,
		role,
		comment,
		imageURLs: { fullSize, mobile },
	} = content || {};

	return (
		<div
			className={`testimonial-card ${
				isActive ? 'isFrontCard' : undefined
			}`}>
			<p className="testimonial-card__comment">
				<FaQuoteLeft className="quote-open" />
				{comment}
				<FaQuoteRight className="quote-close" />
			</p>
			<img
				src={`${process.env.PUBLIC_URL}${mobile}`}
				alt="avatar"
				className="testimonial-card__image-mobile"
			/>
			<img
				src={`${process.env.PUBLIC_URL}${fullSize}`}
				alt="avatar"
				className="testimonial-card__image-full"
			/>
			<p className="testimonial-card__name">{name}</p>
			<p className="testimonial-card__role">{role}</p>
		</div>
	);
};

export default TestimonialCard;
