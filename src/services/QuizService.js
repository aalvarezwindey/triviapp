import { logger } from '../logger';
import { HTTPClient } from '../networking/http';

class QuizService {
  constructor() {
    this.httpClient = new HTTPClient();

    this.baseURL = 'https://opentdb.com/api.php'; // NOTE: could be environment depending

    this.currentQuiz = null;
  }
  /**
   * Gets ten random quiz questions
   */
  async getRandomQuizQuestions({
    amount = 2,
    difficulty = 'hard',
    type = 'boolean',
  } = {}) {
    try {
      const url = new URL(this.baseURL);
      url.searchParams.set('amount', amount);
      url.searchParams.set('difficulty', difficulty);
      url.searchParams.set('type', type);
      const response = await this.httpClient.get(url.toString());

      if (response.ok) {
        const quiz = await response.json();

        // add number
        this.currentQuiz = quiz.results.map((q, idx) => ({
          ...q,
          number: idx + 1,
        }));

        // NOTE: this should be done in backend in order to prevent cheating
        return this.currentQuiz.map(
          ({
            number,
            category,
            question,
            correct_answer,
            incorrect_answers,
          }) => ({
            number,
            category,
            question,
            options: [correct_answer, ...incorrect_answers].sort(
              (a, b) => a < b
            ),
          })
        );
      } else {
        throw new Error(
          `http client error: ${response.status} - ${response.statusText}`
        );
      }
    } catch (err) {
      logger.error('[QuizService][getRandomQuizQuestions] error', err);
      throw err;
    }
  }

  // NOTE: this should be done in backend in order to prevent cheating
  // answers should be a object of { questionNumber: answer } shape
  async submitAnswers({ answers = {} }) {
    return Promise.resolve(
      this.currentQuiz.map(({ question, number, correct_answer }) => ({
        question,
        answer: answers[number],
        isCorrect: answers[number] === correct_answer,
      }))
    );
  }
}

export default new QuizService();
