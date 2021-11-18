import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Project from './Project/Project';
import { BsChevronUp } from 'react-icons/bs';

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
			tags: ['branding', 'web-design'],
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
			tags: ['branding', 'marketing', 'web-design'],
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
			tags: ['branding', 'marketing'],
		},
		{
			id: '98789797897',
			name: 'Make Ideas Happen',
			blurb: 'A local paper with big ideas needed A sharp new brand to inspire readers.',
			link: '/',
			images: {
				full: 'project-images/newspaper02@2x.png',
				mobile: 'project-images/newspaper02.png',
			},
			isDoubleWide: false,
			tags: ['marketing', 'web-design'],
		},
		{
			id: '876876876876',
			name: 'Animation Studio',
			blurb: 'A local paper with big ideas needed A sharp new brand to inspire readers.',
			link: '/',
			images: {
				full: 'project-images/rider01@2x.png',
				mobile: 'project-images/rider01.png',
			},
			isDoubleWide: false,
			tags: ['branding', 'web-design'],
		},
	];

	const [activeFilter, setActiveFilter] = useState('all');
	const [showFilterMenu, setShowFilterMenu] = useState(false);
	const [filteredProjects, setFilteredProjects] = useState([]);

	const setActiveClass = (filterName) => {
		return `projects__link  ${
			activeFilter === filterName ? 'projects__link--active' : ''
		}`;
	};

	useEffect(() => {
		if (activeFilter === 'all') {
			setFilteredProjects(projects);
		} else {
			const filtered = projects.filter((project) =>
				project.tags.includes(activeFilter)
			);

			setFilteredProjects(filtered);
		}
	}, [activeFilter]);

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
					{filteredProjects.map((project) => (
						<Project projectDetails={project} key={project.id} />
					))}
				</div>

				<div className="projects__buttons-wrapper">
					<div className="projects__slide-buttons">
						<button className="projects__slide-button projects__slide-button--prev">
							<BsChevronUp />
						</button>
						<button className="projects__slide-button projects__slide-button--next">
							<BsChevronUp />
						</button>
					</div>

					<Link className="btn btn-primary" to="/">
						See all work
					</Link>
				</div>
			</div>
		</section>
	);
};

export default Projects;
