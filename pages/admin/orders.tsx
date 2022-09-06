import { AdminHeader } from "../../components/adminheader";
import { AdminSidebar } from "../../components/adminsidebar";

export default function Orders() {
  return (
    <div>
      <AdminHeader />
      <div className="grid grid-cols-[300px_1fr]">
        <AdminSidebar />
        <div className="p-6 grid grid-cols-1">
          <h1 className=" font-bold text-2xl">Order History</h1>
        </div>
      </div>
    </div>
  );
}
