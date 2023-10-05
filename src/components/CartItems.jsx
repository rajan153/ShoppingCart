import React from "react";
import { useDispatch } from "react-redux";
import { MdDelete } from "react-icons/md";
import { toast } from "react-hot-toast";
import { remove } from "../features/cartSlice";

function CartItems({ items, index }) {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(items.id));
    toast.success("Items Removed from Card");
  };

  return (
    <div>
      <div className="flex w-full gap-4 p-4 outline outline-1 outline-gray-200 shadow-lg">
        <div>
          <img src={items.image} className="w-[150px]" />
        </div>
        <div className="w-[350px] flex flex-col justify-evenly">
          <h1 className="font-bold ">{items.title}</h1>
          <h1 className="font-serif">
            {items.description.length > 80
              ? items.description.substr(0, 80) + "..."
              : items.description}
          </h1>
          <div className="flex justify-between">
            <p className="text-green-700 font-bold">${items.price}</p>
            <div>
              <MdDelete
                className="bg-red-200 p-1 rounded-lg fill-red-800 cursor-pointer hover:bg-red-300"
                onClick={removeFromCart}
                size={25}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItems;
