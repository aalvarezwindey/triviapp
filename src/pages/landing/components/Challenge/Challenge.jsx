import React from 'react';
import styles from './Challenge.module.css';

export default function Challenge({ children }) {
  return <p className={styles.challenge}>{children}</p>;
}
