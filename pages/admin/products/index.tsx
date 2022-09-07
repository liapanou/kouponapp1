import Link from "next/link";
import { Layout } from "../../../components/adminLayout";
import { AdminTableProducts } from "../../../components/admintableproducts";

export default function Products() {
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
