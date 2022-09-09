import { ModalPoints } from "../modalpoints";

const products = [
  { number: "1", name: "Coca Cola", type: "Beverage", price: "2" },
  { number: "2", name: "Beer", type: "Drink", price: "4" },
  { number: "3", name: "Tost", type: "Snack", price: "2" },
];
export function AdminTableProducts() {
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th />
              <th>Name</th>
              <th>Type</th>
              <th>Price(€)</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((o, idx) => (
              <tr key={idx}>
                <th>{o.number}</th>
                <td>{o.name}</td>
                <td>{o.type}</td>
                <td>{o.price}</td>
                <td>
                  <ModalPoints />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
