import { RxCross2 } from "react-icons/rx";

const SideBar = ({ setToggle }: { setToggle: (x: boolean) => void }) => {
  const MenuList: Array<string> = [
    "Menu",
    "About",
    "All Items",
    "Logout",
    "Reset App Store",
  ];

  return (
    <div
      className={`left-0 border w-[250px] h-screen fixed z-[100000] bg-white`}
    >
      <div className="w-full flex justify-end">
        <button
          className="font-semibold text-2xl p-2"
          onClick={() => {
            setToggle(false);
          }}
        >
          <RxCross2 />
        </button>
      </div>

      <div className="w-full px-5 mt-10">
        <ul>
          {MenuList.map((item, i) => (
            <li
              key={i}
              className="p-2 border-b border-b-gray-300 hover:text-[#4ee09a] cursor-pointer transition-all duration-300"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
