// OOP
// Object

// let soru={
//     soruMetni:"Hangisi Javascript paket yönetim uygulamasıdır?",
//     cevapSecenekleri:{
//         a:"Node.js",
//         b:"TypeScript",
//         c:"Npm"
//     },
//     dogruCevap:"c",
//     cevabıKontrolEt: function(cevap){
//         return cevap === this.dogruCevap
//     }
// }

// let soru2={
//     soruMetni:"Hangisi .Net paket yönetim uygulamasıdır?",
//     cevapSecenekleri:{
//         a:"Node.js",
//         b:"nuget",
//         c:"Npm"
//     },
//     dogruCevap:"b",
//     cevabıKontrolEt: function(cevap){
//         return cevap === this.dogruCevap
//     }
// }

// Sınıf => nesne * 30

const quiz = new Quiz(questions);
const ui = new UI();

ui.btn_start.addEventListener("click", function () {
  ui.quiz_box.classList.add("active");
  ui.showQuestion(quiz.getQuestion());
  clearInterval(counter);
  clearInterval(counterLine);
  startTimer(10);
  startTimerLine();
  ui.showQuestionNumber(quiz.questionIndex + 1, quiz.questions.length);
});

ui.next_btn.addEventListener("click", function () {
  if (quiz.questions.length != quiz.questionIndex + 1) {
    quiz.questionIndex += 1;
    ui.showQuestion(quiz.getQuestion());
    clearInterval(counter);
    clearInterval(counterLine);
    startTimer(10);
    startTimerLine();
    ui.next_btn.classList.remove("show");
    ui.showQuestionNumber(quiz.questionIndex + 1, quiz.questions.length);
  } else {
    clearInterval(counter);
    clearInterval(counterLine);
    ui.quiz_box.classList.remove("active");
    ui.score_box.classList.add("active");
    ui.showScore(quiz.questions.length, quiz.correctAnswer);
  }
});

ui.btn_quit.addEventListener("click", function () {
  window.location.reload();
});

ui.btn_replay.addEventListener("click", function () {
  quiz.questionIndex = 0;
  quiz.correctAnswer = 0;
  ui.btn_start.click();
  ui.score_box.classList.remove("active");
});

function optionSelected(option) {
  let answer = option.querySelector("span b").textContent;
  let rightAnswer = quiz.getQuestion().rightAnswer;
  let question = quiz.getQuestion();
  if (question.checkAnswer(answer)) {
    quiz.correctAnswer += 1;
    option.classList.add("correct");
    option.insertAdjacentHTML("beforeend", ui.correctIcon);
  } else {
    option.classList.add("incorrect");
    option.insertAdjacentHTML("beforeend", ui.incorrectIcon);
    for (let option of ui.option_list.children) {
      if (option.querySelector("span b").textContent == rightAnswer) {
        option.classList.add("correct");
        option.insertAdjacentHTML("beforeend", ui.correctIcon);
      }
    }
  }

  for (let i = 0; i < ui.option_list.children.length; i++) {
    ui.option_list.children[i].classList.add("disabled");
  }
  ui.next_btn.classList.add("show");
  clearInterval(counter);
  clearInterval(counterLine);
}

let counter;
function startTimer(time) {
  ui.time_second.textContent = time;
  ui.time_text.textContent = "Time Left";
  counter = setInterval(timer, 1000);
  function timer() {
    ui.time_second.textContent = time;
    time--;
    if (time < 0) {
      clearInterval(counter);
      ui.time_text.textContent = "Time Over";
      let answer = quiz.getQuestion().rightAnswer;
      for (let option of ui.option_list.children) {
        if (option.querySelector("span b").textContent == answer) {
          option.classList.add("correct");
          option.insertAdjacentHTML("beforeend", ui.correctIcon);
        }

        option.classList.add("disabled");
        ui.next_btn.classList.add("show");
      }
    }
  }
}

let counterLine;
function startTimerLine() {
  let line_width = 0;
  counterLine = setInterval(timer, 20);
  function timer() {
    line_width += 1;
    ui.time_line.style.width = line_width + "px";
    if (line_width > 549) {
      clearInterval(counterLine);
    }
  }
}
