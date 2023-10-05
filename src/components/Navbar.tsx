import { GiHamburgerMenu } from "react-icons/gi";
import { FaCartShopping } from "react-icons/fa6";
import { useState } from "react";
import SideBar from "./SideBar";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { rootState } from "../redux/store";

const Navbar = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  const cartItem = useSelector((state: rootState) => state.cart);
  const handleToggle = (x: boolean) => {
    setToggle(x);
  };

  return (
    <>
      {toggle && <SideBar setToggle={handleToggle} />}
      <nav className="border border-gray-200 shadow-sm flex items-center px-5 py-4 justify-between">
        <button
          onClick={() => handleToggle(true)}
          className="text-2xl hover:text-[#4ee09a] transition-all duration-500 cursor-pointer"
        >
          <GiHamburgerMenu />
        </button>
        <h1 className="text-lg font-semibold">Swag Labs</h1>

        <Link to={"/cart"} className="relative">
          <FaCartShopping className="text-2xl cursor-pointer " />
          {cartItem.length !== 0 && (
            <div className="w-[18px] h-[18px] absolute rounded-full bg-red-500 flex justify-center items-center -top-[7px] -right-[10px]">
              <span className="text-white">{cartItem.length}</span>
            </div>
          )}
        </Link>
      </nav>
    </>
  );
};

export default Navbar;
