import { useState } from "react";
import { Header } from "../components/header";
import { Input } from "../components/input";

export default function Profile() {
  const [firstname, setFirstName] = useState<string>("");
  const [lastname, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [number, setNumber] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [state, setState] = useState<string>("");
  const [code, setCode] = useState<string>("");
  const [country, setCountry] = useState<string>("");
  const [password, setPassword] = useState("");
  const [points, setPoints] = useState("");
  const [type, setType] = useState("shop");

  return (
    <div>
      <Header />
      <form
        onSubmit={(evt) => evt.preventDefault()}
        className="px-4 py-4 mt-20 container mx-auto"
      >
        <div className="mb-8">
          <button onClick={() => setType("shop")} className="btn btn-outline">
            Shop
          </button>
          <button onClick={() => setType("client")} className="btn btn-outline">
            Client
          </button>
        </div>

        <div className="flex space-x-4">
          <Input
            onChange={(evt) => {
              setFirstName(evt.currentTarget.value);
            }}
            label="First Name"
            className=" "
          />
          <Input
            onChange={(evt) => {
              setLastName(evt.currentTarget.value);
            }}
            label="Last Name"
          />
        </div>
        <div>
          <Input
            onChange={(evt) => {
              setEmail(evt.currentTarget.value);
            }}
            label="Email"
          />
          <Input
            onChange={(evt) => {
              setNumber(evt.currentTarget.value);
            }}
            label="Contact Number"
          />
          <Input
            onChange={(evt) => {
              setAddress(evt.currentTarget.value);
            }}
            label="Address"
          />
        </div>

        <div className="flex space-x-4">
          <Input
            onChange={(evt) => {
              setCity(evt.currentTarget.value);
            }}
            label="City"
            className="mr-4"
          />
          <Input
            onChange={(evt) => {
              setState(evt.currentTarget.value);
            }}
            label="State"
          />
        </div>

        <div className="flex space-x-4">
          <Input
            onChange={(evt) => {
              setCode(evt.currentTarget.value);
            }}
            label="Zip code"
          />
          <Input
            onChange={(evt) => {
              setCountry(evt.currentTarget.value);
            }}
            label="Country"
          />
        </div>

        <Input
          onChange={(evt) => {
            setPassword(evt.currentTarget.value);
          }}
          label="Password"
          type="password"
        />

        {/* emfanizetai to input mono otan to type==="shop" */}
        {type === "shop" ? (
          <Input
            onChange={(evt) => {
              setPoints(evt.currentTarget.value);
            }}
            label="Euros in points"
            type="number"
          />
        ) : null}

        <button className="btn w-full mt-10">Submit</button>
      </form>
    </div>
  );
}
