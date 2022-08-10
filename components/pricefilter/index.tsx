import { useRouter } from "next/router";

export function PriceFilter() {
  const router = useRouter();

  return (
    <div>
      <div className="px-4 py-4">
        <form className="">
          <div className=" ">
            <div className="form-control w-full max-w-xs ">
              <label className="label">
                <span className="label-text ">Short by</span>
              </label>
              <select
                onChange={(evt) => {
                  router.push(
                    `/?sortBy=${evt.currentTarget.value.toLowerCase()}`
                  );
                }}
                className="select select-bordered"
              >
                <option disabled selected>
                  Pick one
                </option>
                <option>Points </option>
                <option>Reviews </option>
                <option>Price </option>
              </select>
            </div>
          </div>
          <div className="divider" />
          {/* 2 */}
          <div>
            <span className="block text-sm font-semibold text-gray-500 mb-2">
              Food & Drinks
            </span>
            <div className="grid grid-cols-2 gap-4 ">
              <div className="form-control border w-fit">
                <label className="label cursor-pointer">
                  <input type="checkbox" className="checkbox checkbox-sm" />
                  <span className="text-sm ml-2">Beverages</span>
                </label>
              </div>
              <div className="form-control border w-fit">
                <label className="label cursor-pointer">
                  <input type="checkbox" className="checkbox checkbox-sm" />
                  <span className="text-sm ml-2">Coffees</span>
                </label>
              </div>
              <div className="form-control border w-fit">
                <label className="label cursor-pointer">
                  <input type="checkbox" className="checkbox checkbox-sm" />
                  <span className="text-sm ml-2">Paistres</span>
                </label>
              </div>
              <div className="form-control border w-fit">
                <label className="label cursor-pointer">
                  <input type="checkbox" className="checkbox checkbox-sm" />
                  <span className="text-sm ml-2">Snacks</span>
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
    </div>
  );
}
