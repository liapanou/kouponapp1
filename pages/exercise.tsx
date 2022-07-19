import { useState } from "react";
import { Header } from "../components/header";

function Card() {
  return (
    <div className="border w-full">
      <div>
        <div>
          <img
            className="rounded-lg shadow-md h-fit w-full"
            src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW9kZXJuJTIwaG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
          ></img>
        </div>
        <div className="relative px-4 -mt-16">
          <div className="bg-white rounded-lg px-4 py-3 shadow-lg ">
            <div className="flex">
              <span className="px-2 py-2 leading-none inline-block  bg-teal-200 text-teal-800 font-semibold rounded-full uppercase tracking-wide text-xs">
                Plus
              </span>
              <div className="text-xs ml-2 text-gray-600 font-semibold uppercase tracking-wide">
                3 beds &bull; 2 baths
              </div>
            </div>

            <h4 className="text-gray-900 font-semibold text-lg mt-1">
              Modern home in city center
            </h4>
            <div className="mt-1">
              <span className="text-gray-900">1,400$ </span>
              <span className=" ml-1  text-sm text-gray-600">/wk</span>
              <div className="text-sm text-gray-600">34 reviews</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Filtra() {
  return (
    <div className="px-4 py-4">
      <form className="">
        <div className=" grid gap-4">
          {/* 1 */}
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">
                Pick the best fantasy franchise
              </span>
            </label>
            <select className="select select-bordered">
              <option disabled selected>
                Pick one
              </option>
              <option>Star Wars</option>
              <option>Harry Potter</option>
              <option>Lord of the Rings</option>
              <option>Planet of the Apes</option>
              <option>Star Trek</option>
            </select>
          </div>
          {/* 2 */}
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">
                Pick the best fantasy franchise
              </span>
            </label>
            <select className="select select-bordered">
              <option disabled selected>
                Pick one
              </option>
              <option>Star Wars</option>
              <option>Harry Potter</option>
              <option>Lord of the Rings</option>
              <option>Planet of the Apes</option>
              <option>Star Trek</option>
            </select>
          </div>
        </div>

        <div className="divider" />
        {/* 2 */}
        <div>
          <span className="block text-sm font-semibold text-gray-500 mb-2">
            Amenities
          </span>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-1">
            <div className="form-control border w-fit">
              <label className="label cursor-pointer">
                <input type="checkbox" className="checkbox checkbox-sm" />
                <span className="text-sm ml-2">Remember me</span>
              </label>
            </div>
            <div className="form-control border w-fit">
              <label className="label cursor-pointer">
                <input type="checkbox" className="checkbox checkbox-sm" />
                <span className="text-sm ml-2">Remember me</span>
              </label>
            </div>
            <div className="form-control border w-fit">
              <label className="label cursor-pointer">
                <input type="checkbox" className="checkbox checkbox-sm" />
                <span className="text-sm ml-2">Remember me</span>
              </label>
            </div>
            <div className="form-control border w-fit">
              <label className="label cursor-pointer">
                <input type="checkbox" className="checkbox checkbox-sm" />
                <span className="text-sm ml-2">Remember me</span>
              </label>
            </div>
            <div className="form-control border w-fit">
              <label className="label cursor-pointer">
                <input type="checkbox" className="checkbox checkbox-sm" />
                <span className="text-sm ml-2">Remember me</span>
              </label>
            </div>
            <div className="form-control border w-fit">
              <label className="label cursor-pointer">
                <input type="checkbox" className="checkbox checkbox-sm" />
                <span className="text-sm ml-2">Remember me</span>
              </label>
            </div>
            <div className="form-control border w-fit">
              <label className="label cursor-pointer">
                <input type="checkbox" className="checkbox checkbox-sm" />
                <span className="text-sm ml-2">Remember me</span>
              </label>
            </div>
            <div className="form-control border w-fit">
              <label className="label cursor-pointer">
                <input type="checkbox" className="checkbox checkbox-sm" />
                <span className="text-sm ml-2">Remember me</span>
              </label>
            </div>
            <div className="form-control border w-fit">
              <label className="label cursor-pointer">
                <input type="checkbox" className="checkbox checkbox-sm" />
                <span className="text-sm ml-2">Remember me</span>
              </label>
            </div>
          </div>
        </div>

        <div className="divider" />
        <button className="btn w-full">Update results</button>
      </form>
    </div>
  );
}
export default function Exercise() {
  const [open, setOpen] = useState(false);
  return (
    <div id="app" className="">
      <main>
        <div className="grid grid-cols-1 md:grid-cols-[300px_1fr]">
          <div className="bg-base-300 md:sticky md:top-0 md:h-screen h-fit border">
            <div className="md:hidden">
              <Header />
            </div>
            <Filtra />
          </div>

          <div className="border">
            <div className="sticky top-0 z-50 hidden md:block">
              <Header />
            </div>
            <div className="grid  md:grid-cols-2 lg:grid-cols-3 p-8 gap-4">
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
