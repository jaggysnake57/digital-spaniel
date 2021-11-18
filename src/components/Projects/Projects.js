import { useState } from 'react';
import Project from './Project/Project';

const Projects = () => {
	const projects = [
		{
			id: '475984375983475893',
			name: 'Tesco',
			blurb: 'A local paper with big ideas needed A sharp new brand to inspire readers.',
			link: '/',
			images: {
				full: 'project-images/makerek@2x.png',
				mobile: 'project-images/makerek.png',
			},
			isDoubleWide: false,
		},
		{
			id: '394857349857348',
			name: 'Dinamo',
			blurb: 'A local paper with big ideas needed A sharp new brand to inspire readers.',
			link: '/',
			images: {
				full: 'project-images/newspaper@2x.png',
				mobile: 'project-images/newspaper.png',
			},
			isDoubleWide: true,
		},
		{
			id: '37459753495734895',
			name: 'RM Boots',
			blurb: 'A local paper with big ideas needed A sharp new brand to inspire readers.',
			link: '/',
			images: {
				full: 'project-images/whellies01@2x.png',
				mobile: 'project-images/whellies01.png',
			},
			isDoubleWide: false,
		},
		{
			id: '37459753495734895',
			name: 'Make Ideas Happen',
			blurb: 'A local paper with big ideas needed A sharp new brand to inspire readers.',
			link: '/',
			images: {
				full: 'project-images/newspaper02@2x.png',
				mobile: 'project-images/newspaper02.png',
			},
			isDoubleWide: false,
		},
		{
			id: '37459753495734895',
			name: 'Animation Studio',
			blurb: 'A local paper with big ideas needed A sharp new brand to inspire readers.',
			link: '/',
			images: {
				full: 'project-images/rider01@2x.png',
				mobile: 'project-images/rider01.png',
			},
			isDoubleWide: false,
		},
	];

	const [activeFilter, setActiveFilter] = useState('all');
	const [showFilterMenu, setShowFilterMenu] = useState(false);

	const setActiveClass = (filterName) => {
		return `projects__link  ${
			activeFilter === filterName ? 'projects__link--active' : ''
		}`;
	};

	return (
		<section className="projects">
			<div className="container">
				<h1 className="projects__title">
					Some of our <span>recent projects</span>
				</h1>
				<div className="projects__nav-container">
					<p
						className="btn btn-primary projects__dropdown-button"
						onClick={() => setShowFilterMenu(!showFilterMenu)}>
						{`${showFilterMenu ? 'Hide' : 'Show'} Filters`}
					</p>
					<ul
						className={`projects__nav-menu ${
							showFilterMenu ? 'projects__nav-menu--show' : ''
						}  `}>
						<li
							className={setActiveClass('all')}
							onClick={() => setActiveFilter('all')}>
							All
						</li>
						<li
							className={setActiveClass('branding')}
							onClick={() => setActiveFilter('branding')}>
							Branding
						</li>
						<li
							className={setActiveClass('web-design')}
							onClick={() => setActiveFilter('web-design')}>
							Web Design
						</li>
						<li
							className={setActiveClass('marketing')}
							onClick={() => setActiveFilter('marketing')}>
							Digital Marketing
						</li>
					</ul>
				</div>

				<div className="projects__wrapper">
					{projects.map((project) => (
						<Project projectDetails={project} key={project.id} />
					))}
				</div>
			</div>
		</section>
	);
};

export default Projects;
