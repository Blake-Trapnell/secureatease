import design from "../../images/interiordesign.webp";
import rentals from "../../images/rentals.webp"
import clean from "../../images/clean.webp";
import forSale from "../../images/forsale.webp";

const cardData = [

    {
        title: "For sale by owner",
        text: "Personal Property For sale",
        background: `url(${forSale})`,
        buttonText: "View Homes",
        link: "/for-sale",
    },
    {
        title: "Rentals",
        text: "Rental listings, Prices, Photo tours",
        background: `url(${rentals})`,
        buttonText: "View listings",
        link: "/rentals",
    },
    {
        title: "Design",
        text: "Interior and Exterior design, Decor, Staging consult",
        background: `url(${design})`,
        buttonText: "See our designs",
        link: "/design",
    },
    {
        title: "Cleaning Services",
        text: "Home, rental, and property cleaning services",
        background: `url(${clean})`,
        buttonText: "View Services",
        link: "/cleaning-services",
    },
]

export default cardData;