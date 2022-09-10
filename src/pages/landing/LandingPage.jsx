import React from 'react';
import BeginTriviaAction from './components/BeginTriviaAction/BeginTriviaAction';
import Challenge from './components/Challenge/Challenge';
import LandingHeader from './components/LandingHeader/LandingHeader';
import TriviaInstructions from './components/TriviaInstrunctions/TriviaInstructions';

export default function LandingPage() {
  return (
    <>
      <LandingHeader>Welcome to the Trivia Challenge!</LandingHeader>
      <TriviaInstructions>
        You will be presented with 10 True or False questions.
      </TriviaInstructions>
      <Challenge>Can you score 100%?</Challenge>
      <BeginTriviaAction />
    </>
  );
}
