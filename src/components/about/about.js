import "./about.scss";
import aboutBackgroundOne from "../../images/Website photos/79.jpg";
import aboutBackgroundTwo from "../../images/Website photos/58.jpg";

const About = () => {
	return (
			<div className={"about--outer-container"}>
                <div className="about--transition"></div>
                <section className="about--information-container">
                <h3 className="grid-box">Mission Statement</h3>
                <div className="about--display-photo grid-box" style={{
                    backgroundImage: `url(${aboutBackgroundOne})`,
                    backgroundPosition: "center",
                }}></div>
                <div className="about--display-photo grid-box" style={{
                    backgroundImage: `url(${aboutBackgroundTwo})`,
                    backgroundPosition: "bottom center",
                }}></div>
                <article className="grid-box about--contact-section">
                    <h6>801-989-4504</h6>
                    <h6>Secureatease@gmail.com</h6>
                </article> 
                </section>
            </div>
	);
};

export default About;
