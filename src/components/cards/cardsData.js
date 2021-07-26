import design from "../../images/interiordesign.jpg";
import rentals from "../../images/rentals.jpg"
import clean from "../../images/clean.jpg";
import forSale from "../../images/forsale.jpg";

const cardData = [

    {
        title: "Rentals",
        text: "Rental listings, Prices, Photo tours",
        background: `url(${rentals})`,
        buttonText: "View listings"

    },
    {
        title: "For sale by owner",
        text: "Personal Property For sale",
        background: `url(${forSale})`,
        buttonText: "View Homes"
    },
    {
        title: "Design",
        text: "Interior and Exterior design, Decor, Staging consult",
        background: `url(${design})`,
        buttonText: "See our designs"
    },
    {
        title: "Cleaning Services",
        text: "Home, rental, and property cleaning services",
        background: `url(${clean})`,
        buttonText: "View Services"
    }
]

export default cardData;