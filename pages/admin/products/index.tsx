import Link from "next/link";
import { useState } from "react";
import { Layout } from "../../../components/adminLayout";
import { AdminTableProducts } from "../../../components/admintableproducts";

export default function Products() {
  const [products, SetProducts] = useState([
    { number: "1", name: "Coca Cola", type: "Beverage", price: "2" },
    { number: "2", name: "Beer", type: "Drink", price: "4" },
    { number: "3", name: "Tost", type: "Snack", price: "2" },
  ]);
  return (
    <Layout>
      <div className="flex justify-between">
        <h1 className=" font-bold text-2xl ">Products</h1>
        <Link href="/admin/products/new">
          <a>
            <button className="btn ">New Product</button>
          </a>
        </Link>
      </div>

      <AdminTableProducts />
    </Layout>
  );
}
