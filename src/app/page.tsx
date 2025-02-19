import ProductCard from "@/components/product/ProductCard";
import Image from "next/image";
import Link from "next/link";

const Home = async () => {
  const res = await fetch(
    "https://glore-bd-backend-node-mongo.vercel.app/api/product"
  );
  const data = await res.json();
  console.log(data.data);
  return (
    <div className="w-11/12 mx-auto">
      <Link className="flex justify-end" href="/create-store">
        Create-Store
      </Link>
      <div className="grid lg:grid-cols-3 gap-4 md:grid-cols-2 sm:grid-cols-1">
        {data.data.map((item) => (
        <ProductCard product={item} key={item._id}/>
        ))}
      </div>
    </div>
  );
};

export default Home;
