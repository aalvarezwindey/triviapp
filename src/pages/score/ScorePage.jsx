import React from 'react';
import PlayAgainAction from './components/PlayAgainAction/PlayAgainAction';
import QuizQuestionsResults from './components/QuizQuestionsResults/QuizQuestionsResults';
import QuizScoreHeader from './components/QuizScoreHeader/QuizScoreHeader';

export default function ScorePage() {
  const results = [
    {
      question:
        'If you could fold a piece of paper in half 50 times, its&#039; thickness will be 3/4th the distance from the Earth to the Sun.',
      answer: ['True', 'False'][Math.floor(Math.random() * 2)],
      isCorrect: [true, false][Math.floor(Math.random() * 2)],
    },
    {
      question:
        'If you could fold a piece of paper in half 50 times, its&#039; thickness will be 3/4th the distance from the Earth to the Sun.',
      answer: ['True', 'False'][Math.floor(Math.random() * 2)],
      isCorrect: [true, false][Math.floor(Math.random() * 2)],
    },
    {
      question:
        'If you could fold a piece of paper in half 50 times, its&#039; thickness will be 3/4th the distance from the Earth to the Sun.',
      answer: ['True', 'False'][Math.floor(Math.random() * 2)],
      isCorrect: [true, false][Math.floor(Math.random() * 2)],
    },
    {
      question:
        'If you could fold a piece of paper in half 50 times, its&#039; thickness will be 3/4th the distance from the Earth to the Sun.',
      answer: ['True', 'False'][Math.floor(Math.random() * 2)],
      isCorrect: [true, false][Math.floor(Math.random() * 2)],
    },
    {
      question:
        'If you could fold a piece of paper in half 50 times, its&#039; thickness will be 3/4th the distance from the Earth to the Sun.',
      answer: ['True', 'False'][Math.floor(Math.random() * 2)],
      isCorrect: [true, false][Math.floor(Math.random() * 2)],
    },
    {
      question:
        'If you could fold a piece of paper in half 50 times, its&#039; thickness will be 3/4th the distance from the Earth to the Sun.',
      answer: ['True', 'False'][Math.floor(Math.random() * 2)],
      isCorrect: [true, false][Math.floor(Math.random() * 2)],
    },
    {
      question:
        'If you could fold a piece of paper in half 50 times, its&#039; thickness will be 3/4th the distance from the Earth to the Sun.',
      answer: ['True', 'False'][Math.floor(Math.random() * 2)],
      isCorrect: [true, false][Math.floor(Math.random() * 2)],
    },
    {
      question:
        'If you could fold a piece of paper in half 50 times, its&#039; thickness will be 3/4th the distance from the Earth to the Sun.',
      answer: ['True', 'False'][Math.floor(Math.random() * 2)],
      isCorrect: [true, false][Math.floor(Math.random() * 2)],
    },
    {
      question:
        'If you could fold a piece of paper in half 50 times, its&#039; thickness will be 3/4th the distance from the Earth to the Sun.',
      answer: ['True', 'False'][Math.floor(Math.random() * 2)],
      isCorrect: [true, false][Math.floor(Math.random() * 2)],
    },
    {
      question:
        'If you could fold a piece of paper in half 50 times, its&#039; thickness will be 3/4th the distance from the Earth to the Sun.',
      answer: ['True', 'False'][Math.floor(Math.random() * 2)],
      isCorrect: [true, false][Math.floor(Math.random() * 2)],
    },
  ];
  return (
    <>
      <QuizScoreHeader
        questionsAmount={results.length}
        correctlyAnsweredQuestionsAmount={
          results.filter((r) => r.isCorrect).length
        }
      />
      <QuizQuestionsResults results={results} />
      <PlayAgainAction />
    </>
  );
}
