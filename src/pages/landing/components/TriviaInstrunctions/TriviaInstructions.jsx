import React from 'react';
import styles from './TriviaInstructions.module.css';

export default function TriviaInstructions({ children }) {
  return <p className={styles.instructions}>{children}</p>;
}
