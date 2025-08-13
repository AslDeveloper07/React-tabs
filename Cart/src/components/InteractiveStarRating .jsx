import React, { useState } from "react";
import { FaStar, FaRegStar } from "react-icons/fa";

const InteractiveStarRating = ({ initialRating = 0, onChange }) => {
  const [rating, setRating] = useState(initialRating);
  const [hoverRating, setHoverRating] = useState(0);

  return (
    <div className="flex items-center">
      {[...Array(5)].map((_, i) => {
        const ratingValue = i + 1;
        return (
          <button
            key={i}
            className="focus:outline-none"
            onClick={() => {
              setRating(ratingValue);
              onChange && onChange(ratingValue);
            }}
            onMouseEnter={() => setHoverRating(ratingValue)}
            onMouseLeave={() => setHoverRating(0)}
          >
            {ratingValue <= (hoverRating || rating) ? (
              <FaStar className="text-yellow-400 text-[15px]" />
            ) : (
              <FaRegStar className="text-yellow-400 text-[15px]" />
            )}
          </button>
        );
      })}
      {/* <span className="text-white text-[15px] ml-1">{rating.toFixed(1)}</span> */}
    </div>
  );
};

export default InteractiveStarRating;