"use client"; // Ensures it runs only on the client side

import { useEffect, useState } from "react";
import ProductCard from "@/components/product/ProductCard";
import Link from "next/link";

import { Carousel } from "antd";
const contentStyle: React.CSSProperties = {
  margin: 0,
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

const ProductsPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          "https://glore-bd-backend-node-mongo.vercel.app/api/product"
        );
        const data = await res.json();

        if (data.data) {
          setProducts(data.data);
          localStorage.setItem("products", JSON.stringify(data.data)); // Save to local storage
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <div className=" bg-[#468585] text-white m-5">
        <Link className="p-6 w-1/6 text-center my-5" href="/create-store">
          Create-Store
        </Link>
      </div>
      <div className="grid lg:grid-cols-4 gap-16 md:grid-cols-2 sm:grid-cols-1 ">
        {products.map((item) => (
          <ProductCard product={item} key={item._id} />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
