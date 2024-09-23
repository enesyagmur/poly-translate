import { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import { IoCopyOutline } from "react-icons/io5";
import { BiTransferAlt } from "react-icons/bi";
import { CiCircleAlert } from "react-icons/ci";
import converterFunc from "../Api/converter";

const Inputs = () => {
  const [inputText, setInputText] = useState("");
  const [sourceLang, setSourceLang] = useState("");
  const [targetLang, setTargetLang] = useState("");
  const [result, setResult] = useState("");
  const [checkCopyState, setCheckCopyState] = useState(false);
  const [checkDeleteState, setCheckDeleteState] = useState(false);
  const [checkLangFill, setCheckLangFill] = useState(false);
  const [copyText, setCopyText] = useState("Copy The Text");

  const getTranslatedText = async (input) => {
    setCopyText("Copy The Text");
    try {
      if (sourceLang !== "" && targetLang !== "") {
        if (input) {
          const response = await converterFunc(input, sourceLang, targetLang);
          setTimeout(() => {
            setResult(response);
          }, 1000);
        } else {
          console.error("Text girmek zorunludur");
        }
      } else {
        console.error("Kaynak ve Hedef dili seçmek zorunludur");
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
    setSourceLang(copyTargetLang);
    setTargetLang(copySourceLang);
    if (result) {
      setInputText(result);
    }
  };

  return (
    <div className="w-11/12 md:w-6/12 lg:w-6/12 h-full flex justify-end md:justify-start items-center relative">
      <div className="w-11/12 md:w-10/12 lg:w-8/12 flex flex-col justify-center ml-12">
        <div className="w-full flex items-center justify-evenly font-semibold mr-32">
          <p
            className={`text-xs md:text-sm lg:text-base ${
              sourceLang ? `text-white` : "text-customYellow"
            }`}
          >
            From:
          </p>
          <p
            className={`cursor-pointer text-xs md:text-sm lg:text-base  ${
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
            className={`cursor-pointer text-xs md:text-sm lg:text-base ${
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
            className={`cursor-pointer text-xs md:text-sm lg:text-base ${
              sourceLang === `zh-CN` ? `text-customYellow` : `text-white`
            }`}
            onClick={() => setSourceLang("zh-CN")}
          >
            Chinese
          </p>
          <p
            className={`cursor-pointer text-xs md:text-sm lg:text-base ${
              sourceLang === `ar` ? `text-customYellow` : `text-white`
            }`}
            onClick={() => setSourceLang("ar")}
          >
            Arabic
          </p>
        </div>
        <div className="w-full flex items-center rounded-full mt-4 mb-4 relative">
          <textarea
            className="w-full p-4 pr-10 rounded-md resize-none focus:outline-none focus:ring-2 text-2xl focus:customBlue text-black "
            rows={5}
            onChange={(e) => {
              setInputText(e.target.value);
              getTranslatedText(e.target.value);
            }}
            placeholder="Source Text"
            value={inputText}
          />

          {inputText & targetLang & sourceLang ? (
            <IoClose
              className="absolute text-gray-500 top-4 right-3 text-2xl cursor-pointer hover:text-red-400"
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

          {(inputText !== "") & (sourceLang === "" || targetLang === "") ? (
            <CiCircleAlert
              className="absolute text-gray-500 top-4 right-3 text-2xl cursor-pointer hover:text-orange-400"
              onMouseOver={() => setCheckLangFill(true)}
              onMouseOut={() => setCheckLangFill(false)}
            />
          ) : null}

          {checkLangFill ? (
            <div className="w-24 h-20 bg-customGray absolute top-11 right-4 flex items-center justify-center rounded-md">
              <p className="text-white text-center">
                You Have To Select Language
              </p>
            </div>
          ) : null}
        </div>
        <div className="w-full flex items-center justify-evenly font-semibold  mt-4">
          <p
            className={`text-xs md:text-sm lg:text-base  ${
              targetLang ? `text-white` : `text-customYellow`
            }`}
          >
            To:
          </p>
          <p
            className={`cursor-pointer text-xs md:text-sm lg:text-base ${
              targetLang === `en` ? `text-customYellow` : `text-white`
            }`}
            onClick={() => setTargetLang("en")}
          >
            English
          </p>
          <p
            className={`cursor-pointer text-xs md:text-sm lg:text-base ${
              targetLang === `tr` ? `text-customYellow` : `text-white`
            }`}
            onClick={() => setTargetLang("tr")}
          >
            Turkish
          </p>
          <p
            className={`cursor-pointer text-xs md:text-sm lg:text-base ${
              targetLang === `zh-CN` ? `text-customYellow` : `text-white`
            }`}
            onClick={() => setTargetLang("zh-CN")}
          >
            Chinese
          </p>
          <p
            className={`cursor-pointer text-xs md:text-sm lg:text-base ${
              targetLang === `ar` ? `text-customYellow` : `text-white`
            }`}
            onClick={() => setTargetLang("ar")}
          >
            Arabic
          </p>
        </div>
        <div className="w-full flex items-center rounded-full mt-4 mb-4 relative">
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
      {(sourceLang !== "") & (targetLang !== "") ? (
        <div
          className="w-[40px] h-[40px] right-[-50px] md:right-0 flex items-center justify-center cursor-pointer rounded-full absolute md:relative  bg-neutral-700 hover:bg-neutral-600 mt-4 ml-4"
          onClick={reverseLang}
        >
          <BiTransferAlt className="text-2xl" />
        </div>
      ) : null}
    </div>
  );
};

export default Inputs;
