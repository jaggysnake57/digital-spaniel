import { Link } from 'react-router-dom';

import { BsChevronUp } from 'react-icons/bs';
import { useState } from 'react';

const Project = () => {
	//state
	const [isDown, setIsDown] = useState(true);

	return (
		<div className="project">
			<img
				src={`${process.env.PUBLIC_URL}/project-images/makerek.png`}
				alt=""
				className="project__mobile-image"
			/>
			<img
				src={`${process.env.PUBLIC_URL}/project-images/makerek@2x.png`}
				alt=""
				className="project__full-image"
			/>
			<div className={`project__info ${isDown ? 'info-is-down' : ''} `}>
				<BsChevronUp
					className="project__button"
					onClick={() => setIsDown(!isDown)}
				/>
				<h2 className="project__title">Make Ideas Happen</h2>
				<p className="project__blurb">
					A local paper with big ideas needed A sharp new brand to
					inspire readers.
				</p>
				<Link className="btn btn-secondary" to="/">
					Full Project
				</Link>
			</div>
		</div>
	);
};

export default Project;
