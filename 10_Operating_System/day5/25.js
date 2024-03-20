const fs = require("fs"); // system module import해서 사용

fs.readFile("number_one.txt", "utf-8", (err, data) => {
  // 읽고싶은 파일, 인코딩, 콜백함수
  if (err) {
    console.log("파일을 읽는 도중 오류가 발생했습니다.", err);
    return;
  }

  console.log("파일 내용 :", data);
});

let content = "four!";
// 덮어쓰기
fs.writeFile("number_four.txt", content, (err) => {
  if (err) {
    console.log("파일을 쓰는 도중 오류가 발생했습니다.", err);
    return;
  }
  console.log("파일 쓰기가 완료되었습니다.");
});

content = "It is fun, right?";
fs.appendFile("newfile.txt", content, (err) => {
  if (err) {
    console.log("파일을 쓰는 도중 오류가 발생했습니다.", err);
    return;
  }
  console.log("파일 생성 및 쓰기가 완료되었습니다.");
});

content = " it will get better.";
fs.appendFile("newfile.txt", content, (err) => {
  if (err) {
    console.log("파일을 쓰는 도중 오류가 발생했습니다.", err);
    return;
  }
  console.log("파일 생성 및 쓰기가 완료되었습니다.");
});
