import "./navbar.scss";
import {Link} from "react-router-dom"

const Navbar = () => {
	return (
		<nav className={"navbar--outer-container"}>
			<div className="navbar--navigation-section">

				<Link to="/" className={"navbar--location"}>Secure@ease</Link>
				<Link to="/for-sale" className={"navbar--location"}>For Sale</Link>
				<Link to="/rentals" className={"navbar--location"}>Rentals</Link>
				<Link to="/design" className={"navbar--location"}>Design</Link>
				<Link to="/cleaning-services" className={"navbar--location"}>Cleaning Services</Link>
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
