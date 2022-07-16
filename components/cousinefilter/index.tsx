export function CousineFilter() {
  return (
    <div>
      <div className="px-5 py-5">
        <h1 className="mb-4">Basic Cousine</h1>
        <div className="mt-2">
          <input
            type="checkbox"
            id="type1"
            name="type1"
            value="coffees"
            className="w-6 h-6"
          />
          <label className="inline-flex items-center ml-2"> Coffees</label>
        </div>

        <div className="mt-2 flex items-center">
          <input
            type="checkbox"
            id="type2"
            name="type2"
            value="souvlakia"
            className="w-6 h-6"
          />
          <label className="  " htmlFor="type2">
            {" "}
            Souvlakia
          </label>
        </div>

        <div className="mt-2 flex item-center">
          <input
            type="checkbox"
            id="type3"
            name="type3"
            value="pizza"
            className="w-6 h-6"
          />
          <label className="inline-flex items-center ml-2"> Pizza </label>
        </div>
        <div className="mt-2">
          <input
            type="checkbox"
            id="type4"
            name="type4"
            value="crepes"
            className="w-6 h-6"
          />
          <label className="inline-flex items-center ml-2"> Crepes</label>
        </div>
        <div className="mt-2">
          <input
            type="checkbox"
            id="type5"
            name="type5"
            value="burgers"
            className="w-6 h-6"
          />
          <label className="inline-flex items-center ml-2"> Burgers </label>
        </div>
      </div>
    </div>
  );
}
