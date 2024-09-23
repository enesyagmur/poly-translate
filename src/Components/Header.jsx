import logo from "../Assets/head.png";
const Header = () => {
  return (
    <div className="w-11/12 lg:w-10/12 h-16 text-white flex items-center justify-start border-b-[1px] border-customBlue">
      <p className="sm:text-xl md:text-2xl lg:text-3xl font-bold">
        PolyTranslate
      </p>
      <img
        src={logo}
        alt=""
        className="w-[16px] sm:w-[20px] md:w-[24px] lg:w-[28px] h-[16px] sm:h-[20px] md:h-[24px] lg:h-[28px] object-cover ml-2 md:mt-2"
      />
    </div>
  );
};

export default Header;
