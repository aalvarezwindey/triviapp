import React from 'react';
import styles from './QuizHeader.module.css';

export default function QuizHeader({ children }) {
  return <h1 className={styles.header}>{children}</h1>;
}
