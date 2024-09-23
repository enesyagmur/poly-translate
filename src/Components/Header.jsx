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
        className="w-[20px] sm:w-[28px] md:w-[36px] lg:w-[44px] h-[20px] sm:h-[28px] md:h-[36px] lg:h-[44px] object-cover ml-2"
      />
    </div>
  );
};

export default Header;
