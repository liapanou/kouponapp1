import { useState } from "react";

export function PriceFilter() {
  const [select, setSelect] = useState(1000);
  return (
    <div>
      {/* save the state of the price */}
      <div className="flex py-2 px-4 border-b shadow sticky top-0 z-40 bg-white">
        <select
          id="value"
          defaultValue="Select select"
          onChange={(evt) => setSelect(Number(evt.currentTarget.value))}
          className="select w-auto "
        >
          <option> max price (points)</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
          <option value="13">13</option>
        </select>
      </div>
    </div>
  );
}
