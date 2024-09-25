import { useCallback, useEffect, useMemo, useState } from "react";
import { IoClose } from "react-icons/io5";
import { IoCopyOutline } from "react-icons/io5";
import { BiTransferAlt } from "react-icons/bi";
import { CiCircleAlert } from "react-icons/ci";
import converterFunc from "../Api/converter";
import LanguageSelector from "./LanguageSelector";
import debounce from "lodash.debounce";

const Inputs = () => {
  const [inputText, setInputText] = useState("");
  const [sourceLang, setSourceLang] = useState("");
  const [targetLang, setTargetLang] = useState("");
  const [result, setResult] = useState("");
  const [checkCopyState, setCheckCopyState] = useState(false);
  const [checkDeleteState, setCheckDeleteState] = useState(false);
  const [checkLangFill, setCheckLangFill] = useState(false);
  const [copyText, setCopyText] = useState("Copy The Text");
  const [error, setError] = useState(null);

  const showDeleteButton = inputText && targetLang && sourceLang;
  const showLanguageAlert =
    inputText !== "" && (sourceLang === "" || targetLang === "");
  const showCopyButton = result !== "";
  const showChangeLangButton = (sourceLang !== "") & (targetLang !== "");

  const getTranslatedText = useCallback(
    async (input) => {
      setCopyText("Copy The Text");
      setError(null);
      if (input.trim() === "") {
        setResult("");
        return;
      }
      try {
        if (!showChangeLangButton)
          throw new Error("Source and target languages must be selected");
        if (!input) throw new Error("Text input is required");
        const response = await converterFunc(input, sourceLang, targetLang);

        setResult(response);
      } catch (error) {
        console.error("Error in inputs:", error);
        setError(error.message);
      }
    },
    [showChangeLangButton, sourceLang, targetLang]
  );

  const debouncedGetTranslatedText = useMemo(
    () => debounce(getTranslatedText, 500),
    [getTranslatedText]
  );

  const copyFunc = useCallback(async () => {
    setCopyText("Copied");
    if (result) {
      await navigator.clipboard.writeText(result);
    }
  }, [result]);

  const reverseLang = useCallback(() => {
    setSourceLang(targetLang);
    setTargetLang(sourceLang);
    if (result) {
      setInputText(result);
    }
  }, [sourceLang, targetLang, result]);

  const handleSourceLanguageChange = useCallback((code) => {
    setSourceLang(code);
    setInputText("");
  }, []);

  useEffect(() => {
    debouncedGetTranslatedText(inputText);
    return () => debouncedGetTranslatedText.cancel();
  }, [inputText, debouncedGetTranslatedText]);

  return (
    <div className="w-11/12 md:w-6/12 lg:w-6/12 h-full flex justify-end md:justify-start items-center relative">
      <div className="w-11/12 md:w-10/12 lg:w-8/12 flex flex-col justify-center ml-12">
        <LanguageSelector
          isSource={true}
          selectedLang={sourceLang}
          onLanguageChange={handleSourceLanguageChange}
        />
        <div className="w-full flex items-center rounded-full mt-4 mb-4 relative">
          <textarea
            className="w-full p-4 pr-10 rounded-md resize-none focus:outline-none focus:ring-2 text-2xl focus:customBlue text-black "
            rows={5}
            onChange={(e) => {
              setInputText(e.target.value);
            }}
            placeholder="Source Text"
            value={inputText}
          />

          {showDeleteButton && (
            <IoClose
              className="absolute text-gray-500 top-4 right-3 text-2xl cursor-pointer hover:text-red-400"
              onClick={() => {
                setInputText("");
                setCheckDeleteState(false);
              }}
              onMouseOver={() => setCheckDeleteState(true)}
              onMouseOut={() => setCheckDeleteState(false)}
            />
          )}

          {checkDeleteState ? (
            <div className="w-24 h-16 bg-customGray absolute top-11 right-4 flex items-center justify-center rounded-md">
              <p className="text-white text-center">Delete The Text</p>
            </div>
          ) : null}

          {showLanguageAlert && (
            <CiCircleAlert
              className="absolute text-gray-500 top-4 right-3 text-2xl cursor-pointer hover:text-orange-400"
              onMouseOver={() => setCheckLangFill(true)}
              onMouseOut={() => setCheckLangFill(false)}
            />
          )}

          {checkLangFill ? (
            <div className="w-24 h-20 bg-customGray absolute top-11 right-4 flex items-center justify-center rounded-md">
              <p className="text-white text-center">
                You Have To Select Language
              </p>
            </div>
          ) : null}
        </div>
        <LanguageSelector
          isSource={false}
          selectedLang={targetLang}
          onLanguageChange={setTargetLang}
        />
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

          {showCopyButton && (
            <IoCopyOutline
              className="absolute text-gray-500 bottom-4 right-3 text-2xl cursor-pointer hover:text-customBlue"
              onClick={copyFunc}
              onMouseOver={() => setCheckCopyState(true)}
              onMouseOut={() => setCheckCopyState(false)}
            />
          )}
        </div>
      </div>
      {showChangeLangButton ? (
        <div
          className="w-[40px] h-[40px] right-[-50px] md:right-0 flex items-center justify-center cursor-pointer rounded-full absolute md:relative bg-neutral-700 hover:bg-neutral-600 mt-4 ml-4"
          onClick={reverseLang}
        >
          <BiTransferAlt className="text-2xl" />
        </div>
      ) : null}
    </div>
  );
};

export default Inputs;
