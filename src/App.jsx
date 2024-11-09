import { useState } from "react";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/FeedBack";

const App = () => {
  const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });
  const resetFeedback = () => {
    setFeedback({ good: 0, neutral: 0, bad: 0 });
  };
  const updateFeedback = (feedbackType) => {
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [feedbackType]: prevFeedback[feedbackType] + 1,
    }));
  };
  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positivePercentage =
    totalFeedback > 0 ? Math.round((feedback.good / totalFeedback) * 100) : 0;

  return (
    <div>
      <h1>Please leave your feedback</h1>
      <Options
        options={["good", "neutral", "bad"]}
        updateFeedback={updateFeedback}
        resetFeedback={resetFeedback}
        positivePercentage={positivePercentage}
        totalFeedback={totalFeedback}
      />
      <Feedback
        good={feedback.good}
        neutral={feedback.neutral}
        bad={feedback.bad}
        totalFeedback={totalFeedback}
        positivePercentage={positivePercentage}
      />
    </div>
  );
};

export default App;
