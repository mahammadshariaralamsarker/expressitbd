import { IProduct } from "@/types";
import Link from "next/link";



const ProductCard = ({ product }: { product: IProduct }) => {
  return (
    <div className="border h-[450px] w-72 shadow-lg rounded-lg bg-[#e8d2d2] overflow-hidden">
      {/* Image Section */}
      <div
        className="h-full bg-cover bg-center relative"
        style={{
          backgroundImage: `url(${product?.images?.[0]?.secure_url})`,
        }}
      >
        <div className="absolute flex justify-between bottom-0 w-full bg-black bg-opacity-30 rounded-lg text-white p-3">
          <h2 className="text-lg font-semibold px-2 flex items-center opacity-90 overflow-hidden whitespace-nowrap text-ellipsis">
            {product.name}
          </h2>
          <Link href={`/product/${product._id}`}>
            <button className="w-auto bg-[#b46565dd] text-[#fdfdfdfa] px-4 py-2 rounded-md hover:bg-[#ff6767] transition-all duration-300">
              View Details
            </button>
          </Link>
        </div>
      </div>

      {/* Details Section */}
      <div className="p-4 h-2/5 flex flex-col justify-between">
        <p className="text-black text-sm line-clamp-3">{product.description}</p>
      </div>
    </div>
  );
};

export default ProductCard;
