import { Link } from 'react-router-dom';

import { BsChevronUp } from 'react-icons/bs';
import { useState } from 'react';

const Project = ({ projectDetails }) => {
	//state
	const [isDown, setIsDown] = useState(true);

	const { name, blurb, link, images, isDoubleWide } = projectDetails || {};

	return (
		<div
			className={`project project--${
				isDoubleWide ? 'span-2' : 'span-1'
			}`}>
			<div
				style={{
					backgroundImage: `url(${process.env.PUBLIC_URL}${images.mobile})`,
				}}
				alt=""
				className="project__image project__image--mobile"
			/>
			<div
				src={`${process.env.PUBLIC_URL}${images.full}`}
				alt=""
				className="project__image project__image--full"
			/>
			{/* <img
				src={`${process.env.PUBLIC_URL}${images.mobile}`}
				alt=""
				className="project__mobile-image"
			/>
			<img
				src={`${process.env.PUBLIC_URL}${images.full}`}
				alt=""
				className="project__full-image"
			/> */}
			<div className={`project__info ${isDown ? 'info-is-down' : ''} `}>
				<BsChevronUp
					className="project__button"
					onClick={() => setIsDown(!isDown)}
				/>
				<h2 className="project__title">{name}</h2>
				<p className="project__blurb">{blurb}</p>
				<Link className="btn btn-secondary" to={link}>
					Full Project
				</Link>
			</div>
		</div>
	);
};

export default Project;
