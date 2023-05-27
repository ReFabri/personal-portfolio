import PropTypes from "prop-types";
import i18n from "../../translate/i18n";

const LanguageSelector = (props) => {
  const languageChangeHandler = (e) => {
    if (e.target.value === "en-US") {
      i18n.changeLanguage("en-US");
    } else {
      i18n.changeLanguage("pt-BR");
    }
    props.onChange();
  };

  return (
    <div>
      <button className="btn" onClick={languageChangeHandler} value="en-US">
        English
      </button>
      <button className="btn" onClick={languageChangeHandler} value="pt-BR">
        Portuguese
      </button>
    </div>
  );
};

LanguageSelector.propTypes = {
  onChange: PropTypes.func,
};

export default LanguageSelector;
