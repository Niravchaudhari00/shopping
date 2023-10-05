import { useForm, SubmitHandler } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

const CheckOutPage = () => {
  interface ShippingDetails {
    username: string;
    address: string;
    zip_code: number;
  }
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ShippingDetails>();

  const navigate = useNavigate();
  const onSubmit: SubmitHandler<ShippingDetails> = (data) => {
    console.log(data);
    navigate("/order");
  };
  return (
    <div>
      <div className="w-full flex justify-between items-center px-3 py-4 border border-gray-300">
        <h1 className="text-gray-700 font-semibold text-xl">
          Check Out : Your Information
        </h1>
      </div>
      <div className="sm:h-[400px] my-10 shadow-lg rounded-lg sm:w-[500px] border border-gray-300 mx-auto">
        <form onSubmit={handleSubmit(onSubmit)} className="text-black  p-5">
          <header className="text-xl font-semibold capitalize text-center mt-5 text-gray-800 ">
            Shipping Address
          </header>
          <div className="m-10 px-5 space-y-5">
            <div className="flex flex-col gap-1 my-1">
              <input
                type="text"
                {...register("username", { required: true })}
                placeholder="Enter your name"
                className="border-b border-b-gray-300 outline-none p-1 placeholder:text-gray-500"
              />
              {errors.username && (
                <span className="text-red-500">Please enter your name</span>
              )}
            </div>

            <div className="flex flex-col gap-1 my-1">
              <input
                type="text"
                {...register("address", { required: true })}
                placeholder="Enter your shipping address"
                className="border-b border-b-gray-300 outline-none p-1 placeholder:text-gray-500"
              />

              {errors.address && (
                <span className="text-red-500">Please enter your address</span>
              )}
            </div>

            <div className="flex flex-col gap-1 my-1">
              <input
                type="text"
                {...register("zip_code", { required: true })}
                placeholder="Enter your Zip code"
                className="border-b border-b-gray-300 outline-none p-1 placeholder:text-gray-500"
              />

              {errors.zip_code && (
                <span className="text-red-500">Please enter your zip code</span>
              )}
            </div>

            <div className="flex justify-between">
              <Link
                to={"/"}
                className="py-1 px-4 border border-gray-800 rounded-md"
              >
                Cancel
              </Link>
              <button
                type="submit"
                className="py-1 px-4 bg-[#4ee09a] text-black rounded-md"
              >
                Continue
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default CheckOutPage;
