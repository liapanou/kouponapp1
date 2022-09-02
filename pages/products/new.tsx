import React from "react";
import { Header } from "../../components/header";
import { Input } from "../../components/input";

export default function NewProduct() {
  return (
    <div>
      <Header />
      <form className="mx-auto container p-8">
        <h1 className="text-4xl font-bold mb-8">Product</h1>
        <div className=" grid grid-cols-2 gap-20">
          <div>
            <Input label="Product Name" className="mb-2" />

            <div className="mb-2 w-full">
              <label className="label">
                <span className="label-text">Category</span>
              </label>
              <select className="select w-full select-bordered">
                <option>beverages</option>
                <option>coffees</option>
                <option>paistres</option>
                <option>sweets</option>
                <option>snacks </option>
              </select>
            </div>

            <Input label="Brand" className="mb-2" />

            <Input label="Product Name" className="mb-2" />
            <Input label="Product Name" className="mb-2" />
          </div>
          <div className="border">
            <div className="mb-6 text-sm"> Product Images</div>
            <div className="flex space-x-6">
              <div className="flex justify-center mt-8 ">
                <div className="max-w-2xl rounded-lg  bg-gray-50 ">
                  <div className="m-4">
                    <div className="flex items-center justify-center w-full">
                      <label className="flex flex-col w-full h-32 border-4 border-blue-200 border-dashed hover:bg-gray-100 hover:border-gray-300">
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
                        <input type="file" className="opacity-0" />
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="divider"></div>
        <div className="flex mb-4 ">
          <img
            className="rounded-full w-32 h-32"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOO1MeJW6Jk0PhqBNQygZIGzHXTXBNhAmBJg&usqp=CAU"
            alt=""
          ></img>
        </div>
        <button className="btn w-full ">Add Product</button>
      </form>
    </div>
  );
}
