import React from 'react';
import styles from './LandingHeader.module.css';

export default function LandingHeader({ children }) {
  return <h1 className={styles.h1}>{children}</h1>;
}
