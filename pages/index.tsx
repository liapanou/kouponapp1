import { CardMagazia } from "../components/cardmagazia";
import { ShopFilter } from "../components/shopfilter";
import { Header } from "../components/header/index";

function Home() {
  return (
    <div className="h-screen overflow-hidden">
      <Header />

      <div className="grid grid-cols-1 md:grid-cols-[300px_1fr]">
        <ShopFilter />

        <div className="grid overflow-auto pb-20 max-h-screen h-fit  md:grid-cols-2 lg:grid-cols-4 p-8 gap-4">
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
          <CardMagazia />
          <CardMagazia />
          <CardMagazia />
          <CardMagazia />
        </div>
      </div>
    </div>
  );
}

export default Home;
