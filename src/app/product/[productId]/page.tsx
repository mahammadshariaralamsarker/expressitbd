"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation"
import Head from "next/head";
import { IProduct } from "@/types";

const ProductCardDetails = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState<IProduct| null>(null);

  useEffect(() => {
    const savedProducts = localStorage.getItem("products");
    if (savedProducts) {
      const products = JSON.parse(savedProducts);
      const foundProduct = products.find((product:IProduct) => product._id === productId);
      setProduct(foundProduct);
    }
  }, [productId]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="h-screen w-11/12 mx-auto shadow-md p-2">
      <Head>
        <title>Express It BD | {product?.name}</title>
        <meta name="description" content={product?.description || "Product details page"} />
      </Head>
      <div className="lg:flex"> 
        <div className="lg:w-2/5 w-full h-screen">
          <iframe
          
            width="100%"
            height="100%"
            src={product?.video?.secure_url}
            className="object-cover border-2 border-white"
            title={product?.name}
            allowFullScreen
          />
        </div>
 
        <div className="relative flex-1 p-9 h-screen text-[#fefdff]">
  
          <div
            className="absolute inset-0 bg-black opacity-60"
            style={{
              backgroundImage: `url(${product?.images?.[0]?.secure_url})`,
              backgroundSize: "cover",
            }}
          />
 
          <div className="relative z-10">
            <div className="flex text-3xl">
              <h1 className="mr-2">Product Name:</h1>
              <h1 className="text-3xl">{product?.name}</h1>
            </div>
            <p className="text-lg font-bold mt-2">{product?.description}</p>
            <p className="text-lg font-semibold mt-4">Category: {product?.category?.name}</p>
            <p className="text-lg font-semibold mt-4">Price: ${product?.price}</p>
            <button className="mt-4 bg-[#b46565dd] text-[#fdfdfdfa] px-4 py-2 rounded-md hover:bg-[#ff6767] transition-all duration-300">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCardDetails;
