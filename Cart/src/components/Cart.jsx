import React from "react";
import { FaTrash } from "react-icons/fa";

const Cart = ({ cartItems, removeFromCart }) => {
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div className="flex items-start justify-between gap-6">
      <div className=" relative bg-[#020817] p-4 rounded-lg border border-[#6b6b6b5d] w-full  min-h-[300px]">
        {/* <h2 className="text-xl text-white font-bold mb-4">Savat</h2> */}
        {cartItems.length === 0 ? (
          <img
            src="https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-10929686-8779492.png"
            alt=" cart image"
            className="absolute top-1/2 left-1/2 w-35 -translate-x-1/2 -translate-y-1/2 "
          />
        ) : (
          <>
            <ul className="divide-y divide-[#6b6b6b5d] flex gap-2 flex-col">
              {cartItems.map((item) => (
                <li
                  key={item.id}
                  className="pb-2 flex justify-between items-center"
                >
                  <div className="flex items-center">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-16 h-16 object-cover rounded-md mr-4"
                    />
                    <div>
                      <h3 className="font-medium text-white">{item.title}</h3>
                      <p className="text-gray-400">${item.price}</p>
                    </div>
                  </div>
                  <div>
                   <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:text-red-700 px-3"
                  >
                    <FaTrash />
                  </button>

                  </div>

                </li>
              ))}
            </ul>
            <div className="border-t border-[#6b6b6b5d] mt-4 pt-2">
              <div className="flex justify-between font-bold text-lg">
                <span className="text-white">Jami:</span>
                <span className="text-white">${totalPrice.toFixed(2)}</span>
              </div>
              <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 mt-4">
                Buyurtma berish
              </button>
            </div>
          </>
        )}
      </div>

    </div>
  );
};

export default Cart;
