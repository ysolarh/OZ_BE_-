const nameElement = document.querySelector("#name");
nameElement.textContent = prompt("이름");

const hobbyElement = document.querySelector("#hobby");
let hobby = prompt("취미");
hobbyElement.textContent = `취미는 ${hobby}입니다!`;

const songElement = document.querySelector("#song");
let song = prompt("좋아하는 노래");
songElement.textContent = `좋아하는 노래는 ${song}입니다!`;

const foodElement = document.querySelector("#food");
let food = prompt("좋아하는 음식");
foodElement.textContent = `좋아하는 음식은 ${food}입니다!`;