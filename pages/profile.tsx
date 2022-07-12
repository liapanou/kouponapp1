import { Header } from "../components/header";
import { Input } from "../components/input";

export default function Profile() {
  return (
    <div>
      <Header />
      <form className="px-4 py-4 mt-20 container mx-auto">
        <div className="flex">
          <Input label="First Name" />
          <Input label="Last Name" />
        </div>
        <div>
          <Input label="Email" />
          <Input label="Contact Number" />
          <Input label="Address" />
        </div>

        <div className="flex">
          <Input label="City" className="mr-4" />
          <Input label="State" />
        </div>

        <div className="flex">
          <Input label="Zip code" />
          <Input label="Country" />
        </div>

        <Input label="Password" type="password" />
      </form>
    </div>
  );
}
