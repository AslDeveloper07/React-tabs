import React from "react";
import { FaTrash } from "react-icons/fa";

const Cart = ({ cartItems, removeFromCart }) => {
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Savat</h2>
      {cartItems.length === 0 ? (
        <p>Savat bo'sh</p>
      ) : (
        <>
          <ul className="divide-y divide-gray-200">
            {cartItems.map((item) => (
              <li key={item.id} className="py-4 flex justify-between items-center">
                <div className="flex items-center">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-16 h-16 object-cover rounded-md mr-4"
                  />
                  <div>
                    <h3 className="font-medium">{item.title}</h3>
                    <p className="text-gray-600">${item.price}</p>
                  </div>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  <FaTrash />
                </button>
              </li>
            ))}
          </ul>
          <div className="border-t border-gray-200 mt-4 pt-4">
            <div className="flex justify-between font-bold text-lg">
              <span>Jami:</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
            <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 mt-4">
              Buyurtma berish
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;