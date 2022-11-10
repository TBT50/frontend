import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { ProductListItem } from "../components/Product";
import { Main } from "../components/Main";

const DATA = {
  imgUrl: "https://picsum.photos/300/300",
  description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex repellat
  deserunt sapiente, quidem et enim sed nulla! Accusamus, aliquid porro
  ad dolore facilis qui dolor, tenetur quibusdam, laboriosam ipsam
  corrupti earum dolores voluptatem optio maxime quis? Eos ipsa alias
  assumenda!`,
  rating: 4.5,
  title: "TEST",
};

function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Main>
        <ProductListItem data={DATA} />
      </Main>
      <Footer />
    </div>
  );
}

export default Home;
