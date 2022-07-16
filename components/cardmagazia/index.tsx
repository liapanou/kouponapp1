export function CardMagazia(props) {
  return (
    <div className=" px-4 py-6">
      <div className=" container mx-auto relative ">
        <div className="bg-white absolute right-1/4 box-border h-20 w-20 p-4 ml-auto z-20 ">
          200 points
        </div>
        <img
          className="rounded-lg shadow-md h-64 relative z-10"
          src="https://www.panelinios.gr/images/photo_big/104871.jpg"
          alt=""
        ></img>
      </div>
      <div className="px-4 ">
        <div className=" bg-white  relative rounded-lg px-4 py-3 w-80 -mt-16 z-20">
          <h4 className="font-semibold">Deseo art cafe</h4>
          <div className="flex">
            <div className=" text-xs font-medium">Coffees</div>
            <br />
            <div className="text-xs text-gray-600 font-medium ">
              • 30 • min 0,00€
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
