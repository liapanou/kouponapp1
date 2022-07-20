import { CardMagazia } from "../components/cardmagazia";
import { PriceFilter } from "../components/pricefilter";
import { Header } from "../components/header/index";

function Home() {
  return (
    <div>
      <div id="app" className="">
        <main>
          <div className="grid grid-cols-1 md:grid-cols-[300px_1fr]">
            <div className="bg-base-300 md:sticky md:top-0 md:h-screen h-fit border">
              <div className="md:hidden">
                <Header />
              </div>
              <PriceFilter />
            </div>

            <div className="border">
              <div className="sticky top-0 z-50 hidden md:block">
                <Header />
              </div>
              <div className="grid  md:grid-cols-2 lg:grid-cols-3 p-8 gap-4">
                <CardMagazia />
                <CardMagazia />
                <CardMagazia />
                <CardMagazia />
                <CardMagazia />
                <CardMagazia />
                <CardMagazia />
                <CardMagazia />
                <CardMagazia />
                <CardMagazia />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Home;
