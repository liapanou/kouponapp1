import React from "react";
import { Header } from "../../components/header";
import { Input } from "../../components/input";

export default function NewProduct() {
  return (
    <div>
      <Header />
      <form className="px-8 py-8 container ">
        <h1 className="text-xl">Product</h1>
        <img
          className="rounded-full w-20 h-20"
          src="https://gr.coca-colahellenic.com/gr/our-24-7-portfolio/brands/coca-cola/_jcr_content/root/sectionteaser_image/container_585461450/teaser_1817396684.coreimg.png/1639564744621/1256x800-401665536-gr-ccs-330ml-slkcan-fullred-w-r2.png"
          alt=""
        ></img>
        <div className="mb-6">
          <Input label="Name" />
        </div>
        <div className="mb-6">
          <div>
            <input type="checkbox" id="type1" name="type1" value="beverages" />
            <label> beverages</label>
          </div>

          <div>
            <input type="checkbox" id="type2" name="type2" value="coffees" />
            <label> coffees </label>
          </div>

          <div>
            <input type="checkbox" id="type3" name="type3" value="paistres" />
            <label> paistres</label>
          </div>
          <div>
            <input type="checkbox" id="type4" name="type4" value="sweets" />
            <label> sweets</label>
          </div>
          <div>
            <input type="checkbox" id="type5" name="type5" value="snacks" />
            <label> snacks </label>
          </div>
        </div>

        <div className="mb-6">
          <Input label="Points" type="number" />
        </div>

        <button className="btn w-full mt-10">Submit</button>
      </form>
    </div>
  );
}
