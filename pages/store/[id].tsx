import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Card } from "../../components/card/index";
import { Header } from "../../components/header/index";

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
      <div className="grid grid-cols-6 gap-4 p-4 mt-20 ">
        {products.map((obj, idx) => (
          <Card name={obj.name} price={obj.price} src={obj.src} key={idx} />
        ))}
      </div>
    </div>
  );
}
