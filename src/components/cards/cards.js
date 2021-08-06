import cardData from "./cardsData";
import { Link } from "react-router-dom";

import "./cards.scss";

const Cards = () => {
	return (
		<article className={"cards--outer-container"}>
			{cardData.map((el, i) => {
				return (
					<section key={el.title} className="card--outer-container">
						<div
							className={"card--background"}
							style={{
								backgroundImage: el.background,
								backgroundPosition: "center",
								backgroundSize: "cover",
								clipPath: el.clip,
							}}
						>
							<div className={"card--background-overlay"}>
								<div className="card--info-container">
									<h2 className="card--title">{el.title}</h2>
									<h3 className="card--text">{el.text}</h3>
								</div>
								<Link
									to={el.link} className={
										"card--button-container action--button-container"
									}
								>
									<button className="card--action-button action--button">
										{el.buttonText}
									</button>
								</Link>
							</div>
						</div>
					</section>
				);
			})}
		</article>
	);
};

export default Cards;
