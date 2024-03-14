import React from "react";
import { GiCompass, GiDiamondHard, GiStabbedNote } from "react-icons/gi";
export const links = [
  {
    id: 1,
    text: "home",
    url: "/",
  },
  {
    id: 2,
    text: "about",
    url: "/about",
  },
  {
    id: 3,
    text: "products",
    url: "/products",
  },
  {
    id: 4,
    text: "checkout",
    url: "/checkout",
  },
];

export const services = [
  {
    id: 1,
    icon: <GiCompass />,
    title: "mission",
    text: "At ModernHaven, our mission is to provide exquisite furniture that fosters tranquility, comfort, and timeless elegance for your home sanctuary.",
  },
  {
    id: 2,
    icon: <GiDiamondHard />,
    title: "vision",
    text: "Our vision at ModernHaven is to become the premier destination for bespoke furniture, offering unparalleled craftsmanship and personalized design experiences.",
  },
  {
    id: 3,
    icon: <GiStabbedNote />,
    title: "history",
    text: "ModernHaven began with a passion for crafting timeless furniture pieces, evolving into a trusted brand known for quality, creativity, and innovation.",
  },
];

export const products_url = "https://course-api.com/react-store-products";

export const single_product_url = `https://course-api.com/react-store-single-product?id=`;
