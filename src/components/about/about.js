import "./about.scss";
import aboutBackgroundOne from "../../images/ForSale/WhiteHome/79.jpg";
import aboutBackgroundTwo from "../../images/ForSale/WhiteHome/58.jpg";

const About = () => {
	return (
			<div className={"about--outer-container"}>
                <div className="about--transition"></div>
                <section className="about--information-container">
                <h3 className="grid-box">With Secure@Ease Management, there is no need to stress!
                Our mission is to promote secure and professional services. Our management team puts
                your priorities first so that you can feel at ease. </h3>
                <div className="about--display-photo grid-box" style={{
                    backgroundImage: `url(${aboutBackgroundOne})`,
                    backgroundPosition: "center",
                }}></div>
                <div className="about--display-photo grid-box" style={{
                    backgroundImage: `url(${aboutBackgroundTwo})`,
                    backgroundPosition: "bottom center",
                }}></div>
                <article className="grid-box about--contact-section">
                    <a href={"tel:1-801-989-4504"}>801-989-4504</a>
                    <a href={"mailto:secure.at.ease.management@gmail.com"}>secure.at.ease.managment@gmail.com</a>
                </article> 
                </section>
            </div>
	);
};

export default About;
