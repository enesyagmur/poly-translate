import axios from "axios";

const converterFunc = async (inputText, sourceLang, targetLang) => {
  try {
    const response = await axios.get(
      `https://api.mymemory.translated.net/get`,
      {
        params: {
          q: inputText,
          langpair: `${sourceLang}|${targetLang}`,
        },
      }
    );

    return response.data.responseData.translatedText;
  } catch (error) {
    console.error("Api error:", error);
    throw error;
  }
};

export default converterFunc;
