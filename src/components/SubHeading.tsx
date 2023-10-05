import { HiFilter } from "react-icons/hi";
interface HeadingType {
  text: string;
  filterList?: string[];
}
const SubHeading = (props: HeadingType) => {
  return (
    <div className="w-full flex justify-between items-center px-3 py-4 border border-gray-300">
      <h1 className="text-lg font-semibold">{props.text}</h1>
      <div className="relative">
        <button className="absolute top-4 left-2">
          <HiFilter />
        </button>
        {props?.filterList?.length !== 0 && (
          // useLocation  => pathname => then split by "/", then check the value of 2nd element, if it's length is >0 then hide it or else show it.
          <select
            name="filterSection"
            className="border border-gray-300 p-2 pl-7 rounded-md"
          >
            <option disabled>Filter Product</option>
            {props?.filterList?.map((item, i) => (
              <option key={i} value={i} className="capitalize">
                {item}
              </option>
            ))}
          </select>
        )}
      </div>
    </div>
  );
};

export default SubHeading;
