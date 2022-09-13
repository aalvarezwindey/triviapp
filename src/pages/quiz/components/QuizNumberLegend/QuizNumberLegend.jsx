import React from 'react';
import styles from './QuizNumberLegend.module.css';

function QuizNumberLegend({ currentQuestionNumber, questionsAmount }) {
  return (
    <span className={styles.legend}>
      {currentQuestionNumber} of {questionsAmount}
    </span>
  );
}

QuizNumberLegend.propTypes = {};

export default QuizNumberLegend;
