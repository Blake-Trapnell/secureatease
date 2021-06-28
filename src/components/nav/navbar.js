import "./navbar.scss";

const Navbar = () => {
    return (
        <nav className={"navbar--outer-container"}>
            <h3 className={"navbar--location"}>Home</h3>
            <h3 className={"navbar--location"}>Something</h3>
            <h3 className={"navbar--location"}>Something Else</h3>
        </nav>
    )
}

export default Navbar;