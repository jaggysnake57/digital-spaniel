import Project from './Project/Project';

const Projects = () => {
	return (
		<section className="projects">
			<div className="container">
				<h1 className="projects__title">
					Some of our <span>recent projects</span>
				</h1>
				<div className="projects__nav">
					<ul>
						<li className="projects__link">All</li>
						<li className="projects__link">Branding</li>
						<li className="projects__link">Web Design</li>
						<li className="projects__link">Digital Marketing</li>
					</ul>
				</div>

				<div className="projects__wrapper">
					<Project />
				</div>
			</div>
		</section>
	);
};

export default Projects;
