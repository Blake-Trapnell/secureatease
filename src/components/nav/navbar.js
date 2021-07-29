import "./navbar.scss";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Navbar = () => {
	const [showDropdown, setShowDropdown] = useState(false);
	const [dimensions, setDimensions] = useState({
		height: window.innerHeight,
		width: window.innerWidth,
	});

	useEffect(() => {
		const handleResize = () => {
			setDimensions({
				height: window.innerWidth,
				width: window.innerWidth,
			});
			if (window.innerWidth > 750) {
				setShowDropdown(false);
			}
		};
		window.addEventListener("resize", handleResize);
		return (_) => {
			window.removeEventListener("resize", handleResize);
		};
	});

	const toggleDropdown = () => {
		if (dimensions.width < 750) {
			setShowDropdown(!showDropdown);
		}
		return;
	};

	return (
		<nav className={"navbar--outer-container"}>
			<div
				onClick={() => toggleDropdown()}
				className={`navbar--hamburger-outer-container ${
					showDropdown ? `dropdown-active` : ``
				}`}
			>
				<div className={`navbar--hamburger-container ${
					showDropdown ? `dropdown-active` : ``
				}`}>
					<div className="hamburger-bar bar1"></div>
					<div className="hamburger-bar bar2"></div>
					<div className="hamburger-bar bar3"></div>
				</div>
			</div>
			<div
				className={`navbar--mobile-menu ${
					showDropdown ? `dropdown-active` : ``
				}`}
			>
				<Link
					onClick={toggleDropdown}
					to="/"
					className={"navbar--location"}
				>
					Secure@ease
				</Link>
				<Link
					onClick={toggleDropdown}
					to="/for-sale"
					className={"navbar--location"}
				>
					For Sale
				</Link>
				<Link
					onClick={toggleDropdown}
					to="/rentals"
					className={"navbar--location"}
				>
					Rentals
				</Link>
				<Link
					onClick={toggleDropdown}
					to="/design"
					className={"navbar--location"}
				>
					Design
				</Link>
				<Link
					onClick={toggleDropdown}
					to="/cleaning-services"
					className={"navbar--location"}
				>
					Cleaning Services
				</Link>
			<a href={"tel:1-801-989-4504"} className={"navbar--location"}>801-989-4504</a>
			</div>
		</nav>
	);
};

export default Navbar;
