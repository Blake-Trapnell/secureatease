import "./forSale.scss";

import MapletonImages from "./forSaleImages.js";
import ForSaleData from "./forSaleData.js";
import { useState } from "react";
import Modal from "../modal/ImageModal.js";
import Slideshow from "../slideShow/slideShow";

const ForSale = () => {

    const [showModal, setShowModal] = useState(false)

	const showHideModalClassName = showModal ? "image-modal--active" : "image-modal--inactive";

    const toggleModal = (modalState) => {
        setShowModal(!modalState)
    }
	return (
		<div className={"for-sale--outer-container"}>
			{ForSaleData.map((el, i) => {
				return (
					<div
						key={el.key}
						className={`${showHideModalClassName} for-sale--listing-outer-container`}
					>
                        <Modal toggleModal={toggleModal} showModal={showModal} open={showModal} showButton={false}>
							<Slideshow images={MapletonImages} toggleModal={toggleModal} show={showModal}/>
						</Modal>
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
							style={{
								background: `url(${MapletonImages[i]})`,
								backgroundSize: "cover",
							}}
						>
							<div onClick={()=>toggleModal(showModal)}
								className={
									"for-sale--button-container action--button-container"
								}
							>
								<button className="for-sale--action-button action--button">
									View Listing
								</button>
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default ForSale;
