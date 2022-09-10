import React from 'react';
import PropTypes from 'prop-types';
import styles from './QuizNumberLegend.module.css';

function QuizNumberLegend(props) {
  return <span className={styles.legend}>1 of 10</span>;
}

QuizNumberLegend.propTypes = {};

export default QuizNumberLegend;
