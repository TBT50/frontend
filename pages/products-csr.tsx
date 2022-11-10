import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Main } from "../components/Main";
import { ProductListItem } from "../components/Product";

import { useQuery } from "@tanstack/react-query";

const getProducts = async () => {
  const res = await fetch(`https://fakestoreapi.com/products`);
  const data: StoreApiResponse[] = await res.json();
  return data;
};

const ProductsPage = () => {
  const query = useQuery({ queryKey: ["products"], queryFn: getProducts });
  query.data;

  if (query.isLoading) {
    return <div>LOADING...</div>;
  }

  if (!query.data || query.error) {
    return <div>Something went wrong!</div>;
  }

  return (
    <>
      <Header />
      <Main>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {query.data.map((product) => {
            return (
              <ProductListItem
                key={product.id}
                data={{
                  title: product.title,
                  imgUrl: product.image,
                }}
              />
            );
          })}
        </ul>
      </Main>

      <Footer />
    </>
  );
};

export default ProductsPage;

interface StoreApiResponse {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}
