const questions = [
  {
    question: "Who was the first president of kenya?",
    answers: [
      { options: "Uhuru Kenyata", correct: "false" },
      { options: "Mwai Kibaki", correct: "false" },
      { options: "Jomo Kenyata", correct: "true" },
      { options: "William Ruto", correct: "false" },
    ],
  },
  {
    question: "What is the capital city of Kenya?",
    answers: [
      { options: "Dondoma", correct: "false" },
      { options: "Nairobi", correct: "true" },
      { options: "Adis Ababa", correct: "false" },
      { options: "Mogadishu", correct: "false" },
    ],
  },
  {
    question: "When did kenya gain its independence and became a republic?",
    answers: [
      { options: "1963", correct: "true" },
      { options: "1956", correct: "false" },
      { options: "1972", correct: "false" },
      { options: "1985", correct: "false" },
    ],
  },
  {
    question:
      "The following statements are true about Kenya. Which one is not?",
    answers: [
      {
        options: "Mt. Kenya is located in central region of Kenya",
        correct: "false",
      },
      {
        options:
          "Mombasa serves as a gateway to kenya and EastAfrica through its port",
        correct: "false",
      },
      { options: "Lake Victorory is a fresh water lake", correct: "false" },
      {
        options: "River Nile drains its water into Lake Victoria",
        correct: "true",
      },
    ],
  },
  {
    question:
      "What is the name of the largest ethnic group by population in Kenya?",
    answers: [
      { options: "Kalenjin", correct: "false" },
      { options: "Luo", correct: "false" },
      { options: "Kikuyu", correct: "true" },
      { options: "Minji Kenda", correct: "false" },
    ],
  },
];

const questionElement = document.querySelector("#question");
const answerButtons = document.querySelector(".answer-buttons");
const nextBtn = document.querySelector(".next-btn");

let currentQuestionIndex = 0;
let score = 0;

const startQuiz = () => {
  currentQuestionIndex = 0;
  score = 0;
  nextBtn.innerHTML = "Next";
  showQuestion();
};

const showQuestion = () => {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.options;
    button.classList.add("answers");
    answerButtons.appendChild(button);
  });
};

const resetState = () => {
  nextBtn.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
};

startQuiz();
