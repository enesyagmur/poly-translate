import bg from "../Assets/bg2.png";

const Image = () => {
  return (
    <div className="w-1/2 h-full flex flex-col items-center justify-evenly">
      <p className="w-7/12 capitilize font-bold text-[44px] text-white ">
        Get a Quickly, Free Translation
      </p>
      <img src={bg} alt="" className="w-full h-1/2 object-cover" />
    </div>
  );
};

export default Image;
