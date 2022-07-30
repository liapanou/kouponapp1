import { CardMagazia } from "../components/cardmagazia";
import { ShopFilter } from "../components/shopfilter";
import { Header } from "../components/header/index";
import { withSessionSsr } from "../lib/withSession";

function Home() {
  return (
<<<<<<< HEAD
    <div>
      <div id="app" className="">
        <main>
          <Header />

          <div className="grid grid-cols-1 md:grid-cols-[300px_1fr]">
            <div className="bg-base-300 md:sticky md:top-16 md:h-screen h-fit border">
              <ShopFilter />
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
=======
    <div className="h-screen overflow-hidden">
      <Header />

      <div className="grid grid-cols-1 md:grid-cols-[300px_1fr]">
        <PriceFilter />

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
>>>>>>> a052574 (test)
      </div>
    </div>
  );
}

export const getServerSideProps = withSessionSsr(
  async function getServerSideProps({ req }) {
    const user = req.session.user;
    if (!user) {
      return {
        redirect: {
          destination: "/login",
          permanent: false,
        },
      };
    }

    return {
      props: {
        user: req.session.user,
      },
    };
  }
);

export default Home;
