import { IoIosCart } from "react-icons/io";
import InteractiveStarRating from "./InteractiveStarRating ";

const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="bg-[#020817] border border-[#6b6b6b5d]  rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-68 object-cover"
      />
      <div className="pt-2 px-2 pb-2">
        <h3 className="text-md font-semibold  text-white">{product.title}</h3>
        <p className="text-gray-500 mb-3 text-[13px] leading-tight line-clamp-2">
          {product.description}
        </p>
        <div className="flex justify-between items-center mb-3">
          <span className="text-white font-bold">${product.price}</span>
          <div className="flex items-center">
            <InteractiveStarRating />
          </div>
        </div>
        <button
          onClick={() => addToCart(product)}
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center"
        >
          <IoIosCart className="mr-2 text-xl" />
          Savatga qo'shish
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
