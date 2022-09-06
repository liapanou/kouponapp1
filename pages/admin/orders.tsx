import { AdminHeader } from "../../components/adminheader";
import { AdminSidebar } from "../../components/adminsidebar";
import { AdminTable } from "../../components/admintable";

export default function Orders() {
  return (
    <div>
      <AdminHeader />
      <div className="grid grid-cols-[300px_1fr]">
        <AdminSidebar />
        <div className="p-6 ">
          <h1 className=" font-bold text-2xl ">Order History</h1>
          <div className="tabs mt-2  ">
            <a className="tab tab-bordered tab-active">All order</a>
            <a className="tab tab-bordered ">Summary</a>
            <a className="tab tab-bordered">Completed</a>
            <a className="tab tab-bordered">Cancelled</a>
          </div>
          <br />
          <AdminTable />
        </div>
      </div>
    </div>
  );
}
