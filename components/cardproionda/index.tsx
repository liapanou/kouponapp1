export type Product = {
  name: string;
  price: number;
  src: string;
};

export function CardProionda(props: Product) {
  return (
    <div className="relative w-full h-fit rounded-lg">
      <img
        className="rounded-lg shadow-md  h-80 w-full "
        src="https://img.freepik.com/free-photo/mockup-disposable-coffee-cup_53876-63381.jpg?w=2000"
        alt="product"
      />
      <div className="absolute bg-base-200 flex justify-center items-center rounded-lg text-base-content ml-2 top-3 px-2 py-2">
        20
        <img className="w-10 h-10" src="/images/icons8-medal-100.png" />
      </div>
      <div className=" w-full  h-fit absolute bottom-0">
        <div className="bg-base-200 text-base-content  grid grid-cols-2 gap-4  rounded-lg  rounded-t-none px-4 py-2 shadow-lg ">
          <div className="p-4">
            <h4 className="text-gray-700 font-semibold text-lg mt-1 mb-2">
              Coffee
            </h4>
            <p className="w-60  h-10 text-left break-words">
              fdjkjkjdkjvkdjgkjdfkjgkdjkjgkdf kgkgkjkdjkgjdfjjjgdfjkdkjdfg
            </p>
          </div>
          <div>
            <div className="text-lg absolute right-2 top-8">2.5€</div>
            <button className="btn btn-sm  text-xs absolute right-2 bottom-6 bg-slate-700 rounded-xl">
              Buy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
