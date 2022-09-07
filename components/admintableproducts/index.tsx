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
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>1</th>
              <td>Coca Cola</td>
              <td>Beverage</td>
              <td>2</td>
            </tr>
            {/* row 2 */}
            <tr>
              <th>2</th>
              <td>Beer</td>
              <td>Drink</td>
              <td>4</td>
            </tr>
            {/* row 3 */}
            <tr>
              <th>3</th>
              <td>Tost</td>
              <td>Snack</td>
              <td>2</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
