import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LandingPage from '../pages/landing';
import QuizPage from '../pages/quiz';
import ScorePage from '../pages/score';
import { ROUTES } from './constants';

export default function AppRouter() {
  return (
    <Routes>
      <Route path={ROUTES.LANDING} element={<LandingPage />} />
      <Route path={ROUTES.QUIZ} element={<QuizPage />} />
      <Route path={ROUTES.SCORE} element={<ScorePage />} />
    </Routes>
  );
}
