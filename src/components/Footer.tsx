import { BsTwitter } from "react-icons/bs";
import { CgFacebook } from "react-icons/cg";
import { AiFillLinkedin } from "react-icons/ai";

const Footer = () => {
  return (
    <>
      <footer className="bg-[#132322] flex flex-col justify-center gap-y-5 w-full h-52 px-3">
        <div className="flex justify-center md:justify-start gap-x-2">
          <div className="flex items-center justify-center bg-[#4ee09a] rounded-full h-[50px] w-[50px] text-xl">
            <BsTwitter />
          </div>
          <div className="flex items-center justify-center bg-[#4ee09a] rounded-full h-[50px] w-[50px] text-xl">
            <CgFacebook />
          </div>
          <div className="flex items-center justify-center bg-[#4ee09a] rounded-full h-[50px] w-[50px] text-xl">
            <AiFillLinkedin />
          </div>
        </div>
        <p className="text-white text-center md:text-start">
          © 2023 Sauce Labs. All Rights Reserved. Terms of Service | Privacy
          Policy
        </p>
      </footer>
    </>
  );
};

export default Footer;
