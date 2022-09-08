import { useState } from "react";

export function AdminTable() {
  const [products, setProducts] = useState([]);
  return (
    <div className="overflow-text-auto">
      <button
        onClick={() => {
          setProducts([
            ...products,
            {
              id: "123",
              name: "Lara Larson",
              payment: "Cash",
              timeremaining: "2 min",
              type: "Delivery",
              status: "Delivered",
              total: "20€",
            },
          ]);
        }}
        className="btn w-60 flex ml-auto"
      >
        Add Product
      </button>
      <table className=" table  table-auto w-full">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Payment</th>
            <th>Time remaining</th>
            <th>Type</th>
            <th>Status</th>
            <th>Total</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, idx) => (
            <tr key={idx}>
              <td>34748</td>
              <td className="flex items-center">
                <label tabIndex={0} className="w-8 h-8 mr-2 btn-circle avatar ">
                  <div className="rounded-full">
                    <img src="https://placeimg.com/80/80/people" />
                  </div>
                </label>
                <div>{product.name}</div>
              </td>
              <td>{product.payment}</td>
              <td>{product.timeremaining}</td>
              <td>{product.type}</td>
              <td>
                <span>🟢</span> {product.status}
              </td>
              <td>{product.total}</td>
              <td></td>
            </tr>
          ))}
        </tbody>
      </table>
      <h1>asdas</h1>
      <h1>asdas</h1>
      <h1>asdas</h1>
      <h1>asdas</h1>
      <h1>asdas</h1>
      <h1>asdas</h1>
      <h1>asdas</h1>
      <h1>asdas</h1>
      <h1>asdas</h1>
      <h1>asdas</h1>
      <h1>asdas</h1>
      <h1>asdas</h1>
      <h1>asdas</h1>
      <h1>asdas</h1>
      <h1>asdas</h1>
      <h1>asdas</h1>
      <h1>asdas</h1>
      <h1>asdas</h1>
      <h1>asdas</h1>
      <h1>asdas</h1>
      <h1>asdas</h1>
      <h1>asdas</h1>
      <h1>asdas</h1>
      <h1>asdas</h1>
      <h1>asdas</h1>
      <h1>asdas</h1>
      <h1>asdas</h1>
      <h1>asdas</h1>
      <h1>asdas</h1>
      <h1>asdas</h1>
      <h1>asdas</h1>
      <h1>asdas</h1>
    </div>
  );
}
