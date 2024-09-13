import logo from "../Assets/logo3.svg";
const Header = () => {
  return (
    <div className="w-full h-16 text-white flex items-center ">
      <p className="text-[44px] font-bold ml-48">PolyTranslate</p>
      <img src={logo} alt="" className="w-[50px] h-[50px] object-cover" />
    </div>
  );
};

export default Header;
