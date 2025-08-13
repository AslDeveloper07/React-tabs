import React from "react";
import { FaStar, FaShoppingCart } from "react-icons/fa";

const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
        <p className="text-gray-600 mb-3">{product.description}</p>
        <div className="flex justify-between items-center mb-3">
          <span className="text-blue-600 font-bold">${product.price}</span>
          <div className="flex items-center">
            <FaStar className="text-yellow-400 mr-1" />
            <span>{product.rating}</span>
          </div>
        </div>
        <button
          onClick={() => addToCart(product)}
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center"
        >
          <FaShoppingCart className="mr-2" />
          Savatga qo'shish
        </button>
      </div>
    </div>
  );
};

export default ProductCard;