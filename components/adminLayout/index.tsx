import { AdminHeader } from "../adminheader";
import { AdminSidebar } from "../adminsidebar";

export function Layout(props: any) {
  return (
    <div>
      <AdminHeader />
      <div className="grid grid-cols-[300px_1fr]">
        <AdminSidebar />
        <div className="p-6 h-full overflow-auto">{props.children}</div>
      </div>
    </div>
  );
}
