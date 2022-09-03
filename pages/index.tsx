import { CardMagazia } from "../components/cardmagazia";
import { ShopFilter } from "../components/shopfilter";
import { Header } from "../components/header/index";
import { GetServerSideProps } from "next";
import { withSessionSsr } from "../lib/withSession";

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

export const getServerSideProps: GetServerSideProps = withSessionSsr(
  async function getServerSideProps({ req }) {
    const user = req.session.user;
    let destination = "/login";
    if (user) {
      destination = "/tracking";
    }
    if (user?.admin) destination = "/admin";
    return {
      redirect: {
        destination,
        permanent: false,
      },
    };
  }
);

export default Home;
