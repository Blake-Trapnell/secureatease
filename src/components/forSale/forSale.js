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
                            <div>
                                <h3 className={"for-sale--listing-info"}>{el.address}</h3>
                                <h3 className={"for-sale--listing-info"}>{el.city}</h3>
                                <h3 className={"for-sale--listing-info"}>{el.state}</h3>
                                <h3 className={"for-sale--listing-info"}>{el.zip}</h3>

                            </div>
                            <div className={"for-sale--listing-contact-container"}>
                                <h3 className={"for-sale--listing-info"}>{el.contactName}</h3>
                                <h3 className={"for-sale--listing-info for-sale--listing-contact"}>{el.contactPhone}</h3>
                                <h3 className={"for-sale--listing-info for-sale--listing-contact"}>{el.contactEmail}</h3>
                            </div>
                        </div>
                        <img className={"for-sale--listing-background"} src={MapletonImages[i]} alt="" />
					</div>
				);
			})}
		</div>
	);
};

export default ForSale;
