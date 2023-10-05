import React, { useEffect, useState } from "react";
import CartItems from "../components/CartItems";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Cart() {
  const { cart } = useSelector((state) => state);
  const [amount, setAmount] = useState(0);

  useEffect(() => {
    setAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);
  return (
    <div className="w-[100vw] flex items-center justify-center">
      {cart.length === 0 ? (
        <div className="h-[90vh] flex flex-col gap-4 justify-center items-center">
          <h2>Your cart is empty!</h2>
          <Link to="/">
            <button className="bg-green-700 text-white font-bold rounded-lg p-2 text-center hover:bg-white hover:text-green-700 hover:outline-green-700 hover:outline">
              Shop Now
            </button>
          </Link>
        </div>
      ) : (
        <div className="mb-4 flex gap-4 p-4 relative">
          <p className="bg-green-800 text-white absolute -top-14 -right-[5rem] px-1 text-sm  rounded-2xl">{cart.length}</p>
          <div className="overflow-scroll">
            {cart.map((items, index) => (
              <CartItems key={items.id} items={items} index={index} />
            ))}
          </div>
          <div className="flex flex-col justify-between outline outline-gray-200 outline-1 p-4 max-h-[85vh]">
            <div>
              <div className="text-green-800 text-xs font-bold">YOUR CART</div>
              <div className="text-3xl text-green-800 font-bold ">SUMMARY</div>
              <p className="mt-4 font-bold text-xs text-green-800">
                <span>Total Items: {cart.length}</span>
              </p>
            </div>

            <div>
              <p className="font-bold text-sm text-green-800">
                Total Amount: ${amount}
              </p>
              <button className="bg-green-700 hover:bg-green-600 w-[300px] rounded-lg text-white font-semibold py-2 text-center">
                CheckOut Now
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
