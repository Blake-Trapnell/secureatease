import "./navbar.scss";

const Navbar = () => {
	return (
		<nav className={"navbar--outer-container"}>
			<div className="navbar--navigation-section">
				<h3 className={"navbar--location"}>Secure@ease</h3>
				<h3 className={"navbar--location"}>Rentals</h3>
				<h3 className={"navbar--location"}>Design</h3>
				<h3 className={"navbar--location"}>Cleaning Services</h3>
				<h3 className={"navbar--location"}>Contact</h3>
			</div>
			<div className={"navbar--info-section"}>
				{/* <div className={"navbar--login"}>
					<div className="navbar--login-logo" />
					<h3 className={"navbar--location"}>login</h3>
				</div> */}
				<h2 className="navbar--location">123-123-1234</h2>
			</div>
		</nav>
	);
};

export default Navbar;
