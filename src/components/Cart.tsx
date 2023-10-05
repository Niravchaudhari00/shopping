import { Link } from "react-router-dom";
import { productDetails } from "../data";
import AddToCart from "./AddToCart";
const Cart = ({ productItems }: { productItems: productDetails[] }) => {
  return (
    <>
      <div className="flex flex-wrap gap-5 gap-x-16 justify-center p-5">
        {productItems.map((product) => (
          <div
            key={product.id}
            className="border border-gray-400 flex w-full flex-col sm:flex-row shadow-sm rounded-lg md:w-[500px]"
          >
            <Link
              to={`product-details/${product.id}`}
              className="w-full flex justify-center"
            >
              <img
                src={product.image}
                alt="product img"
                className="rounded-t-lg md:rounded-t-none md:m-0 rounded-l-none lg:rounded-l-lg  min-w-[200px] md:w-[200px] h-[300px] aspect-square object-cover"
              />
            </Link>
            <div className="m-5 gap-2 flex flex-col justify-between">
              <Link to={`product-details/${product.id}`}>
                <h1 className="text-xl font-semibold hover:text-[#4ee09a] cursor-pointer transition-all duration-300">
                  {product.productTitle}
                </h1>
              </Link>
              <p className="text-gray-500">{product.productDesc}</p>
              <p className="font-semibold">${product.price}</p>
              <AddToCart productId={product.id} />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Cart;
