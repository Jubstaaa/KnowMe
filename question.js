function Question(questionText, answers, rightAnswer) {
  this.questionText = questionText;
  this.answers = answers;
  this.rightAnswer = rightAnswer;
}

Question.prototype.checkAnswer = function (answer) {
  return answer === this.rightAnswer;
};

let questions = [
  new Question(
    "1-What is my name?",
    {
      a: "İlker",
      b: "Bilge Kaan",
      c: "Safa j3urak",
      d: "Evsin",
      e: "Yusuf Talhaâ",
      f: "Deniz Redhead",
    },
    "a"
  ),
  new Question(
    "2-Where did i graduate?",
    { a: "Bilgi", b: "IGU", c: "Sakarya", d: "Nişantaşı" },
    "b"
  ),
  new Question(
    "3-Which department did I graduate from?",
    {
      a: "Computer Science",
      b: "Graphic Design",
      c: "Computer Technology",
      d: "Molecular Biology",
      e: "Hunting and Wildlife",
    },
    "c"
  ),
  new Question(
    "4-What is my favourite quote?",
    {
      a: "Let them shot me in the head uncle",
      b: "I wish I had money and be a retard",
      c: "What happened brother, let him come",
      d: "As soon as Hasan Hüseyin came Vınn",
    },
    "b"
  ),
  new Question(
    "5-What is my favourite book?",
    {
      a: "F*ck it",
      b: "Saftirik",
      c: "My Left Leg",
      d: "Journey Journal",
    },
    "d"
  ),
];
