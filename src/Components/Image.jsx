import bg from "../Assets/bg2.png";

const Image = () => {
  return (
    <div className="md:w-7/12 lg:w-6/12 h-full flex flex-col items-center justify-center">
      <p className="w-7/12 capitilize font-bold sm:text-xl md:text-2xl lg:text-3xl text-white text-center mt-2">
        Get a Quickly, Free Translation
      </p>
      <img src={bg} alt="" className="w-full h-3/5 object-cover lg:mt-4" />
    </div>
  );
};

export default Image;
