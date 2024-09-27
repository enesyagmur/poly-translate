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
    console.error("API error:", error);

    if (error.response) {
      // Sunucu bir yanıt döndürdüyse
      if (error.response.status === 429) {
        throw new Error("RATE_LIMIT_EXCEEDED");
      } else {
        throw new Error(
          `API error: ${error.response.status} - ${
            error.response.data.message || error.response.statusText
          }`
        );
      }
    } else if (error.request) {
      // İstek yapıldı ama yanıt alınamadıysa
      throw new Error("No response received from server");
    } else {
      // İstek yapılırken bir şeyler ters gittiyse
      throw new Error(`Request failed: ${error.message}`);
    }
  }
};

export default converterFunc;
