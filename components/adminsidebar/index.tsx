import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";

export function AdminSidebar() {
  const router = useRouter();
  const path = router.pathname;

  return (
    <div>
      <aside className="sticky top-20">
        <div className=" px-3 py-4 overflow-y-auto border border-r">
          <ul className="menu">
            <li>
              <a>
                <span className="mr-2">🔴</span>
                Live Orders
              </a>
            </li>
            <li
              className={clsx({
                bordered: path === "/admin/orders",
              })}
            >
              <Link href="/admin/orders">
                <a>
                  <span className="mr-2">🛍️</span>
                  Order History
                </a>
              </Link>
            </li>
            <li
              className={clsx({
                bordered: path === "/admin/offers",
              })}
            >
              <Link href="/admin/offers">
                <a>
                  <span className="mr-2">🏷️</span>
                  Offers
                </a>
              </Link>
            </li>
            <li
              className={clsx({
                bordered: path === "/admin/products",
              })}
            >
              <Link href="/admin/products">
                <a>
                  <span className="mr-2">📦</span>
                  Products
                </a>
              </Link>
            </li>

            <li>
              <a>
                <span className="mr-2">✉️</span>
                Message
              </a>
            </li>
            <li>
              <a>
                <span className="mr-2">⚙️</span>
                Settings
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
}
