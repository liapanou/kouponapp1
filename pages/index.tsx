import { useState } from "react";
import { PriceFilter } from "../components/pricefilter";
import { Header } from "../components/header/index";
import { List } from "../components/list/index";

function Home() {
  const [select, setSelect] = useState(1000);
  return (
    <div>
      <Header />
      <PriceFilter />
      <List />
    </div>
  );
}

export default Home;
