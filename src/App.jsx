import "./App.css";
import Header from "./Components/Header";
import Image from "./Components/Image";
import Inputs from "./Components/Inputs";

function App() {
  return (
    <div className="w-full mih-h-screen md:h-screen bg-customGray flex flex-col overflow-hidden items-center">
      <Header />
      <div className="w-10/12 md:w-full lg:w-10/12 h-[96%] flex flex-col-reverse md:flex-row relative">
        <Inputs />
        <Image />
      </div>
    </div>
  );
}

export default App;
