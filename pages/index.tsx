import { CardMagazia } from "../components/cardmagazia";
import { CousineFilter } from "../components/cousinefilter";
import { Header } from "../components/header/index";

function Home() {
  return (
    <div>
      <Header />
      <div className="w-screen h-screen border">
        <div className="bg-base-300 container mx-auto h-screen">
          <div className="grid h-full grid-cols-[350px_1fr]">
            <div className="border w-full h-full ">
              <CousineFilter />
            </div>
            <div className="border">
              <div className="h-20 border">asdasd</div>
              <div className="grid grid-cols-2 gap-4">
                <CardMagazia />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
