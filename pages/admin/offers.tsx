import { useState } from "react";
import { Layout } from "../../components/adminLayout";
import { AdminSidebar } from "../../components/adminsidebar";
import { AdminTable } from "../../components/admintable";
import { AdminTableProducts } from "../../components/admintableproducts";

export default function Orders() {
  const [offers, setOffers] = useState([
    { number: "1", name: "Coca Cola", type: "Beverage", price: "2" },
    { number: "2", name: "Beer", type: "Drink", price: "4" },
    { number: "3", name: "Tost", type: "Snack", price: "2" },
  ]);
  return (
    <Layout>
      <h1 className=" font-bold text-2xl ">Offers</h1>
      <AdminTableProducts />
    </Layout>
  );
}
