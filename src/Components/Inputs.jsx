const Inputs = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-6/12 flex items-center justify-evenly font-semibold mr-32">
        <p className="text-customBlue">From:</p>
        <p>Türkçe</p>
        <p>İngilizce</p>
        <p>Çince</p>
        <p>Arapça</p>
      </div>
      <div className="w-7/12 h-20 flex items-center bg-white rounded-full mt-4 mb-4">
        <input type="text" className="w-full h-full rounded-full" />
      </div>
      <div className="w-6/12 flex items-center justify-evenly font-semibold ml-32">
        <p className="text-customBlue">To:</p>
        <p>İngilizce</p>
        <p>Türkçe</p>
        <p>Çince</p>
        <p>Arapça</p>
      </div>
    </div>
  );
};

export default Inputs;
