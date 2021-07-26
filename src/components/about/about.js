import "./about.scss";

const About = () => {
	return (
			<div className={"about--outer-container"}>
                <div className="about--transition"></div>
                <section className="about--information-container">
                <h3>Mission Statement</h3>
                <div className="about--display-photo"></div>
                <h3>Contact</h3>
                <div className="about--display-photo"></div>
                </section>
            </div>
	);
};

export default About;
