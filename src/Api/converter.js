import axios from "axios";

const converterFunc = async (inputText, sourceLang, targetLang) => {
  try {
    const response = await axios.get(
      "https://api.mymemory.translated.net/get",
      {
        params: {
          q: inputText,
          langpair: `${sourceLang}|${targetLang}`,
        },
      }
    );
    if (response.data && response.data.responseData) {
      return response.data.responseData.translatedText;
    } else {
      throw new Error("Invalid response format");
    }
  } catch (error) {
    console.error("API error:", error.message);
    throw new Error("Translation failed");
  }
};

export default converterFunc;
