import bg from "../Assets/bg2.png";

const Image = () => {
  return (
    <div className="w-full md:w-full lg:w-6/12 h-1/2 md:h-full flex flex-col items-center justify-center md:justify-evenly lg:justify-center">
      <div className="w-5/12 sm:w-4/12 md:w-5/12 lg:w-5/12 flex flex-wrap text-center justify-evenly items-center capitalize font-bold sm:text-xl md:text-2xl lg:text-3xl text-white mt-6 md:mt-2">
        <p className="animate-wordColorChange1">Get</p>
        <p className="animate-wordColorChange2">a</p>
        <p className="animate-wordColorChange3">Quick,</p>
        <p className="animate-wordColorChange4">Free</p>
        <p className="animate-wordColorChange5">Translation</p>
      </div>
      <img
        src={bg}
        alt="Background"
        className="h-2/5 md:h-2/5 lg:h-3/5 object-cover md:mb-20 lg:mb-0"
      />
    </div>
  );
};

export default Image;
