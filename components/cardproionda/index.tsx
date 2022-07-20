export type Product = {
  name: string;
  price: number;
  src: string;
};

export function CardProionda(props: Product) {
  return (
    <div className=" container mx-auto relative ">
      <div className="bg-white absolute right-3 box-border h-20 w-20 p-4 ml-auto z-20 ">
        200 points
      </div>

      <div>
        <img
          className="rounded-lg shadow-md h-fit w-full"
          src="https://cdn.e-food.gr/cdn-cgi/image/w=800,h=450,fit=cover,q=100,f=auto/restaurants/5378696/banner_item/000000000007?c=13c2355b236cd161ab41e1b9c65d9fdd"
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
  );
}
