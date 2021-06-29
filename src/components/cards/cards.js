import cardData from "./cardsData";

import "./cards.scss";

const Cards = () => {
	return (
		<article className={"cards--outer-container"}>
			{cardData.map((el, i) => {
				return (
					<section className="card--outer-container">
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
								<div
									className={
										"card--button-container action--button-container"
									}
								>
									<button className="card--action-button action--button">
										{el.buttonText}
									</button>
								</div>
							</div>
						</div>
					</section>
				);
			})}
		</article>
	);
};

export default Cards;
