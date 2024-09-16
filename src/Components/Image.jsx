import bg from "../Assets/bg2.png";

const Image = () => {
  return (
    <div className="w-1/2 h-full flex flex-col items-center justify-center">
      <p className="w-7/12 capitilize font-bold text-[32px] text-white text-center mt-2">
        Get a Quickly, Free Translation
      </p>
      <img src={bg} alt="" className="w-full h-3/5 object-cover mt-4" />
    </div>
  );
};

export default Image;
