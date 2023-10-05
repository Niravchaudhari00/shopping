import { useSelector } from "react-redux";
import { rootState } from "../redux/store";
import { Link } from "react-router-dom";
import AddToCart from "./AddToCart";

const CartItem = () => {
  const cartItem = useSelector((state: rootState) => state.cart);
  return (
    <div className="w-11/12 mx-auto my-10">
      {cartItem.map((item) => (
        <div
          key={item.id}
          className="mt-5 gap-1 flex flex-col lg:flex-row border border-gray-200 shadow-sm p-2 rounded-md"
        >
          <img
            src={item.image}
            className="w-[250px] h-[250px] object-cover aspect-square"
            alt="product image"
          />

          <div className="lg:px-5 flex flex-col justify-around">
            <Link to={`/product-details/${item.id}`}>
              <h1 className="text-xl hover:text-[#4ee09a] transition-all duration-300">
                {item.productTitle}
              </h1>
            </Link>
            <div className="w-3/4">
              <p>{item.productDesc}</p>
            </div>

            <p className="mt-14 font-bold">${item.price}</p>
            <div className="">
              <AddToCart productId={item.id} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartItem;
