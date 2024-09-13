import "./App.css";
import Header from "./Components/Header";
import Image from "./Components/Image";
import Translate from "./Components/Translate";

function App() {
  return (
    <div className="w-full h-screen bg-customGray flex flex-col overflow-hidden">
      <Header />
      <div className="w-full h-[96%] flex">
        <Translate />
        <Image />
      </div>
    </div>
  );
}

export default App;
