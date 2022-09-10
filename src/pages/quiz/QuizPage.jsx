import React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../../components/Card/Card';
import QuizHeader from './components/QuizHeader/QuizHeader';
import QuizNumberLegend from './components/QuizNumberLegend/QuizNumberLegend';
import QuizOptions from './components/QuizOptions/QuizOptions';
import QuizQuestion from './components/QuizQuestion/QuizQuestion';
import { ROUTES } from '../../routing';

export default function QuizPage() {
  const navigate = useNavigate();
  const category = 'Science: Mathematics';
  const question =
    'If you could fold a piece of paper in half 50 times, its&#039; thickness will be 3/4th the distance from the Earth to the Sun.';

  const onOptionSelected = () => navigate(ROUTES.SCORE);
  return (
    <>
      <QuizHeader>{category}</QuizHeader>
      <Card>
        <QuizQuestion>{question}</QuizQuestion>
      </Card>
      <QuizNumberLegend />
      <QuizOptions onOptionSelected={onOptionSelected} />
    </>
  );
}
