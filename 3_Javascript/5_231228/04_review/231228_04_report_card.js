const reportTable = document.getElementById("report");
const highScoreStH2 = document.getElementById("high-score");

// console.log(reportTable.rows[1].cells[0].textContent);
const tableValue = Array.from(reportTable.rows).slice(1);
console.log(tableValue);
let scores = {};
let highScoreStudents = [];

// tableValue -> scores
tableValue.forEach((item) => {
  scores[item.cells[0].innerHTML] = parseInt(item.cells[1].innerHTML);
});
console.log("scores", scores);

// Array.from(scores).sort((a, b) => {
//   return b[1] - a[1];
// });
// console.log(scores);

// 75점 이상 추출
for (const name in scores) {
  if (scores[name] >= 75) {
    highScoreStudents.push([name, scores[name]]);
  }
}

// highScoreStudents = Array.from(scores).filter((item) => item[1] >= 75);
console.log(scores);
// 점수 높은 순으로 나열
highScoreStudents.sort((a, b) => {
  return b[1] - a[1];
});
console.log(highScoreStudents);

// 화면에 출력
for (const name of highScoreStudents) {
  highScoreStH2.textContent += name[0] + " ";
}
