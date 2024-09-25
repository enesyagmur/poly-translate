import PropTypes from "prop-types";

const languageOptions = [
  { code: "tr", name: "Turkish" },
  { code: "en", name: "English" },
  { code: "zh-CN", name: "Chinese" },
  { code: "ar", name: "Arabic" },
];

const LanguageSelector = ({ isSource, selectedLang, onLanguageChange }) => {
  return (
    <div className="w-full flex items-center justify-evenly font-semibold mr-32">
      <p
        className={`text-xs md:text-sm lg:text-base ${
          selectedLang ? "text-white" : "text-customYellow"
        }`}
      >
        {isSource ? "From:" : "To:"}
      </p>
      {languageOptions.map(({ code, name }) => (
        <p
          key={code}
          className={`cursor-pointer text-xs md:text-sm lg:text-base ${
            selectedLang === code ? "text-customYellow" : "text-white"
          }`}
          onClick={() => onLanguageChange(code)}
        >
          {name}
        </p>
      ))}
    </div>
  );
};

LanguageSelector.propTypes = {
  isSource: PropTypes.bool,
  selectedLang: PropTypes.string,
  onLanguageChange: PropTypes.func.isRequired,
};

export default LanguageSelector;
