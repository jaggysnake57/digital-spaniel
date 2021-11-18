import Hero from '../../components/Hero/Hero';
import Projects from '../../components/Projects/Projects';
import Testimonials from '../../components/Testimonials/Testimonials';

const Home = () => {
	return (
		<div className="home">
			<Hero />
			<Projects />
			{/* <Testimonials /> */}
		</div>
	);
};

export default Home;
