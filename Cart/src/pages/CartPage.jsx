import Cart from "../components/Cart";
import { Link } from "react-router-dom";

const CartPage = ({ cartItems, removeFromCart }) => {
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="flex justify-between items-center mb-3">
          <h1 className="text-2xl text-white font-bold">Savat</h1>
          <Link
            to="/"
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
             Orqaga
          </Link>
        </div>
        <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
      </div>
    </div>
  );
};

export default CartPage;