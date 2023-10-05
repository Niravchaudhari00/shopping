import Cart from "../components/Cart";
import productData from "../data";
import SubHeading from "../components/SubHeading";
export const arrOfFilterSection: Array<string> = [
  "name (A to Z)",
  "name (Z to A)",
  "price (lower to high)",
  "price (high to lower)",
];

const Home = () => {
  return (
    <>
      {/* Sub Heading */}
      <SubHeading text={"Product"} filterList={arrOfFilterSection} />
      {/* cart */}
      <Cart productItems={productData} />
    </>
  );
};

export default Home;
