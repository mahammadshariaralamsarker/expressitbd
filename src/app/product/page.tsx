"use client";

import { useEffect, useState } from "react";
import ProductCard from "@/components/product/ProductCard";
import Link from "next/link";
import { SolutionOutlined } from "@ant-design/icons";
import { IProduct } from "@/types";

const ProductsPage = () => {
  const [products, setProducts] = useState<IProduct[] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          "https://glore-bd-backend-node-mongo.vercel.app/api/product");
        const data = await res.json();

        if (data.data) {
          setProducts(data.data);
          localStorage.setItem("products", JSON.stringify(data.data));
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        const savedProducts = localStorage.getItem("products");
        if (savedProducts) {
          setProducts(JSON.parse(savedProducts));
        }
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  if (loading) return <p className="text-center text-lg font-bold">Loading products...</p>;



  return (
    <div>
      {/* Create Store Button */}
      <div className="p-5">
        <Link className="flex justify-end" href="/create-store">
          <span className="flex items-center px-4">Create Store</span>
          <SolutionOutlined className="text-6xl" />
        </Link>
      </div>

      <div className="grid lg:grid-cols-4 gap-16 md:grid-cols-2 sm:grid-cols-1">
        {products!.map((item) => (
          <ProductCard product={item} key={item._id} />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
