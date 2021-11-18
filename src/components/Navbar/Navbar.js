//react
import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

// assets
import logo from '../../assets/logo.png';

const Navbar = () => {
	//state
	const [menuIsOpen, setMenuIsOpen] = useState(false);
	const [showNavbar, setShowNavbar] = useState(true);
	const [hasBackground, setHasBackground] = useState(false);

	const handleNavBackground = () => {
		let viewportHeight = window.innerHeight;
		if (window.pageYOffset > viewportHeight) {
			if (!hasBackground) setHasBackground(true);
		} else {
			setHasBackground(false);
		}
	};

	useEffect(() => {
		var prevScrollpos = window.pageYOffset;
		window.onscroll = function () {
			var currentScrollPos = window.pageYOffset;
			if (prevScrollpos > currentScrollPos) {
				if (!showNavbar) setShowNavbar(true);
			} else {
				if (showNavbar) setShowNavbar(false);
				if (menuIsOpen) setMenuIsOpen(false);
			}
			prevScrollpos = currentScrollPos;
		};
	}, [showNavbar]);

	useEffect(() => {
		window.addEventListener('scroll', handleNavBackground);

		return () => {
			window.removeEventListener('scroll', handleNavBackground);
		};
	}, []);

	return (
		<header
			className={`navbar ${showNavbar ? 'navbar--show-navbar' : ''} ${
				hasBackground ? 'navbar--hasBackground' : ''
			}`}>
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
