export function AdminSidebar() {
  return (
    <div>
      <aside>
        <div className=" px-3 py-4  h-screen overflow-y-auto border border-r">
          <ul className="menu">
            <li>
              <a>
                <span className="mr-2">🔴</span>
                Live Orders
              </a>
            </li>
            <li className="bordered">
              <a>
                <span className="mr-2">🛍️</span>
                Order History
              </a>
            </li>
            <li>
              <a>
                <span className="mr-2">🏷️</span>
                Offers
              </a>
            </li>
            <li>
              <a>
                <span className="mr-2">📦</span>
                Products
              </a>
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
