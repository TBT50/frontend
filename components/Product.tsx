import { Rating } from "../components/Rating";

interface ProductDetailsProps {
  title: string;
  imgUrl: string;
  description: string;
  rating: number;
}

// export const ProductDetails = ({ data }: ProductDetailsProps) => {
//   return (
//     <div>
//       <img src={data.imgUrl} alt="" />
//       <h2 className="font-extrabold text-4xl">{data.title}</h2>
//       <p>{data.description}</p>
//       <Rating rating={data.rating} />
//     </div>
//   );
// };

type ProductListItem = Pick<ProductDetailsProps, "title" | "imgUrl">;

interface ProductListItemProps {
  data: ProductListItem;
}

export const ProductListItem = ({ data }: ProductListItemProps) => {
  return (
    <div>
      <img src={data.imgUrl} alt="" />
      <h2 className="font-extrabold text-4xl">{data.title}</h2>
    </div>
  );
};
