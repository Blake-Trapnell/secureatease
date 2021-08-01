import "./forSale.scss";

import MapletonImages from "./forSaleImages.js";
import ForSaleData from "./forSaleData.js";

const ForSale = () => {
	return (
		<div className={"for-sale--outer-container"}>
			{ForSaleData.map((el, i) => {
				return (
					<div
						key={el.key}
						className={"for-sale--listing-outer-container"}
					>
						<div className={"for-sale--listing-container"}>
							<div className={"for-sale--listing-info-container"}>
								<h3 className={"for-sale--listing-info"}>
									{el.address}
								</h3>
								<h3 className={"for-sale--listing-info"}>
									{el.city}
								</h3>
								<h3 className={"for-sale--listing-info"}>
									{el.state}
								</h3>
								<h3 className={"for-sale--listing-info"}>
									{el.zip}
								</h3>
							</div>
							<div
								className={
									"for-sale--listing-contact-container"
								}
							>
								<h3 className={"for-sale--listing-info"}>
									{el.contactName}
								</h3>
								<h3
									className={
										"for-sale--listing-info for-sale--listing-contact"
									}
								>
									{el.contactPhone}
								</h3>
								<h3
									className={
										"for-sale--listing-info for-sale--listing-contact"
									}
								>
									{el.contactEmail}
								</h3>
							</div>
						</div>
						<div
							className={"for-sale--listing-background"}
							style={{ background: `url(${MapletonImages[i]})`, backgroundSize: "cover" }}
						>
							<button className="for-sale--action-button action--button">
								View Listing
							</button>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default ForSale;
