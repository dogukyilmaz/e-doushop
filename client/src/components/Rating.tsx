import React from "react";
import { IoIosStarHalf, IoIosStarOutline, IoIosStar } from "react-icons/io";

interface RatingProps {
  value: number;
  text?: string;
  color?: string;
  size?: number;
}

const Rating: React.FC<RatingProps> = ({ value, text, color = "#f8e825", size }: any) => {
  const fullStar = <IoIosStar color={color} size={size} />;
  const halfStar = <IoIosStarHalf color={color} size={size} />;
  const emptyStar = <IoIosStarOutline color={color} size={size} />;
  return (
    <div className="rating">
      <span>{value >= 1 ? fullStar : value >= 0.5 ? halfStar : emptyStar}</span>
      <span>{value >= 2 ? fullStar : value >= 1.5 ? halfStar : emptyStar}</span>
      <span>{value >= 3 ? fullStar : value >= 2.5 ? halfStar : emptyStar}</span>
      <span>{value >= 4 ? fullStar : value >= 3.5 ? halfStar : emptyStar}</span>
      <span>{value >= 5 ? fullStar : value >= 4.5 ? halfStar : emptyStar}</span>

      <span>{text && text}</span>
    </div>
  );
};

export default Rating;
