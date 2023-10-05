import React from "react";
import { BsCart4 } from "react-icons/bs";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="bg-slate-900 flex items-center justify-center">
      <div className="w-[1080px] flex justify-between items-center p-2">
        <Link to="/">
          <img src="src/assets/logo.png" width={50} />
        </Link>
        <div className="text-white flex gap-4">
          <Link to="/">Home</Link>
          <Link to="/cart">
            <BsCart4 size={20} />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
