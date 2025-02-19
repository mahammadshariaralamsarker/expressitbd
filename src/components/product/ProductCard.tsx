import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ product }) => {
  console.log(product);
  
  return (
    <div className="border   shadow-lg   bg-white">
      <Image
        src={product?.images[0]?.secure_url}
        alt={product.name}
        className=" w-full h-[550px] rounded-lg  p-1 "
        width={100}
        height={300}
      />
      <h2 className="text-lg font-semibold mt-2">{product.name}</h2>
      <p className="text-black text-sm mt-1">{product.details}</p>
      <Link href={`/product/${product._id}`}>
        <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
          View Details
        </button>
      </Link>
    </div>
  );
};

export default ProductCard;
