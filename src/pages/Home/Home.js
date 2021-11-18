import Hero from '../../components/Hero/Hero';
import OurSkills from '../../components/OurSkills/OurSkills';
import Projects from '../../components/Projects/Projects';
import Testimonials from '../../components/Testimonials/Testimonials';

const Home = () => {
	return (
		<div className="home">
			<Hero />
			<OurSkills />
			<Projects />
			<Testimonials />
		</div>
	);
};

export default Home;
