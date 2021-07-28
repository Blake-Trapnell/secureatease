import "./navbar.scss";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
	const [showDropdown, setShowDropdown] = useState(false);

	const toggleDropdown = () => {
		setShowDropdown(!showDropdown);
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
				<div className="navbar--hamburger-container">
				<div className="bar1"></div>
				<div className="bar2"></div>
				<div className="bar3"></div>
				</div>
			</div>
			<div
				className={`navbar--mobile-menu ${
					showDropdown ? `dropdown-active` : ``
				}`}
			>
				<Link to="/" className={"navbar--location"}>
					Secure@ease
				</Link>
				<Link to="/for-sale" className={"navbar--location"}>
					For Sale
				</Link>
				<Link to="/rentals" className={"navbar--location"}>
					Rentals
				</Link>
				<Link to="/design" className={"navbar--location"}>
					Design
				</Link>
				<Link to="/cleaning-services" className={"navbar--location"}>
					Cleaning Services
				</Link>
			</div>
		</nav>
	);
};

export default Navbar;
