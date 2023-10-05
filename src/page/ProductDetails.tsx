import { Link, useLocation } from "react-router-dom";
import productData from "../data";
import { BiArrowBack } from "react-icons/bi";
import AddToCart from "../components/AddToCart";
const ProductDetails = () => {
  const { pathname } = useLocation();
  const id = Number(pathname.split("/")[2]);
  const selectedProduct = productData.filter((proid) => proid.id == id);

  return (
    <>
      <div className="w-full flex justify-between items-center px-3 py-4 border border-gray-300">
        <Link to={`/`} className="">
          <p className="hover:text-blue-500 text-lg font-semibold flex justify-center items-center gap-x-2">
            <span>
              <BiArrowBack />
            </span>
            Go Back
          </p>
        </Link>
      </div>
      <div className="w-2/4 my-10 border border-gray-200 shadow-lg rounded-lg m-auto">
        {selectedProduct.map((product) => (
          <div key={product.id} className="flex flex-col lg:flex-row gap-10">
            <img
              src={product.image}
              className="h-[500px] lg:w-[300px] aspect-square object-cover  lg:rounded-l-lg"
              alt="product image"
            />
            <div className="mb-10 lg:my-10 space-y-5 px-5">
              <h1 className="text-2xl font-semibold">{product.productTitle}</h1>
              <p>{product.productDesc}</p>
              <p>${product.price}</p>

              <AddToCart productId={product.id} />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductDetails;
