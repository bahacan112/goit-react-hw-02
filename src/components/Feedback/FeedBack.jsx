import styles from "./Feedback.module.css";
import PropTypes from "prop-types";

const Feedback = ({
  good,
  neutral,
  bad,
  totalFeedback,
  positivePercentage,
}) => {
  return (
    <div className={styles.feedback}>
      <p className={styles.feedbackText}>Good: {good}</p>
      <p className={styles.feedbackText}>Neutral: {neutral}</p>
      <p className={styles.feedbackText}>Bad: {bad}</p>
      <p className={styles.feedbackText}>Total: {totalFeedback}</p>
      <p className={styles.feedbackText}>Positive: {positivePercentage}%</p>
    </div>
  );
};

Feedback.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  totalFeedback: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Feedback;
