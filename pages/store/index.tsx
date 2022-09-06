import { Header } from "../../components/header";
import { Modal } from "../../components/modal";

export default function Orders() {
  return (
    <div>
      <Header />
      <div className="flex flex-col mt-8 container mx-auto">
        <table className="table w-full ">
          <thead>
            <tr>
              <th>Order</th>
              <th>QTY</th>
              <th>Name of client</th>
              <th>Points</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>coffee</td>
              <td>1</td>
              <td>Betty Papa</td>
              <td>50</td>
            </tr>
            <tr>
              <td>coffee</td>
              <td>1</td>
              <td>Betty Papa</td>
              <td>50</td>
            </tr>
            <tr>
              <td>coffee</td>
              <td>1</td>
              <td>Betty Papa</td>
              <td>50</td>
            </tr>
            <tr>
              <td>coffee</td>
              <td>1</td>
              <td>Betty Papa</td>
              <td>50</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
