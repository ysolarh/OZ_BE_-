const reportTable = document.getElementById("report");
const highScoreSt = document.getElementById("high-score");

// console.log(reportTable.rows[1].cells[0].textContent);
const tableValue = Array.from(reportTable.rows).slice(1);
const scores = {};
const students = [];
// console.log(tableValue);

tableValue.forEach((item) => {
  scores[item.cells[0].innerHTML] = parseInt(item.cells[1].innerHTML);
});

// Array.from(scores).sort((a, b) => {
//   return b[1] - a[1];
// });
// console.log(scores);

for (const name in scores) {
  if (scores[name] >= 75) {
    students.push([name, scores[name]]);
  }
}

console.log(
  students.sort((a, b) => {
    b[1] - a[1];
  })
);

highScoreSt.textContent = students;
