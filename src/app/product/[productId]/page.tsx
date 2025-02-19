"use client"; // Ensures this runs only in the browser

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
      <div className="grid gap-4 md:grid-cols-2"> 
        <div className="w-full h-screen">
          <iframe
            width="100%"
            height="100%"
            src={product?.video?.secure_url}
            className=" "
            title={product?.name}
          />
        </div>

        {/* Product Info Section */}
        <div className="w-full flex flex-col justify-start">
          <h1 className="text-3xl font-bold text-center md:text-left">
            {product?.name}
          </h1>
          <p className="text-lg text-gray-700 mt-2">{product?.description}</p>
          <p className="text-lg font-semibold text-blue-600 mt-4">
            ${product?.price}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCardDetails;
