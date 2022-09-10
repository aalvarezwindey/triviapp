import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../../../routing';
import styles from './BeginTriviaAction.module.css';

export default function BeginTriviaAction() {
  return (
    <Link to={ROUTES.QUIZ} className={styles.link}>
      Begin
    </Link>
  );
}
