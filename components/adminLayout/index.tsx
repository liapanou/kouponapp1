import { AdminSidebar } from "../adminsidebar";
import { Header } from "../header";

export function Layout(props: any) {
  return (
    <div>
      <Header />
      <div className="grid grid-cols-[300px_1fr]">
        <AdminSidebar />
        <div className="p-6 h-full overflow-auto">{props.children}</div>
      </div>
    </div>
  );
}
