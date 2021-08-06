import "./slideshow.scss";
import { useState } from "react";

const Slideshow = ({ images, show, toggleModal }) => {
	const maxIndex = images.length - 1;

	const [imageLocation, setImageLocation] = useState(0);

	const transitionImage = (moveImageDirection) => {
		const newImageLocation = imageLocation + moveImageDirection;
		if (newImageLocation > maxIndex) {
			setImageLocation(0);
		} else if (newImageLocation < 0) {
			setImageLocation(maxIndex);
		} else {
			setImageLocation(newImageLocation);
		}
	};

	return (
		<div className={"slideshow--outer-container"}>
			<div className={"slideshow--current-image"} style={{ backgroundImage: `url(${images[imageLocation]}` }} alt={`slideshow ${images[imageLocation]}`}>
				<div onClick={() => transitionImage(-1)} className={"slideshow--navigation slideshow--navigation-left"}>
					<button className={"slideshow--navigation-button"}>&#60;-</button>
				</div>
				<div className="slideshow--navigation">
					<div onClick={() => toggleModal(show)} className={"for-sale--button-container action--button-container action--button-mobile"}>
						<button className="for-sale--action-button action--button action--button-mobile">Close</button>
					</div>
				</div>
				<div onClick={() => transitionImage(1)} className={"slideshow--navigation slideshow--navigation-right"}>
					<button className={"slideshow--navigation-button"}>-&#62;</button>
				</div>
			</div>
		</div>
	);
};

export default Slideshow;
