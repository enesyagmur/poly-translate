import "./App.css";
import Header from "./Components/Header";
import Image from "./Components/Image";
import Translate from "./Components/Translate";

function App() {
  return (
    <div className="w-full h-screen bg-customGray flex flex-col overflow-hidden items-center">
      <Header />
      <div className="w-10/12 h-[96%] flex">
        <Translate />
        <Image />
      </div>
    </div>
  );
}

export default App;
