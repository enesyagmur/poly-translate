import bg from "../Assets/bg2.png";

const Image = () => {
  return (
    <div className="w-full md:w-full lg:w-6/12 h-1/2 md:h-full flex flex-col items-center justify-center md:justify-evenly lg:justify-center">
      <p className="w-5/12 md:w-7/12  capitilize font-bold sm:text-xl md:text-2xl lg:text-3xl text-white text-center mt-6 md:mt-2">
        Get a Quickly, Free Translation
      </p>
      <img
        src={bg}
        alt=""
        className="h-2/5 md:h-2/5 lg:h-3/5 object-cover md:mb-20 lg:mb-0"
      />
    </div>
  );
};

export default Image;
