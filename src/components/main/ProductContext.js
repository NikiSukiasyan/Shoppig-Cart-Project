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

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([
    {
      id: 1,
      image: CroppedStayGroovyoffwhite,
      title: "Cropped Stay Groovy off white",
      price: "10",
      cents: ".90",
      orPrice: " 9 x1.21",
      sizes: ["XXL", "XL", "L"],
    },
    {
      id: 2,
      image: BasicCactusWhiteTshirt,
      title: "Basic Cactus White T-shirt",
      price: "13",
      cents: ".25",
      orPrice: " 3 x4.42",
      sizes: ["L", "ML"],
    },
    {
      id: 3,
      image: SkaterBlackSweatshirt,
      title: "Skater Black Sweatshirt",
      price: "25",
      cents: ".90",
      orPrice: " 12 x2.16",
      sizes: ["XL"],
    },
    {
      id: 4,
      image: BlackTuleOversized,
      title: "Black Tule Oversized",
      price: "29",
      cents: ".45",
      orPrice: " 5 x5.89",
      sizes: ["ML", "M"],
    },
    {
      id: 5,
      image: BlackBatmanTshirt,
      title: "Black Batman T-shirt",
      price: "10",
      cents: ".90",
      orPrice: " 9 x1.21",
      sizes: ["S", "XS"],
    },
    {
      id: 6,
      image: BlueTShirt,
      title: "Blue T-Shirt",
      price: "9",
      cents: ".00",
      orPrice: " 3 x3.00",
      sizes: ["XL", "L"],
    },
    {
      id: 7,
      image: LooseBlackTshirt,
      title: "Loose Black T-shirt",
      price: "14",
      cents: ".00",
      orPrice: " 5 x2.80",
      sizes: ["XXL", "XL", "L"],
    },
    {
      id: 8,
      image: RingerHallPass,
      title: "Ringer Hall Pass",
      price: "10.90",
      orPrice: " 9 x1.21",
      sizes: ["XXL", "XL", "L"],
    },
    {
      id: 9,
      image: GreyTshirt,
      title: "Grey T-shirt",
      price: "14",
      cents: ".90",
      orPrice: " 7 x2.13",
      sizes: ["L"],
    },
    {
      id: 10,
      image: BlackTshirtwithwhitestripes,
      title: "Black T-shirt with white stripes",
      price: "14",
      cents: ".90",
      orPrice: " 7 x2.13",
      sizes: ["L"],
    },
    {
      id: 11,
      image: TurtlesNinjaTshirt,
      title: "Turtles Ninja T-shirt",
      price: "10",
      cents: ".90",
      orPrice: " 9 x1.21",
      sizes: ["XL", "L"],
    },
    {
      id: 12,
      image: SlimblackTshirt,
      title: "Slim black T-shirt",
      price: "49",
      cents: ".90",
      orPrice: " 9 x5.44",
      sizes: ["XXL", "XL"],
    },
    {
      id: 13,
      image: BlueSweatshirt,
      title: "Blue Sweatshirt",
      price: "22",
      cents: ".50",
      orPrice: " 4 x5.63",
      sizes: ["S"],
    },
    {
      id: 14,
      image: WhiteTshirtGucci,
      title: "White T-shirt Gucci",
      price: "18",
      cents: ".70",
      orPrice: " 4 x4.67",
      sizes: ["XL"],
    },
    {
      id: 15,
      image: TropicalWineTshirt,
      title: "Tropical Wine T-shirt",
      price: "134",
      cents: ".90",
      orPrice: " 5 x26.98",
      sizes: ["XL", "L"],
    },
    {
      id: 16,
      image: MarineBlueTshirt,
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
