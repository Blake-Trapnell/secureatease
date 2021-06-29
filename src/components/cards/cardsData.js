import design from "../../images/interiordesign.jpg";
import rentals from "../../images/rentals.jpg"
import clean from "../../images/clean.jpg";
import contact from "../../images/contact.jpg";

const cardData = [

    {
        title: "Rentals",
        text: "Rental listings, Prices, Photo tours, For sale by owner listings.",
        background: `url(${rentals})`,
        buttonText: "View listings"
        // clip: "polygon(0 25%, 100% 37%, 100% 100%, 0% 100%",
    },
    {
        title: "Design",
        text: "Interior and Exterior design, Decor, Staging consult",
        background: `url(${design})`,
        buttonText: "See our designs"
        // clip: "polygon(0 25%, 75% 25%, 100% 50%, 100% 100%, 0 100%, 0% 50%)",
    },
    {
        title: "Cleaning Services",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        background: `url(${clean})`,
        buttonText: "View services"
        // clip: "polygon(50% 15%, 100% 38%, 100% 100%, 0 100%, 0% 38%)",

    },
    {
        title: "Contact and support",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        background: `url(${contact})`,
        buttonText: "Get in touch"
        // clip: "polygon(25% 25%, 75% 25%, 100% 50%, 100% 100%, 75% 100%, 25% 100%, 0 100%, 0 50%)",
    },
]

export default cardData;