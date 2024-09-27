import bg from "../Assets/bg2.png";

const ShowError = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <p className="w-5/12 sm:w-4/12 md:w-5/12 lg:w-5/12 text-center sm:text-xl md:text-2xl lg:text-3xl text-customYellow font-bold">
        The daily request limit has been reached. See you tomorrow.
      </p>
      <img
        src={bg}
        alt="Background"
        className="w-10/12 sm:w-8/12 md:w-7/12 lg:w-6/12 object-cover"
      />
    </div>
  );
};

export default ShowError;
