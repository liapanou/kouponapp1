export function AdminTable() {
  return (
    <div className="overflow-text-auto">
      <table className=" table w-full">
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
          <tr>
            <th>34748</th>
            <td className="flex">
              <label tabIndex={0} className=" btn-circle avatar">
                <div className="w-8 h-8 rounded-full">
                  <img src="https://placeimg.com/80/80/people" />
                </div>
              </label>
              Brooklyn Zoe
            </td>
            <td>Cash</td>
            <td>13 min</td>
            <td>Delivery</td>
            <td>
              <span>🟢</span> Delivered
            </td>
            <td>10€</td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
