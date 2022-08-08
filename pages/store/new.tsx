import { useState } from "react";
import { Header } from "../../components/header";

export default function Newproduct() {
  // apothikevoume ta dedomena tou kathe input se state
  const [name, setName] = useState<string>();
  const [type, setType] = useState<string>();
  const [price, setPrice] = useState<number>();
  const [file, setFile] = useState<File>();
  console.log({ name, type, price, file });
  return (
    <div>
      <Header />

      <form className="grid container mx-auto mt-20 gap-4 px-4 py-4">
        <ul>
          <li>
            <input
              onChange={(evt) => {
                setName(evt.currentTarget.value);
              }}
              placeholder="✏️  Name "
              className=" input input-bordered w-full  mb-4"
            ></input>
          </li>
          <li>
            <select
              onChange={(evt) => {
                setType(evt.currentTarget.value);
              }}
              className=" select select-bordered w-full mb-4"
            >
              <option selected disabled>
                🆎 Select
              </option>
              <option value="1">value 1</option>
              <option value="2">value 2</option>
              <option value="3">value 3</option>
              <option value="4">value 4</option>
              <option value="5">value 5</option>
            </select>
          </li>
          <li>
            <input
              onChange={(evt) => {
                setPrice(Number(evt.currentTarget.value));
              }}
              type="number"
              placeholder="💰 Price "
              className=" input input-bordered w-full mb-4"
            ></input>
          </li>
        </ul>

        <div className="flex justify-center ">
          <div className="rounded-lg w-full">
            <div className="mb-4">
              <div className="flex items-center justify-center w-full">
                <label className="flex flex-col w-full h-32 border-4 border-base-200 border-dashed">
                  <div className="flex flex-col items-center justify-center pt-7">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-8 h-8 text-gray-400 group-hover:text-gray-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                      />
                    </svg>
                    <p className="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
                      Attach a file
                    </p>
                  </div>
                  <input
                    onChange={(evt) => {
                      setFile(evt.currentTarget.files[0]);
                    }}
                    type="file"
                    className="opacity-0"
                  />
                </label>
              </div>
            </div>
          </div>
        </div>
        <input
          className="border w-full px-4 py-4 rounded-xl bg-base-300"
          type="submit"
        />
      </form>
    </div>
  );
}
