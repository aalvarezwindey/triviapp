import React from 'react';
import PropTypes from 'prop-types';
import Card from '../../../../../../components/Card/Card';

function QuizQuestionResult({ question, answer, isCorrect }) {
  return (
    <Card>
      <div>Q: {question}</div>
      <div>A: {answer}</div>
      <div style={{ backgroundColor: isCorrect ? 'green' : 'red' }}>
        {isCorrect ? 'correct' : 'incorrect'}
      </div>
    </Card>
  );
}

QuizQuestionResult.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
  isCorrect: PropTypes.bool.isRequired,
};

export default QuizQuestionResult;
