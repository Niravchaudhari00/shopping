import { useDispatch, useSelector } from "react-redux";
import { rootState } from "../redux/store";
import productData from "../data";
import { addToCart, removeFromCart } from "../redux/cartSlice";
import toast from "react-hot-toast";

const AddToCart = ({ productId }: { productId: number }) => {
  const dispatch = useDispatch();
  const cartItem = useSelector((state: rootState) => state.cart);

  const addToCartHandle = (id: number) => {
    const product = productData.filter((item) => item.id === id)[0];
    dispatch(addToCart(product));
    toast.success("Add To Cart");
  };

  const removeFromCartHandle = (id: number) => {
    dispatch(removeFromCart(id));
    toast.error("Remove From Cart");
  };
  return (
    <>
      {cartItem.some((x) => x.id === productId) ? (
        <button
          onClick={() => removeFromCartHandle(productId)}
          className="bg-white border border-red-500 text-red-500 p-1 px-3 rounded-xl capitalize font-semibold"
        >
          Remove
        </button>
      ) : (
        <button
          onClick={() => addToCartHandle(productId)}
          className="bg-white border border-[#4ee09a] text-[#4ee09a] p-1  px-3 rounded-xl capitalize font-semibold"
        >
          add to cart
        </button>
      )}
    </>
  );
};

export default AddToCart;
