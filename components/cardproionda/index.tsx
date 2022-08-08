export type Product = {
  name: string;
  price: number;
  src: string;
};

export function CardProionda(props: Product) {
  return (
    <div className=" container mx-auto relative ">
      <div>
        <img
          className="rounded-lg shadow-md  h-fit w-full "
          src="https://cdn.e-food.gr/cdn-cgi/image/w=800,h=450,fit=cover,q=100,f=auto/restaurants/5378696/banner_item/000000000007?c=13c2355b236cd161ab41e1b9c65d9fdd"
        ></img>
      </div>
      <div className="relative px-4 -mt-16">
        <div className="bg-white rounded-lg px-4 py-3 shadow-lg ">
          <div className="flex"></div>

          <h4 className="text-gray-900 font-semibold text-lg mt-1">Coffee</h4>
          <div className="mt-1">
            <span className="text-gray-900">2,5$ </span>
            <span className="text-gray-900">/ 50 points </span>
          </div>
        </div>
      </div>
    </div>
  );
}
