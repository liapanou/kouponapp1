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
    <div>
      <Header />
      <div className="grid grid-cols-1 md:grid-cols-[300px_1fr]">
        <div className="bg-base-300 md:sticky md:top-16 md:h-screen h-fit border">
          <ProductFilter />
        </div>

        <div className="p-4">
          <div className="tabs w-full text-black">
            <a className="tab tab-bordered">All Products</a>
            <a className="tab tab-bordered tab-active">Top sales</a>
            <a className="tab tab-bordered">More</a>
          </div>
          <div className="grid overflow-auto pb-20 max-h-screen h-fit  md:grid-cols-2 lg:grid-cols-3 p-8 gap-4">
            <div className="relative w-full h-fit rounded-lg">
              <img
                className="rounded-lg shadow-md  h-80 w-full "
                src="https://img.freepik.com/free-photo/mockup-disposable-coffee-cup_53876-63381.jpg?w=2000"
                alt="product"
              />
              <div className="absolute bg-base-200 flex justify-center items-center rounded-lg text-base-content ml-2 top-3 px-2 py-2">
                20
                <img className="w-10 h-10" src="/images/icons8-medal-100.png" />
              </div>
              <div className=" w-full  h-fit absolute bottom-0">
                <div className="bg-base-200 text-base-content  grid grid-cols-2 gap-4  rounded-lg  rounded-t-none px-4 py-2 shadow-lg ">
                  <div className="p-4">
                    <h4 className="text-gray-700 font-semibold text-lg mt-1 mb-2">
                      Coffee
                    </h4>
                    <p className="w-60  h-10 text-left break-words">
                      fdjkjkjdkjvkdjgkjdfkjgkdjkjgkdf
                      kgkgkjkdjkgjdfjjjgdfjkdkjdfg
                    </p>
                  </div>
                  <div>
                    <div className="text-lg absolute right-2 top-8">2.5€</div>
                    <button className="btn btn-sm  text-xs absolute right-2 bottom-6 bg-slate-700 rounded-xl">
                      Buy
                    </button>
                  </div>
                </div>
              </div>
            </div>

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
    </div>
  );
}
