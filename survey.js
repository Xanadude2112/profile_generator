const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let questions = [
  { prompt: "What's your name? Nicknames are also acceptable: ", answer: "" },
  { prompt: "What's an activity you like doing?: ", answer: "" },
  { prompt: "What do you listen to while doing that? ", answer: "" },
  { prompt: "Which is your favourite meal? (brunch, breakfast, dinner, lunch, etc): ", answer: "",},
  { prompt: "Whats your favourite thing to eat during that meal?: ", answer: "",},
  { prompt: "Which sport is your favourite?: ", answer: "" },
  { prompt: "Do you watch anime? If yes, which is your favourite?: ", answer: "" },
  { prompt: "What is your superpower, tell us what you're amazing at!: ", answer: "",},
];

const askQuestion = (index) => {
  if (index < questions.length) {
    rl.question(questions[index].prompt, (response) => {
      questions[index].answer = response;
      askQuestion(index + 1);
    });
  } else {
    generateProfile();
    rl.close();
  }
};

const generateProfile = () => {
  console.log("Here's your personal profile based on yourr answers:");
  questions.forEach((question) => {
    console.log(question.answer);
  });
};

askQuestion(0);