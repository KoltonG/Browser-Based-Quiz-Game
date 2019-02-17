(function selectRandomQuestion(QUESTIONS, score = 0) {
  try {
    const QUESTION =
      QUESTIONS.splice(Math.floor(Math.random() * QUESTIONS.length), 1)[0];

    const ANSWER = prompt(`${QUESTION.question}\n\n${(QUESTION.answers.map(
      (answer, index) => `${++index}. ${answer}\n`)).join('')}`);

    if (ANSWER === 'exit') {
      alert(`Thank you for playing!\n\nYou\'re score is ${score}`)
    } else if (parseInt(ANSWER) === QUESTION.correctAnswerIndex + 1) {
      alert(`🎉Correct answer\n\nYou\'re score is ${++score}`);
      selectRandomQuestion(QUESTIONS, score);
    } else {
      alert(`Incorrect answer 😥\n\nYou\'re current score is ${score}`);
      selectRandomQuestion(QUESTIONS, score);
    }
  } catch (e) {
    alert(`Game over. Thank you for playing!\n\nYou\'re score is ${score}`);
  }
})([
  {
    question: 'How tall is the golden gate bridge?',
    answers: ['1140m', '1240m', '227m'],
    correctAnswerIndex: 2
  },
  {
    question: 'Which fictional city is the home of Batman?',
    answers: ['Gotham', 'Star City', 'Metropolis'],
    correctAnswerIndex: 0
  },
  {
    question: 'Which is the total number of dots on a pair of dices?',
    answers: ['24', '42', '57'],
    correctAnswerIndex: 1
  }
]);
