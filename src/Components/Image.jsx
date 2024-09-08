import bg from "../Assets/bg2.png";

const Image = () => {
  return (
    <div className="w-1/2 h-full flex items-center justify-center">
      <img src={bg} alt="" className="w-full h-1/2 object-cover" />
    </div>
  );
};

export default Image;
