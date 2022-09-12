import React from 'react';
import PropTypes from 'prop-types';
import styles from './QuizScoreHeader.module.css';

function QuizScoreHeader({
  questionsAmount,
  correctlyAnsweredQuestionsAmount,
}) {
  return (
    <h1
      className={styles.header}
    >{`You scored\n ${correctlyAnsweredQuestionsAmount}/${questionsAmount}`}</h1>
  );
}

QuizScoreHeader.propTypes = {
  questionsAmount: PropTypes.number.isRequired,
  correctlyAnsweredQuestionsAmount: PropTypes.number.isRequired,
};

export default QuizScoreHeader;
