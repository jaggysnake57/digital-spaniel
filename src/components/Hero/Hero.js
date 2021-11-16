import { Link } from 'react-router-dom';

const Hero = () => {
	return (
		<section className="hero">
			{/* <div className="container"> */}
			<div className="hero__content">
				<div className="hero__content-wrapper">
					<h1 className="hero__title">
						We unleash <span>business potential</span>
					</h1>

					<p className="hero__tagline">Brand, Dev, Ecom, Marketing</p>

					<p className="hero__blurb">
						We create brand experiences which are memorable and
						distinct. Our experienced team create and develop brands
						with personality and resonance.
					</p>

					<Link className="btn btn-primary" to="/">
						Let's talk
					</Link>
				</div>
				<div className="hero__image">{/* image */}</div>
			</div>
			{/* </div> */}
		</section>
	);
};

export default Hero;
