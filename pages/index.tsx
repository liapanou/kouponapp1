import { CardMagazia } from "../components/cardmagazia";
import { PriceFilter } from "../components/pricefilter";
import { Header } from "../components/header/index";
import Link from "next/link";

function Home() {
  return (
    <div>
      <div id="app" className="">
        <main>
          <Header />

          <div className="grid grid-cols-1 md:grid-cols-[300px_1fr]">
            <div className="bg-base-300 md:sticky md:top-16 md:h-screen h-fit border">
              <PriceFilter />
            </div>
            <div>
              <div className="grid  md:grid-cols-2 lg:grid-cols-3 p-8 gap-4">
                <Link href="/products/">
                  <a className="z-40">
                    <CardMagazia />
                  </a>
                </Link>
                <Link href="/products/">
                  <a>
                    <CardMagazia />
                  </a>
                </Link>
                <Link href="/products/">
                  <a>
                    <CardMagazia />
                  </a>
                </Link>
                <Link href="/products/">
                  <a>
                    <CardMagazia />
                  </a>
                </Link>
                <Link href="/products/">
                  <a>
                    <CardMagazia />
                  </a>
                </Link>
                <Link href="/products/">
                  <a>
                    <CardMagazia />
                  </a>
                </Link>
                <Link href="/products/">
                  <a>
                    <CardMagazia />
                  </a>
                </Link>
                <Link href="/products/">
                  <a>
                    <CardMagazia />
                  </a>
                </Link>
                <Link href="/products/">
                  <a>
                    <CardMagazia />
                  </a>
                </Link>
                <Link href="/products/">
                  <a>
                    <CardMagazia />
                  </a>
                </Link>
                <Link href="/products/">
                  <a>
                    <CardMagazia />
                  </a>
                </Link>
                <Link href="/products/">
                  <a>
                    <CardMagazia />
                  </a>
                </Link>
                <Link href="/products/">
                  <a>
                    <CardMagazia />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Home;
