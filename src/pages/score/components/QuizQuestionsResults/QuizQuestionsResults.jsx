import React from 'react';
import PropTypes from 'prop-types';
import styles from './QuizQuestionsResults.module.css';
import QuizQuestionResult from './components/QuizQuestionResult/QuizQuestionResult';

function QuizQuestionsResults({ results }) {
  return (
    <section className={styles.results}>
      {results.map((result) => (
        <QuizQuestionResult key={result.question} {...result} />
      ))}
    </section>
  );
}

QuizQuestionsResults.propTypes = {
  results: PropTypes.arrayOf(
    PropTypes.shape({
      question: PropTypes.string.isRequired,
      answer: PropTypes.string.isRequired,
      isCorrect: PropTypes.bool.isRequired,
    })
  ),
};

export default QuizQuestionsResults;
