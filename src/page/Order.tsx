import CartItem from "../components/CartItem";
const Order = () => {
  return (
    <div>
      <div className="w-full flex justify-between items-center px-3 py-4 border border-gray-300">
        <h1 className="text-gray-700 font-semibold text-xl">Your Order</h1>
      </div>
      <CartItem />
      <div className="w-11/12 mx-auto my-5 ">
        <div className="border border-1 py-5 px-2">
          <div className="my-1">
            <h1 className="text-lg font-semibold">Payment Information</h1>
            <p className="text-gray-700">SauceCard #31337</p>
          </div>

          <div className="my-1">
            <h1 className="text-lg font-semibold">Shipping Information</h1>
            <p className="text-gray-700">SauceCard #31337</p>
          </div>

          <div className="my-1 flex justify-between">
            <div>
              <h1 className="text-lg font-semibold">Price Total</h1>
              <p className="text-gray-700">Item total: $129.94</p>
              <p className="text-gray-700">Tax: $10.40</p>
              <p className="text-gray-700">Total: $140.34</p>
            </div>
            <button className="p-2 bg-[#4ee09a] rounded-md px-3 self-end m-2">
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
