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
        <div className="lg:w-2/5 w-full h-screen border-2 border-red-500">
          <iframe
            width="100%"
            height="100%"
            src={product?.video?.secure_url}
            className="   "
            title={product?.name}
          />
        </div>

        <div className="  flex-1    border-2 border-red-500">
          <h1 className="text-3xl font-bold  ">
            {product?.name}
          </h1>
          <p className="text-lg text-gray-700 mt-2">{product?.description}</p>
          <p className="text-lg font-semibold text-blue-600 mt-4">
            ${product?.price}
          </p>
          <p className="text-lg font-semibold text-blue-600 mt-4">
            ${product?.category?.name}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCardDetails;
