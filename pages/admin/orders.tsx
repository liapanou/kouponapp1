import { Layout } from "../../components/adminLayout";
import { AdminSidebar } from "../../components/adminsidebar";
import { AdminTable } from "../../components/admintable";

export default function Orders() {
  return (
    <Layout>
      <h1 className=" font-bold text-2xl ">Order History</h1>
      <div className="tabs w-full  mt-2  ">
        <a className="tab tab-bordered tab-active">All order</a>
        <a className="tab tab-bordered ">Summary</a>
        <a className="tab tab-bordered">Completed</a>
        <a className="tab tab-bordered">Cancelled</a>
      </div>
      <br />
      <AdminTable />
    </Layout>
  );
}
