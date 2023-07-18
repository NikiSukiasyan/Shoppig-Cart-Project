import React, { createContext, useState } from "react";

import CroppedStayGroovyoffwhite from "../../images/CroppedStayGroovyoffwhite.png";
import BasicCactusWhiteTshirt from "../../images/BasicCactusWhiteTshirt.png";
import SkaterBlackSweatshirt from "../../images/SkaterBlackSweatshirt.png";
import BlackTuleOversized from "../../images/BlackTuleOversized.png";
import BlackBatmanTshirt from "../../images/BlackBatmanTshirt.png";
import BlueTShirt from "../../images/BlueTShirt.png";
import LooseBlackTshirt from "../../images/LooseBlackTshirt.png";
import RingerHallPass from "../../images/RingerHallPass.png";
import GreyTshirt from "../../images/GreyTshirt.png";
import BlackTshirtwithwhitestripes from "../../images/BlackTshirtwithwhitestripes.png";
import TurtlesNinjaTshirt from "../../images/TurtlesNinjaTshirt.png";
import SlimblackTshirt from "../../images/SlimblackTshirt.png";
import BlueSweatshirt from "../../images/BlueSweatshirt.png";
import WhiteTshirtGucci from "../../images/WhiteTshirtGucci.png";
import TropicalWineTshirt from "../../images/TropicalWineTshirt.png";
import MarineBlueTshirt from "../../images/MarineBlueTshirt.png";
import BackCroppedStayGroovyoffwhite from "../../images/BackCroppedStayGroovyoffwhite.png";
import BackBasicCactusWhiteTshirt from "../../images/BackBasicCactusWhiteTshirt.png";
import BackSkaterBlackSweatshirt from "../../images/BackSkaterBlackSweatshirt.png";
import BackBlackTuleOversized from "../../images/BackBlackTuleOversized.png";
import BackBlackBatmanTshirt from "../../images/BackBlackBatmanTshirt.png";
import BackBlueTShirt from "../../images/BackBlueTShirt.png";
import BackLooseBlackTshirt from "../../images/BackLooseBlackTshirt.png";
import BackRingerHallPass from "../../images/BackRingerHallPass.png";
import BackGreyTshirt from "../../images/BackGreyTshirt.png";
import BackBlackTshirtwithwhitestripes from "../../images/BackBlackTshirtwithwhitestripes.png";
import BackTurtlesNinjaTshirt from "../../images/BackTurtlesNinjaTshirt.png";
import BackSlimblackTshirt from "../../images/BackSlimblackTshirt.png";
import BackBlueSweatshirt from "../../images/BackBlueSweatshirt.png";
import BackWhiteTshirtGucci from "../../images/BackWhiteTshirtGucci.png";
import BackTropicalWineTshirt from "../../images/BackTropicalWineTshirt.png";
import BackMarineBlueTshirt from "../../images/BackMarineBlueTshirt.png";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([
    {
      id: 1,
      image: CroppedStayGroovyoffwhite,
      hoverImage: BackCroppedStayGroovyoffwhite,
      title: "Cropped Stay Groovy off white",
      price: "10",
      cents: ".90",
      orPrice: " 9 x1.21",
      sizes: ["XXL", "XL", "L"],
      description: "White T-shirt",
    },
    {
      id: 2,
      image: BasicCactusWhiteTshirt,
      hoverImage: BackBasicCactusWhiteTshirt,
      title: "Basic Cactus White T-shirt",
      price: "13",
      cents: ".25",
      orPrice: " 3 x4.42",
      sizes: ["L", "ML"],
      description: "Wine",
    },
    {
      id: 3,
      image: SkaterBlackSweatshirt,
      hoverImage: BackSkaterBlackSweatshirt,
      title: "Skater Black Sweatshirt",
      price: "25",
      cents: ".90",
      orPrice: " 12 x2.16",
      sizes: ["XL"],
      description: "Tony Hawk",
    },
    {
      id: 4,
      image: BlackTuleOversized,
      hoverImage: BackBlackTuleOversized,
      title: "Black Tule Oversized",
      price: "29",
      cents: ".45",
      orPrice: " 5 x5.89",
      sizes: ["ML", "M"],
      description: "Tule",
    },
    {
      id: 5,
      image: BlackBatmanTshirt,
      hoverImage: BackBlackBatmanTshirt,
      title: "Black Batman T-shirt",
      price: "10",
      cents: ".90",
      orPrice: " 9 x1.21",
      sizes: ["S", "XS"],
      description: "Really Cool T-shirt",
    },
    {
      id: 6,
      image: BlueTShirt,
      hoverImage: BackBlueTShirt,
      title: "Blue T-Shirt",
      price: "9",
      cents: ".00",
      orPrice: " 3 x3.00",
      sizes: ["XL", "L"],
      description: "Mark Zuck have 365 of this",
    },
    {
      id: 7,
      image: LooseBlackTshirt,
      hoverImage: BackLooseBlackTshirt,
      title: "Loose Black T-shirt",
      price: "14",
      cents: ".00",
      orPrice: " 5 x2.80",
      sizes: ["XXL", "XL", "L"],
    },
    {
      id: 8,
      image: RingerHallPass,
      hoverImage: BackRingerHallPass,
      title: "Ringer Hall Pass",
      price: "10.90",
      orPrice: " 9 x1.21",
      sizes: ["XXL", "XL", "L"],
      description: "White T-shirt",
    },
    {
      id: 9,
      image: GreyTshirt,
      hoverImage: BackGreyTshirt,
      title: "Grey T-shirt",
      price: "14",
      cents: ".90",
      orPrice: " 7 x2.13",
      sizes: ["L"],
      description: "You will like this one",
    },
    {
      id: 10,
      image: BlackTshirtwithwhitestripes,
      hoverImage: BackBlackTshirtwithwhitestripes,
      title: "Black T-shirt with white stripes",
      price: "14",
      cents: ".90",
      orPrice: " 7 x2.13",
      sizes: ["L"],
      description: "Adidas originals",
    },
    {
      id: 11,
      image: TurtlesNinjaTshirt,
      hoverImage: BackTurtlesNinjaTshirt,
      title: "Turtles Ninja T-shirt",
      price: "10",
      cents: ".90",
      orPrice: " 9 x1.21",
      sizes: ["XL", "L"],
      description: "Cowabunga!",
    },
    {
      id: 12,
      image: SlimblackTshirt,
      hoverImage: BackSlimblackTshirt,
      title: "Slim black T-shirt",
      price: "49",
      cents: ".90",
      orPrice: " 9 x5.44",
      sizes: ["XXL", "XL"],
      description: "When you wish well",
    },
    {
      id: 13,
      image: BlueSweatshirt,
      hoverImage: BackBlueSweatshirt,
      title: "Blue Sweatshirt",
      price: "22",
      cents: ".50",
      orPrice: " 4 x5.63",
      sizes: ["S"],
      description: "Very comfy",
    },
    {
      id: 14,
      image: WhiteTshirtGucci,
      hoverImage: BackWhiteTshirtGucci,
      title: "White T-shirt Gucci",
      price: "18",
      cents: ".70",
      orPrice: " 4 x4.67",
      sizes: ["XL"],
      description: "Girl the future is all your",
    },
    {
      id: 15,
      image: TropicalWineTshirt,
      hoverImage: BackTropicalWineTshirt,
      title: "Tropical Wine T-shirt",
      price: "134",
      cents: ".90",
      orPrice: " 5 x26.98",
      sizes: ["XL", "L"],
    },
    {
      id: 16,
      image: MarineBlueTshirt,
      hoverImage: BackMarineBlueTshirt,
      title: "Marine Blue T-shirt",
      price: "49",
      cents: ".00",
      orPrice: " 9 x5.44",
      sizes: ["XL", "L"],
    },
  ]);
  return (
    <ProductContext.Provider value={products}>
      {children}
    </ProductContext.Provider>
  );
};
