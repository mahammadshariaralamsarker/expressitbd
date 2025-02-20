"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

const ProductCardDetails = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const savedProducts = localStorage.getItem("products");
    if (savedProducts) {
      const products = JSON.parse(savedProducts);
      const foundProduct = products.find(
        (product) => product._id === productId
      );
      setProduct(foundProduct);
    }
  }, [productId]);

  if (!product) return <p> loading...</p>;

  return (
    <div className=" h-screen c w-11/12 mx-auto  bg-white shadow-md  ">
      <div className=" lg:flex">
        <div className="lg:w-2/5 w-full h-screen  ">
          <iframe
            width="100%"
            height="100%"
            src={product?.video?.secure_url}
            className="   "
            title={product?.name}
          />
        </div>

        <div className="  flex-1 p-9  text-[#0C0517] ">
          <div className="flex text-3xl text-[#0C0517]">
            <h1>Product Name:</h1>
            <h1 className="text-3xl     ">{product?.name}</h1>
          </div>
          <p className="text-lg  font-bold mt-2 text-[#0C0517]">{product?.description}</p>
          
          <p className="text-lg font-semibold text-blue-600 mt-4 text-[#0C0517]">
            ${product?.category?.name}
          </p>
          <p className="text-lg font-semibold text-blue-600 mt-4 text-[#0C0517]">
            ${product?.price}
          </p>
          <button className="   bg-[#b46565dd] text-[#fdfdfdfa] px-4 py-2 rounded-md hover:bg-[#ff6767] transition-all duration-300  te">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCardDetails;
