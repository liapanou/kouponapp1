import { Header } from "../../components/header";
import { Modal } from "../../components/modal";

export default function Orders() {
  return (
    <div>
      <Header />
      <div className="flex flex-col mt-8 container mx-auto">
        <div className="flex justify-end w-full mb-4">
          <Modal />
        </div>

        <table className="table w-full ">
          <thead>
            <tr>
              <th>Name</th>
              <th>Order</th>
              <th>Points</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Betty Papa</td>
              <td>1 coffee</td>
              <td className="flex">50</td>
            </tr>
            <tr>
              <td>Betty Papa</td>
              <td>1 coffee</td>
              <td>50</td>
            </tr>
            <tr>
              <td>Betty Papa</td>
              <td>1 coffee</td>
              <td>50</td>
            </tr>
            <tr>
              <td>Betty Papa</td>
              <td>1 coffee</td>
              <td>50</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
