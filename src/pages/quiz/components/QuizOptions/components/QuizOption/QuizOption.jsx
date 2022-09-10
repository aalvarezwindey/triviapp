import React from 'react';
import PropTypes from 'prop-types';
import styles from './QuizOption.module.css';

function QuizOption({ onSelected, children }) {
  return (
    <button onClick={() => onSelected()} className={styles.option}>
      {children}
    </button>
  );
}

QuizOption.propTypes = {
  onSelected: PropTypes.func.isRequired,
  children: PropTypes.node,
};

export default QuizOption;
