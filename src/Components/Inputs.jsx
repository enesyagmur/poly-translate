import { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import { IoCopyOutline } from "react-icons/io5";

import converterFunc from "../Api/converter";

const Inputs = () => {
  const [inputText, setInputText] = useState("");
  const [sourceLang, setSourceLang] = useState("");
  const [targetLang, setTargetLang] = useState("");
  const [result, setResult] = useState("");

  const getTranslatedText = async () => {
    try {
      if (inputText !== "" && sourceLang !== "" && targetLang !== "") {
        const response = await converterFunc(inputText, sourceLang, targetLang);
        setResult(response);
      } else {
        console.log("Kaynak dili ve Hedef dili seçmek zorunlu");
      }
    } catch (error) {
      console.error("Error in inputs:", error);
    }
  };

  const copyFunc = async () => {
    if (result) {
      await navigator.clipboard.writeText(result);
    }
  };

  useEffect(() => {
    getTranslatedText(inputText);
  }, [targetLang]);

  useEffect(() => {
    getTranslatedText(inputText);
  }, [inputText]);

  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-6/12 flex items-center justify-evenly font-semibold mr-32">
        <p className={`${sourceLang ? `text-white` : "text-customYellow"}`}>
          From:
        </p>
        <p
          className={`cursor-pointer ${
            sourceLang === `tr` ? `text-customYellow` : `text-white`
          }`}
          onClick={() => {
            setSourceLang("tr");
            setInputText("");
          }}
        >
          Turkish
        </p>
        <p
          className={`cursor-pointer ${
            sourceLang === `en` ? `text-customYellow` : `text-white`
          }`}
          onClick={() => {
            setSourceLang("en");
            setInputText("");
          }}
        >
          English
        </p>
        <p
          className={`cursor-pointer ${
            sourceLang === `zh-CH` ? `text-customYellow` : `text-white`
          }`}
          onClick={() => setSourceLang("zh-CH")}
        >
          Chinese
        </p>
        <p
          className={`cursor-pointer ${
            sourceLang === `ar` ? `text-customYellow` : `text-white`
          }`}
          onClick={() => setSourceLang("ar")}
        >
          Arabic
        </p>
      </div>
      <div className="w-7/12  flex items-center rounded-full mt-4 mb-4 relative">
        <textarea
          className="w-full p-4 pr-10 rounded-md resize-y focus:outline-none focus:ring-2 text-2xl focus:customBlue text-black "
          rows={7}
          onChange={(e) => setInputText(e.target.value)}
          value={inputText}
        />
        {inputText ? (
          <IoClose
            className="absolute text-gray-500 top-4 right-3 text-3xl cursor-pointer hover:text-red-400"
            onClick={() => {
              setInputText("");
            }}
          />
        ) : null}
      </div>
      <div className="w-6/12 flex items-center justify-evenly font-semibold ml-32 mt-4">
        <p
          className={`cursor-pointer ${
            targetLang ? `text-white` : `text-customYellow`
          }`}
        >
          To:
        </p>
        <p
          className={`cursor-pointer ${
            targetLang === `en` ? `text-customYellow` : `text-white`
          }`}
          onClick={() => setTargetLang("en")}
        >
          English
        </p>
        <p
          className={`cursor-pointer ${
            targetLang === `tr` ? `text-customYellow` : `text-white`
          }`}
          onClick={() => setTargetLang("tr")}
        >
          Turkish
        </p>
        <p
          className={`cursor-pointer ${
            targetLang === `zh-CN` ? `text-customYellow` : `text-white`
          }`}
          onClick={() => setTargetLang("zh-CN")}
        >
          Chinese
        </p>
        <p
          className={`cursor-pointer ${
            targetLang === `ar` ? `text-customYellow` : `text-white`
          }`}
          onClick={() => setTargetLang("ar")}
        >
          Arabic
        </p>
      </div>
      <div className="w-7/12  flex items-center rounded-full mt-4 mb-4 relative">
        {result ? (
          <textarea
            className="w-full p-4 pr-10 rounded-md resize-y focus:outline-none focus:ring-2 text-2xl focus:customBlue text-black "
            rows={7}
            value={result}
          />
        ) : (
          <textarea
            className="w-full p-4 pr-10 rounded-md resize-y focus:outline-none focus:ring-2 text-2xl focus:customBlue text-black "
            rows={7}
          />
        )}

        {result ? (
          <IoCopyOutline
            className="absolute text-gray-500 bottom-4 right-3 text-2xl cursor-pointer hover:text-customBlue"
            onClick={copyFunc}
          />
        ) : null}
      </div>
    </div>
  );
};

export default Inputs;
// belki translate animasyonu
// hata gösterimi
//notFound sayfası
// responsive tasarım
