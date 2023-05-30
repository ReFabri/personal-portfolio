import "./LanguageSelector.css";
import PropTypes from "prop-types";
import i18n from "../../translate/i18n";

const LanguageSelector = (props) => {
  const languageChangeHandler = (e) => {
    if (e.target.checked) {
      i18n.changeLanguage("pt-BR");
    } else {
      i18n.changeLanguage("en-US");
    }
    props.onChange();
  };

  return (
    <div className="language-selector__container">
      <div className="language-selector__inner-container">
        <label htmlFor="checkbox">English</label>
        <input
          type="checkbox"
          className="language-selector__checkbox"
          id="checkbox"
          onChange={languageChangeHandler}
          checked={i18n.language === "pt-BR"}
        />
        <label className="language-selector__label" htmlFor="checkbox">
          Português
        </label>
      </div>
    </div>
  );
};

LanguageSelector.propTypes = {
  onChange: PropTypes.func,
};

export default LanguageSelector;
