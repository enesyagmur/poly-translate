import { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import { IoCopyOutline } from "react-icons/io5";
import { BiTransferAlt } from "react-icons/bi";

import converterFunc from "../Api/converter";

const Inputs = () => {
  const [inputText, setInputText] = useState("");
  const [sourceLang, setSourceLang] = useState("");
  const [targetLang, setTargetLang] = useState("");
  const [result, setResult] = useState("");
  const [checkCopyState, setCheckCopyState] = useState(false);
  const [checkDeleteState, setCheckDeleteState] = useState(false);

  const [copyText, setCopyText] = useState("Copy The Text");

  const getTranslatedText = async () => {
    setCopyText("Copy The Text");
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
    setCopyText("Copied");
    if (result) {
      await navigator.clipboard.writeText(result);
    }
  };

  useEffect(() => {
    getTranslatedText(inputText);
  }, [targetLang]);

  const reverseLang = () => {
    const copySourceLang = sourceLang;
    const copyTargetLang = targetLang;
    setInputText(result);
    setSourceLang(copyTargetLang);
    setTargetLang(copySourceLang);
  };

  return (
    <div className="w-full flex items-center justify-start">
      <div className="w-8/12 flex flex-col justify-center">
        <div className="w-full flex items-center justify-evenly font-semibold mr-32">
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
        <div className="w-full  flex items-center rounded-full mt-4 mb-4 relative">
          <textarea
            className="w-full p-4 pr-10 rounded-md resize-none focus:outline-none focus:ring-2 text-2xl focus:customBlue text-black "
            rows={5}
            onChange={(e) => {
              setInputText(e.target.value);
              getTranslatedText(e.target.value);
            }}
            value={inputText}
          />
          {inputText ? (
            <IoClose
              className="absolute text-gray-500 top-4 right-3 text-3xl cursor-pointer hover:text-red-400"
              onClick={() => {
                setInputText("");
                setCheckDeleteState(false);
              }}
              onMouseOver={() => setCheckDeleteState(true)}
              onMouseOut={() => setCheckDeleteState(false)}
            />
          ) : null}

          {checkDeleteState ? (
            <div className="w-24 h-16 bg-customGray absolute top-11 right-4 flex items-center justify-center rounded-md">
              <p className="text-white text-center">Delete The Text</p>
            </div>
          ) : null}
        </div>
        <div className="w-full flex items-center justify-evenly font-semibold  mt-4">
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
        <div className="w-full  flex items-center rounded-full mt-4 mb-4 relative">
          {result !== "" ? (
            <textarea
              className="w-full p-4 pr-10 rounded-md resize-none focus:outline-none focus:ring-2 text-2xl focus:customBlue text-black "
              rows={5}
              value={result}
            />
          ) : (
            <textarea
              className="w-full p-4 pr-10 rounded-md resize-none focus:outline-none focus:ring-2 text-2xl focus:customBlue text-black "
              rows={5}
            />
          )}

          {checkCopyState ? (
            <div className="w-24 h-16 bg-customGray absolute bottom-11 right-4 flex items-center justify-center rounded-md">
              <p className="text-white text-center">{copyText}</p>
            </div>
          ) : null}

          {result ? (
            <IoCopyOutline
              className="absolute text-gray-500 bottom-4 right-3 text-2xl cursor-pointer hover:text-customBlue"
              onClick={copyFunc}
              onMouseOver={() => setCheckCopyState(true)}
              onMouseOut={() => setCheckCopyState(false)}
            />
          ) : null}
        </div>
      </div>
      {(sourceLang !== "") & (targetLang !== "") & (inputText !== "") ? (
        <div
          className="w-[40px] h-[40px] flex items-center justify-center cursor-pointer rounded-full bg-neutral-700 hover:bg-neutral-600 mt-4 ml-4"
          onClick={reverseLang}
        >
          <BiTransferAlt className="text-2xl" />
        </div>
      ) : null}
    </div>
  );
};

export default Inputs;
// belki translate animasyonu
// hata gösterimi
//notFound sayfası
// responsive tasarım
