import styles from "./Options.module.css";
import PropTypes from "prop-types";

const Options = ({ options, updateFeedback, resetFeedback, totalFeedback }) => {
  // Burada durumu güncellemek için setter'ı kullan
  return (
    <div className={styles.options}>
      {options.map((option) => (
        <button
          key={option}
          className={styles.optionButton}
          onClick={() => updateFeedback(option)}
        >
          {option}
        </button>
      ))}
      {totalFeedback > 0 && (
        <button className={styles.resetButton} onClick={resetFeedback}>
          Reset
        </button>
      )}
    </div>
  );
};
Options.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  totalFeedback: PropTypes.number.isRequired,
  updateFeedback: PropTypes.func.isRequired,
  resetFeedback: PropTypes.func.isRequired,
};

export default Options;
