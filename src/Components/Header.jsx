import logo from "../Assets/logo3.svg";
const Header = () => {
  return (
    <div className="w-11/12 lg:w-10/12 h-16 text-white flex items-center justify-start border-b-[1px] border-customBlue">
      <p className="sm:text-xl md:text-2xl lg:text-3xl font-bold ">
        PolyTranslate
      </p>
      <img
        src={logo}
        alt=""
        className="sm:w-[28px] md:w-[36px] lg:w-[44px] sm:h-[28px] md:h-[36px] lg:h-[44px] object-cover"
      />
    </div>
  );
};

export default Header;
