import { NextApiRequest, NextApiResponse } from "next"

const products = [{
  "name": "Smoked Tongue",
  "price": 86,
  "src": "http://dummyimage.com/250x250.png/cc0000/ffffff"
}, {
  "name": "Muffin Mix - Morning Glory",
  "price": 77,
  "src": "http://dummyimage.com/250x250.png/5fa2dd/ffffff"
}, {
  "name": "Muskox - French Rack",
  "price": 59,
  "src": "http://dummyimage.com/250x250.png/cc0000/ffffff"
}, {
  "name": "Lemonade - Mandarin, 591 Ml",
  "price": 50,
  "src": "http://dummyimage.com/250x250.png/cc0000/ffffff"
}, {
  "name": "Mushroom - Morel Frozen",
  "price": 81,
  "src": "http://dummyimage.com/250x250.png/5fa2dd/ffffff"
}, {
  "name": "Ginger - Crystalized",
  "price": 54,
  "src": "http://dummyimage.com/250x250.png/cc0000/ffffff"
}, {
  "name": "Bread - 10 Grain",
  "price": 49,
  "src": "http://dummyimage.com/250x250.png/cc0000/ffffff"
}, {
  "name": "Onions - Green",
  "price": 13,
  "src": "http://dummyimage.com/250x250.png/ff4444/ffffff"
}, {
  "name": "Sour Puss - Tangerine",
  "price": 57,
  "src": "http://dummyimage.com/250x250.png/cc0000/ffffff"
}, {
  "name": "Nut - Walnut, Chopped",
  "price": 37,
  "src": "http://dummyimage.com/250x250.png/cc0000/ffffff"
}, {
  "name": "Appetizer - Cheese Bites",
  "price": 24,
  "src": "http://dummyimage.com/250x250.png/5fa2dd/ffffff"
}, {
  "name": "Flour - Semolina",
  "price": 81,
  "src": "http://dummyimage.com/250x250.png/ff4444/ffffff"
}, {
  "name": "Coffee Swiss Choc Almond",
  "price": 19,
  "src": "http://dummyimage.com/250x250.png/5fa2dd/ffffff"
}, {
  "name": "Apples - Spartan",
  "price": 43,
  "src": "http://dummyimage.com/250x250.png/ff4444/ffffff"
}, {
  "name": "Vaccum Bag 10x13",
  "price": 68,
  "src": "http://dummyimage.com/250x250.png/cc0000/ffffff"
}, {
  "name": "Cheese - Cottage Cheese",
  "price": 48,
  "src": "http://dummyimage.com/250x250.png/ff4444/ffffff"
}, {
  "name": "Water - Perrier",
  "price": 50,
  "src": "http://dummyimage.com/250x250.png/cc0000/ffffff"
}, {
  "name": "Wine - White, Riesling, Henry Of",
  "price": 90,
  "src": "http://dummyimage.com/250x250.png/ff4444/ffffff"
}, {
  "name": "Sprouts - Pea",
  "price": 77,
  "src": "http://dummyimage.com/250x250.png/cc0000/ffffff"
}, {
  "name": "Canadian Emmenthal",
  "price": 99,
  "src": "http://dummyimage.com/250x250.png/5fa2dd/ffffff"
}, {
  "name": "Scallops 60/80 Iqf",
  "price": 8,
  "src": "http://dummyimage.com/250x250.png/ff4444/ffffff"
}, {
  "name": "Nori Sea Weed - Gold Label",
  "price": 63,
  "src": "http://dummyimage.com/250x250.png/ff4444/ffffff"
}, {
  "name": "Wine - Rhine Riesling Wolf Blass",
  "price": 11,
  "src": "http://dummyimage.com/250x250.png/5fa2dd/ffffff"
}, {
  "name": "Shrimp - 16/20, Peeled Deviened",
  "price": 18,
  "src": "http://dummyimage.com/250x250.png/dddddd/000000"
}, {
  "name": "Brownies - Two Bite, Chocolate",
  "price": 70,
  "src": "http://dummyimage.com/250x250.png/5fa2dd/ffffff"
}, {
  "name": "Beef - Flank Steak",
  "price": 18,
  "src": "http://dummyimage.com/250x250.png/5fa2dd/ffffff"
}, {
  "name": "Juice - Apple, 1.36l",
  "price": 79,
  "src": "http://dummyimage.com/250x250.png/5fa2dd/ffffff"
}, {
  "name": "Wine - Red, Cabernet Merlot",
  "price": 14,
  "src": "http://dummyimage.com/250x250.png/ff4444/ffffff"
}, {
  "name": "Red Cod Fillets - 225g",
  "price": 63,
  "src": "http://dummyimage.com/250x250.png/dddddd/000000"
}, {
  "name": "Compound - Rum",
  "price": 70,
  "src": "http://dummyimage.com/250x250.png/5fa2dd/ffffff"
}, {
  "name": "Sea Bass - Whole",
  "price": 76,
  "src": "http://dummyimage.com/250x250.png/cc0000/ffffff"
}, {
  "name": "Ostrich - Prime Cut",
  "price": 74,
  "src": "http://dummyimage.com/250x250.png/5fa2dd/ffffff"
}, {
  "name": "Versatainer Nc - 8288",
  "price": 17,
  "src": "http://dummyimage.com/250x250.png/ff4444/ffffff"
}, {
  "name": "Water - Mineral, Carbonated",
  "price": 72,
  "src": "http://dummyimage.com/250x250.png/5fa2dd/ffffff"
}, {
  "name": "Bread - Crusty Italian Poly",
  "price": 57,
  "src": "http://dummyimage.com/250x250.png/ff4444/ffffff"
}, {
  "name": "Trout - Rainbow, Fresh",
  "price": 38,
  "src": "http://dummyimage.com/250x250.png/dddddd/000000"
}, {
  "name": "Egg - Salad Premix",
  "price": 80,
  "src": "http://dummyimage.com/250x250.png/cc0000/ffffff"
}, {
  "name": "Bacardi Breezer - Tropical",
  "price": 18,
  "src": "http://dummyimage.com/250x250.png/cc0000/ffffff"
}, {
  "name": "Sherbet - Raspberry",
  "price": 90,
  "src": "http://dummyimage.com/250x250.png/cc0000/ffffff"
}, {
  "name": "Bread - Corn Muffaleta Onion",
  "price": 88,
  "src": "http://dummyimage.com/250x250.png/ff4444/ffffff"
}, {
  "name": "Bread - White, Unsliced",
  "price": 66,
  "src": "http://dummyimage.com/250x250.png/5fa2dd/ffffff"
}, {
  "name": "Sardines",
  "price": 78,
  "src": "http://dummyimage.com/250x250.png/ff4444/ffffff"
}, {
  "name": "Pastry - Raisin Muffin - Mini",
  "price": 17,
  "src": "http://dummyimage.com/250x250.png/dddddd/000000"
}, {
  "name": "Beef - Outside, Round",
  "price": 66,
  "src": "http://dummyimage.com/250x250.png/dddddd/000000"
}, {
  "name": "Tuna - Loin",
  "price": 27,
  "src": "http://dummyimage.com/250x250.png/cc0000/ffffff"
}, {
  "name": "Juice - Apple, 1.36l",
  "price": 5,
  "src": "http://dummyimage.com/250x250.png/cc0000/ffffff"
}, {
  "name": "Longos - Chicken Curried",
  "price": 56,
  "src": "http://dummyimage.com/250x250.png/dddddd/000000"
}, {
  "name": "Shopper Bag - S - 4",
  "price": 100,
  "src": "http://dummyimage.com/250x250.png/5fa2dd/ffffff"
}, {
  "name": "Goulash Seasoning",
  "price": 54,
  "src": "http://dummyimage.com/250x250.png/cc0000/ffffff"
}, {
  "name": "Shrimp, Dried, Small / Lb",
  "price": 81,
  "src": "http://dummyimage.com/250x250.png/5fa2dd/ffffff"
}, {
  "name": "Bagel - Everything",
  "price": 56,
  "src": "http://dummyimage.com/250x250.png/cc0000/ffffff"
}, {
  "name": "Wine - Red, Pinot Noir, Chateau",
  "price": 19,
  "src": "http://dummyimage.com/250x250.png/5fa2dd/ffffff"
}, {
  "name": "Black Currants",
  "price": 76,
  "src": "http://dummyimage.com/250x250.png/ff4444/ffffff"
}, {
  "name": "Lettuce - Treviso",
  "price": 97,
  "src": "http://dummyimage.com/250x250.png/5fa2dd/ffffff"
}, {
  "name": "Cheese - Cream Cheese",
  "price": 53,
  "src": "http://dummyimage.com/250x250.png/ff4444/ffffff"
}, {
  "name": "Devonshire Cream",
  "price": 49,
  "src": "http://dummyimage.com/250x250.png/cc0000/ffffff"
}, {
  "name": "Pasta - Detalini, White, Fresh",
  "price": 61,
  "src": "http://dummyimage.com/250x250.png/cc0000/ffffff"
}, {
  "name": "Snapple - Mango Maddness",
  "price": 26,
  "src": "http://dummyimage.com/250x250.png/ff4444/ffffff"
}, {
  "name": "Table Cloth 62x114 Colour",
  "price": 61,
  "src": "http://dummyimage.com/250x250.png/cc0000/ffffff"
}, {
  "name": "Pork Casing",
  "price": 53,
  "src": "http://dummyimage.com/250x250.png/ff4444/ffffff"
}, {
  "name": "Compound - Pear",
  "price": 87,
  "src": "http://dummyimage.com/250x250.png/dddddd/000000"
}, {
  "name": "Table Cloth 54x54 Colour",
  "price": 33,
  "src": "http://dummyimage.com/250x250.png/ff4444/ffffff"
}, {
  "name": "Star Fruit",
  "price": 8,
  "src": "http://dummyimage.com/250x250.png/5fa2dd/ffffff"
}, {
  "name": "Tart Shells - Savory, 4",
  "price": 11,
  "src": "http://dummyimage.com/250x250.png/cc0000/ffffff"
}, {
  "name": "Nantuket Peach Orange",
  "price": 88,
  "src": "http://dummyimage.com/250x250.png/5fa2dd/ffffff"
}, {
  "name": "Rabbit - Whole",
  "price": 93,
  "src": "http://dummyimage.com/250x250.png/cc0000/ffffff"
}, {
  "name": "Foam Cup 6 Oz",
  "price": 20,
  "src": "http://dummyimage.com/250x250.png/ff4444/ffffff"
}, {
  "name": "Venison - Racks Frenched",
  "price": 32,
  "src": "http://dummyimage.com/250x250.png/dddddd/000000"
}, {
  "name": "Wine - Red, Pinot Noir, Chateau",
  "price": 28,
  "src": "http://dummyimage.com/250x250.png/cc0000/ffffff"
}, {
  "name": "Cheese - Cheddar, Old White",
  "price": 73,
  "src": "http://dummyimage.com/250x250.png/ff4444/ffffff"
}, {
  "name": "Salmon Steak - Cohoe 6 Oz",
  "price": 15,
  "src": "http://dummyimage.com/250x250.png/dddddd/000000"
}, {
  "name": "Capon - Whole",
  "price": 68,
  "src": "http://dummyimage.com/250x250.png/5fa2dd/ffffff"
}, {
  "name": "Trout - Rainbow, Fresh",
  "price": 83,
  "src": "http://dummyimage.com/250x250.png/ff4444/ffffff"
}, {
  "name": "Napkin Colour",
  "price": 84,
  "src": "http://dummyimage.com/250x250.png/dddddd/000000"
}, {
  "name": "Chocolate - Chips Compound",
  "price": 74,
  "src": "http://dummyimage.com/250x250.png/ff4444/ffffff"
}, {
  "name": "Vector Energy Bar",
  "price": 31,
  "src": "http://dummyimage.com/250x250.png/dddddd/000000"
}, {
  "name": "Kohlrabi",
  "price": 52,
  "src": "http://dummyimage.com/250x250.png/ff4444/ffffff"
}, {
  "name": "Lettuce - Sea / Sea Asparagus",
  "price": 54,
  "src": "http://dummyimage.com/250x250.png/dddddd/000000"
}, {
  "name": "Longos - Lasagna Beef",
  "price": 55,
  "src": "http://dummyimage.com/250x250.png/dddddd/000000"
}, {
  "name": "Towel - Roll White",
  "price": 59,
  "src": "http://dummyimage.com/250x250.png/dddddd/000000"
}, {
  "name": "Juice - Mango",
  "price": 66,
  "src": "http://dummyimage.com/250x250.png/dddddd/000000"
}, {
  "name": "Mix - Cocktail Strawberry Daiquiri",
  "price": 4,
  "src": "http://dummyimage.com/250x250.png/dddddd/000000"
}, {
  "name": "Wine - Manischewitz Concord",
  "price": 93,
  "src": "http://dummyimage.com/250x250.png/ff4444/ffffff"
}, {
  "name": "Mudslide",
  "price": 81,
  "src": "http://dummyimage.com/250x250.png/ff4444/ffffff"
}, {
  "name": "Wine - Chardonnay Mondavi",
  "price": 5,
  "src": "http://dummyimage.com/250x250.png/dddddd/000000"
}, {
  "name": "Vaccum Bag 10x13",
  "price": 84,
  "src": "http://dummyimage.com/250x250.png/ff4444/ffffff"
}, {
  "name": "Ecolab - Orange Frc, Cleaner",
  "price": 62,
  "src": "http://dummyimage.com/250x250.png/5fa2dd/ffffff"
}, {
  "name": "Cookie Chocolate Chip With",
  "price": 34,
  "src": "http://dummyimage.com/250x250.png/ff4444/ffffff"
}, {
  "name": "Pepperoni Slices",
  "price": 90,
  "src": "http://dummyimage.com/250x250.png/dddddd/000000"
}, {
  "name": "Puree - Guava",
  "price": 79,
  "src": "http://dummyimage.com/250x250.png/ff4444/ffffff"
}, {
  "name": "Cocktail Napkin Blue",
  "price": 74,
  "src": "http://dummyimage.com/250x250.png/ff4444/ffffff"
}, {
  "name": "Extract - Rum",
  "price": 44,
  "src": "http://dummyimage.com/250x250.png/cc0000/ffffff"
}, {
  "name": "Mushrooms - Honey",
  "price": 19,
  "src": "http://dummyimage.com/250x250.png/cc0000/ffffff"
}, {
  "name": "Chicken - White Meat, No Tender",
  "price": 86,
  "src": "http://dummyimage.com/250x250.png/5fa2dd/ffffff"
}, {
  "name": "Soup - Campbells Mac N Cheese",
  "price": 8,
  "src": "http://dummyimage.com/250x250.png/5fa2dd/ffffff"
}, {
  "name": "Cheese - Provolone",
  "price": 57,
  "src": "http://dummyimage.com/250x250.png/ff4444/ffffff"
}, {
  "name": "Puree - Strawberry",
  "price": 68,
  "src": "http://dummyimage.com/250x250.png/dddddd/000000"
}, {
  "name": "Pate - Liver",
  "price": 77,
  "src": "http://dummyimage.com/250x250.png/ff4444/ffffff"
}, {
  "name": "Sauce - Roasted Red Pepper",
  "price": 3,
  "src": "http://dummyimage.com/250x250.png/cc0000/ffffff"
}, {
  "name": "Crab Meat Claw Pasteurise",
  "price": 12,
  "src": "http://dummyimage.com/250x250.png/5fa2dd/ffffff"
}]
 
export type Product ={
    name:string
    price:number
    src: string
  } 
  
export default function handler(req:NextApiRequest, res:NextApiResponse) {
  res.status(200).json(products)
}
