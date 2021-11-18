import { Link } from 'react-router-dom';

const MiniMenu = ({ menuItems }) => {
	return (
		<div className="mini-menu__container">
			<h2 className="mini-menu__menu-title">{menuItems.title}</h2>

			{menuItems.links.map((link) => (
				<Link to={link.location} className="mini-menu__link">
					{link.name}
				</Link>
			))}
		</div>
	);
};

export default MiniMenu;
