import { useState } from "react";
import { GrSend } from "react-icons/gr";
import converterFunc from "../Api/converter";

const Inputs = () => {
  const [inputText, setInputText] = useState("");
  const [sourceLang, setSourceLang] = useState();
  const [targetLang, setTargetLang] = useState();
  const [result, setResult] = useState("");

  const getTranslatedText = async () => {
    try {
      const response = await converterFunc(inputText, sourceLang, targetLang);
      console.log(response);
      setResult(response);
      setInputText("");
    } catch (error) {
      console.error("Error in inputs:", error);
    }
  };

  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-6/12 flex items-center justify-evenly font-semibold mr-32">
        <p
          className={`${sourceLang ? `text-white` : "text-customYellow"}`}
          onClick={() => setSourceLang("")}
        >
          From:
        </p>
        <p
          className={`cursor-pointer ${
            sourceLang === `tr` ? `text-customYellow` : `text-white`
          }`}
          onClick={() => setSourceLang("tr")}
        >
          Türkçe
        </p>
        <p
          className={`cursor-pointer ${
            sourceLang === `en` ? `text-customYellow` : `text-white`
          }`}
          onClick={() => setSourceLang("en")}
        >
          İngilizce
        </p>
        <p className="cursor-pointer" onClick={() => setSourceLang("zh-CH")}>
          Çince
        </p>
        <p className="cursor-pointer" onClick={() => setSourceLang("ar")}>
          Arapça
        </p>
      </div>
      <div className="w-7/12 h-20 flex items-center bg-white rounded-full mt-4 mb-4 relative">
        <input
          type="text"
          className="w-full h-full rounded-full pl-4 text-black"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <div
          className="w-[80px] h-[80px] absolute bg-customBlue right-[-1px] rounded-full flex items-center justify-center "
          onClick={getTranslatedText}
        >
          <GrSend className="text-2xl" />
        </div>
      </div>
      <div className="w-6/12 flex items-center justify-evenly font-semibold ml-32">
        <p className="text-customYellow">To:</p>
        <p className="cursor-pointer" onClick={() => setTargetLang("EN")}>
          İngilizce
        </p>
        <p className="cursor-pointer" onClick={() => setTargetLang("TR")}>
          Türkçe
        </p>
        <p className="cursor-pointer" onClick={() => setTargetLang("zh-CN")}>
          Çince
        </p>
        <p className="cursor-pointer" onClick={() => setTargetLang("ar")}>
          Arapça
        </p>
      </div>

      {result ? (
        <p className="w-7/12 p-6 bg-white text-black text-xl rounded-full">
          {result}
        </p>
      ) : null}
    </div>
  );
};

export default Inputs;
