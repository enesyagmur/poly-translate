import { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import Image from "./Components/Image";
import Inputs from "./Components/Inputs";
import ShowError from "./Components/ShowError";

function App() {
  const [checkError, setCheckError] = useState("");
  return (
    <div className="w-full min-h-screen bg-customGray flex flex-col items-center overflow-hidden">
      <Header />
      <div className="flex-grow flex items-center justify-center">
        {checkError ? (
          <ShowError />
        ) : (
          <div className="w-10/12 lg:w-10/12 h-full flex flex-col-reverse md:flex-row relative">
            <Inputs setCheckError={setCheckError} />
            <Image />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;

// proje deploy
