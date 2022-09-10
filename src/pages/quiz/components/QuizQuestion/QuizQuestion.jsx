import React from 'react';
import styles from './QuizQuestion.module.css';

export default function QuizQuestion({ children }) {
  return <span className={styles.question}>{children}</span>;
}
