import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../../../routing';
import styles from './PlayAgainAction.module.css';

export default function PlayAgainAction() {
  return (
    <Link to={ROUTES.LANDING} replace className={styles.link}>
      Play again ?
    </Link>
  );
}
