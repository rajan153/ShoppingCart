import React from "react";
import Product from "../components/Product";
import { useInfo } from "../hooks/useInfo";
import Spinner from "../components/Spinner";
import { useSelector } from "react-redux";

function Home() {
  const { data, loading } = useInfo();
  const { cart } = useSelector((state) => state);
  console.log(cart);
  return (
    <div className="flex flex-wrap justify-center items-center h-[90vh] pb-8">
      {loading ? (
        <Spinner />
      ) : (
        <div className="flex flex-wrap justify-center pb-8 relative">
        {
          cart.length === 0 ? (<p></p>) : (<p className="bg-green-800 text-white absolute -top-14 right-[6.8rem] px-1 text-sm  rounded-2xl">{cart.length}</p>)
        }
          {data.length === 0 ? (
            <div className="flex justify-center items-center">
              <p>No Data Found</p>
            </div>
          ) : (
            data.map((post) => <Product key={post.id} post={post} />)
          )}
        </div>
      )}
    </div>
  );
}

export default Home;

