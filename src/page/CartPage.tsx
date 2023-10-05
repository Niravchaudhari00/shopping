import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";
import { rootState } from "../redux/store";
import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";

const CartPage = () => {
  const cartItem = useSelector((state: rootState) => state.cart);
  return (
    <>
      {cartItem.length === 0 ? (
        <div className="w-full h-[calc(100vh-10rem)] flex justify-center items-center">
          <h1 className="text-3xl font-bold">Cart is Empty</h1>
        </div>
      ) : (
        <>
          <div className="w-full flex justify-between items-center px-3 py-4 border border-gray-300">
            <h1 className="text-gray-700 font-semibold text-xl">Your Cart</h1>
          </div>
          <CartItem />
          <div className="w-11/12 mx-auto my-10">
            <div className="flex justify-between my-5 px-2">
              <Link
                to={"/"}
                className="p-2 px-3 border rounded-md flex justify-center items-center gap-2"
              >
                <BiArrowBack />
                <span> Continue Shoping</span>
              </Link>
              <Link
                to={"/check-out"}
                className="p-2 px-3 border bg-[#4ee09a] rounded-md"
              >
                Check Out
              </Link>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default CartPage;
