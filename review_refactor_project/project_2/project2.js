const questionList = document.getElementById("questionList");
const button = document.getElementById("button");

function checkAnswer() {}
function showScore() {}

const questions = [
  {
    question: "What is the capital of France?",
    options: ["London", "Paris", "Berlin", "Madrid"],
    correct: 1,
  },
  {
    question: "How many days are in a week?",
    options: ["5", "6", "7", "8"],
    correct: 2,
  },
  {
    question: "What color do you get when you mix blue and yellow?",
    options: ["Green", "Orange", "Purple", "Red"],
    correct: 0,
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Venus", "Jupiter", "Mars", "Saturn"],
    correct: 2,
  },
  {
    question: "How many continents are there?",
    options: ["5", "6", "7", "8"],
    correct: 2,
  },
  {
    question: "What is 10 x 5?",
    options: ["50", "55", "45", "40"],
    correct: 0,
  },
  {
    question: "Which animal is known as the King of the Jungle?",
    options: ["Tiger", "Elephant", "Lion", "Bear"],
    correct: 2,
  },
  {
    question: "How many legs does a spider have?",
    options: ["6", "8", "10", "12"],
    correct: 1,
  },
  {
    question: "What is the largest ocean on Earth?",
    options: ["Atlantic", "Indian", "Arctic", "Pacific"],
    correct: 3,
  },
  {
    question: "Which programming language is known for web styling?",
    options: ["Python", "CSS", "Java", "C++"],
    correct: 1,
  },
];

button.addEventListener("click");

// let { question } = questions[0];
// function questionFunc(questions) {
//   let index = 0;

//   return function () {
//     if (index >= questions.length) {
//       return null; // quiz finished
//     }

//     return questions[index++];
//   };
// }

// const nextQuestion = questionFunc(questions);
// console.log(nextQuestion()); // question 1
// console.log(nextQuestion()); // question 2
// console.log(nextQuestion()); // question 3
// 1st goal = shows question into the html using dom
