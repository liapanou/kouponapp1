import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { CardProionda } from "../../components/cardproionda/index";
import { Header } from "../../components/header/index";

import { ProductFilter } from "../../components/productfilter";

export default function Page() {
  // fernei kai apothikevei ti lista me ta data tou server
  // to useEffect to xrisimopoioume gia na ginei mia fora render
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get(`/api/products/asdasdads`).then((d) => setProducts(d.data));
  }, []);

  return (
<<<<<<< HEAD
    <div>
      <div id="app" className="">
        <main>
          <Header />
          <div className="grid grid-cols-1 md:grid-cols-[300px_1fr]">
            <div className="bg-base-300 md:sticky md:top-16 md:h-screen h-fit border">
              <ProductFilter />
            </div>
=======
    <div className="h-screen overflow-hidden">
      <Header />
>>>>>>> a052574 (test)

      <div className="grid grid-cols-1 md:grid-cols-[300px_1fr]">
        <PriceFilter />

        <div className="grid overflow-auto pb-20 max-h-screen h-fit  md:grid-cols-2 lg:grid-cols-4 p-8 gap-4">
          {products.map((obj, idx) => (
            <CardProionda
              name={obj.name}
              price={obj.price}
              src={obj.src}
              key={idx}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
