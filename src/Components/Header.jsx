import logo from "../Assets/logo3.svg";
const Header = () => {
  return (
    <div className="w-10/12 h-16 text-white flex items-center justify-start border-b-[1px] border-customBlue">
      <p className="text-[32px] font-bold ">PolyTranslate</p>
      <img src={logo} alt="" className="w-[44px] h-[44px] object-cover" />
    </div>
  );
};

export default Header;
