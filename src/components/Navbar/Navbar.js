//react
import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

// assets
import logo from '../../assets/logo.png';

const Navbar = () => {
	//state
	const [menuIsOpen, setMenuIsOpen] = useState(false);
	const [showNavbar, setShowNavbar] = useState(true);

	useEffect(() => {
		var prevScrollpos = window.pageYOffset;
		window.onscroll = function () {
			var currentScrollPos = window.pageYOffset;
			if (prevScrollpos > currentScrollPos) {
				if (!showNavbar) setShowNavbar(true);
			} else {
				if (showNavbar) setShowNavbar(false);
			}
			prevScrollpos = currentScrollPos;
		};
		return () => {};
	}, [showNavbar]);

	return (
		<header className={`navbar ${showNavbar ? 'navbar--show-navbar' : ''}`}>
			<div className="container">
				<div className="navbar__brand">
					<Link to="/">
						<img src={logo} alt="logo" />
					</Link>
				</div>
				<nav
					className={`navbar__main-nav ${
						menuIsOpen ? 'navbar__main-nav--is-open' : ''
					}`}>
					<NavLink
						className={({ isActive }) =>
							isActive ? 'isActive' : undefined
						}
						to="/">
						Services
					</NavLink>
					<NavLink to="/">Work</NavLink>
					<NavLink to="/">About</NavLink>
					<NavLink to="/">Blog</NavLink>
					<NavLink to="/">Contact</NavLink>
				</nav>

				<div
					className={`navbar__hamburger ${
						menuIsOpen && 'navbar__hamburger--is-close-btn'
					}`}
					onClick={() => setMenuIsOpen(!menuIsOpen)}>
					<div></div>
					<div></div>
					<div></div>
				</div>
			</div>
		</header>
	);
};

export default Navbar;
