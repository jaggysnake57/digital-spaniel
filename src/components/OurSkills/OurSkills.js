import { Link } from 'react-router-dom';
import MiniMenu from './MiniMenu/MiniMenu';

const links = [
	{
		title: 'brand',
		links: [
			{
				name: 'Brand Strategy',
				location: '/',
			},
			{
				name: 'Logo & Name',
				location: '/',
			},
			{
				name: 'Identity & Collateral',
				location: '/',
			},
		],
	},
	{
		title: 'marketing',
		links: [
			{
				name: 'Digital',
				location: '/',
			},
			{
				name: 'Market Research',
				location: '/',
			},
		],
	},
	{
		title: 'development',
		links: [
			{
				name: 'eCommerce',
				location: '/',
			},
			{
				name: 'Web Development',
				location: '/',
			},
			{
				name: 'Mobile Apps',
				location: '/',
			},
		],
	},
];

const OurSkills = () => {
	return (
		<section className="our-skills alt-bg">
			<div className="container">
				<div className="our-skills__info">
					<h1 className="our-skills__title">
						What we <span>are capable of</span>
					</h1>
					<p className="our-skills__blurb">
						By focusing on design as an enabler and putting a huge
						emphasis on our clients as co-producers, we create
						innovative, sustainable marketing that enhances brand
						experience and user engagement.
					</p>
					<Link className="btn btn-primary" to="/">
						Our process
					</Link>
				</div>
				<div className="our-skills__skill-menu-container">
					{links.map((menuItems) => (
						<MiniMenu menuItems={menuItems} />
					))}
				</div>
			</div>
		</section>
	);
};

export default OurSkills;
