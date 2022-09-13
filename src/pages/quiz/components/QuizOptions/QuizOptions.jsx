import React from 'react';
import PropTypes from 'prop-types';
import styles from './QuizOptions.module.css';
import QuizOption from './components/QuizOption/QuizOption';

function QuizOptions({ options, onOptionSelected }) {
  return (
    <div className={styles.options}>
      {options.map((option) => (
        <QuizOption key={option} onSelected={() => onOptionSelected(option)}>
          {option}
        </QuizOption>
      ))}
    </div>
  );
}

QuizOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onOptionSelected: PropTypes.func.isRequired,
};

export default QuizOptions;
