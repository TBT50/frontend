import { useRouter } from "next/router";

const ProductIdPage = () => {
  const router = useRouter();
  return <div>{router.query.productId}</div>;
};

export default ProductIdPage;
