import Cards from "../cards/cards.js";
import "./landing.scss";

const Landing = () => {
	return (
		<section className={"landing--outer-container"}>
			<div className={"landing--background"}>
				<div className={"landing--container"}>
					<div className={"landing--home-introduction-section"}>
						<section className={"landing--text-section"}>
							<h1 className={"landing--main-text"}>
								Secure@Ease
							</h1>
							<h2 className={"landing--secondary-text"}>
								Managment
							</h2>
						</section>
					</div>
						<Cards/>
			<div className={"about"}></div>
				</div>
			</div>
		</section>
	);
};

export default Landing;
