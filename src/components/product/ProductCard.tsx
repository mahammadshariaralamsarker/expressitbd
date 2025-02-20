import Link from "next/link";

const ProductCard = ({ product }) => {
  return (
    <div className="border h-96 w-72 shadow-lg rounded-lg bg-[#e8d2d2] overflow-hidden">
      <div
        className="h-3/5 bg-cover bg-center"
        style={{ backgroundImage: `url(${product?.images[0]?.secure_url})` }}
      ></div>
      <div className="p-4">
        <h2 className="text-lg text-gray-600 font-semibold">{product.name}</h2>
        <p className="text-black text-sm mt-1">{product.details}</p>
        <Link href={`/product/${product._id}`}>
          <button className="mt-4 w-full bg-[#9a6363b5] text-white px-4 py-2 rounded-md hover:bg-blue-700">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
