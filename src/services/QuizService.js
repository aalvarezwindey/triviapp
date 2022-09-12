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
    amount = 10,
    difficulty = 'hard',
    type = 'boolean',
  }) {
    try {
      const url = new URL(this.baseURL);
      url.searchParams.set('amount', amount);
      url.searchParams.set('difficulty', difficulty);
      url.searchParams.set('type', type);
      const response = await this.httpClient.get(url.toString());

      if (response.ok) {
        const quiz = await response.json();
        this.currentQuiz = quiz;

        // NOTE: this should be done in backend in order to prevent cheating
        return quiz.map(
          ({ category, question, correct_answer, incorrect_answers }, idx) => ({
            id: idx,
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
}

export default new QuizService();
