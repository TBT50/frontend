interface RatingProps {
  rating: number;
}

export const Rating = ({ rating }: RatingProps) => {
  return <p className="font-bold">Rating: {rating}</p>;
};
