function UI() {
  (this.btn_start = document.querySelector(".btn_start")),
    (this.next_btn = document.querySelector(".next_btn")),
    (this.btn_replay = document.querySelector(".btn-replay")),
    (this.btn_quit = document.querySelector(".btn-quit")),
    (this.quiz_box = document.querySelector(".quiz_box")),
    (this.score_box = document.querySelector(".score_box")),
    (this.time_text = document.querySelector(".time_text")),
    (this.time_line = document.querySelector(".time_line")),
    (this.time_second = document.querySelector(".time_second")),
    (this.score_text = document.querySelector(".score_box .score_text")),
    (this.option_list = document.querySelector(".option_list")),
    (this.correctIcon = `<div class="icon"><i class="fas fa-check"></i></div>`),
    (this.incorrectIcon = `<div class="icon"><i class="fas fa-times"></i></div>`);
}

UI.prototype.showQuestion = function showQuestion(question) {
  let questions = `<span>${question.questionText}</span>`;
  let options = "";

  for (let answer in question.answers) {
    options += `
      <div class="option">
          <span><b>${answer}</b>: ${question.answers[answer]}</span>
      </div>
      `;
  }

  document.querySelector(".question_text").innerHTML = questions;
  this.option_list.innerHTML = options;

  const option = this.option_list.querySelectorAll(".option");

  for (let opt of option) {
    opt.setAttribute("onclick", "optionSelected(this)");
  }
};

UI.prototype.showQuestionNumber = function showQuestionNumber(
  currentQuestion,
  allQuestion
) {
  let tag = `<span class="badge bg-warning">${currentQuestion} / ${allQuestion}</span>`;
  document.querySelector(".quiz_box .question_index").innerHTML = tag;
};

UI.prototype.showScore = function (allQuestion, correctAnswer) {
  let tag = `You have ${correctAnswer} correct answers out of a total ${allQuestion} questions.`;
  this.score_text.innerHTML = tag;
};
