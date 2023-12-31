const apiRandomDogs = "https://dog.ceo/api/breeds/image/random/1";
const apiAllBreeds = "https://dog.ceo/api/breeds/list/all";

// const header = document.getElementById("header");
const main = document.getElementById("main");
const filterInput = document.getElementById("filter-text");
const filterButton = document.getElementById("filter-button");
const filterSelect = document.getElementById("filter-select");
const reset = document.getElementById("reset");
const more = document.getElementById("more");
const tothetop = document.getElementById("tothetop");

let request1;
let request2;

let currentDogs = [];

function displayDogs(item) {
  const dogImgDiv = document.createElement("div");
  dogImgDiv.classList.add("flex-item");
  dogImgDiv.innerHTML = `<img src=${item}>`;
  main.appendChild(dogImgDiv);
}

// function sendRequest1() {
//   request1.open("get", apiRandomDogs);
//   request1.addEventListener("load", () => {
//     const response = JSON.parse(request1.response);
//     // main.innerHTML = "";
//     // currentDogs = [];
//     response.message.forEach((item) => {
//       currentDogs.push(item);
//       displayDogs(item);
//     });
//   });
//   request1.send();
// }

window.addEventListener("load", () => {
  // 개 사진 불러오기
  request1 = new XMLHttpRequest();
  request1.open("get", apiRandomDogs);
  request1.addEventListener("load", () => {
    const response = JSON.parse(request1.response);
    response.message.forEach((item) => {
      console.log("load", item);
      currentDogs.push(item);
      displayDogs(item);
    });
  });
  request1.send();
  // sendRequest1();

  // select에 견종 채우기
  request2 = new XMLHttpRequest();
  request2.open("get", apiAllBreeds);
  request2.addEventListener("load", () => {
    const response = JSON.parse(request2.response);
    Object.keys(response.message).forEach((item) => {
      const option = document.createElement("option");
      option.textContent = item;
      option.value = item;
      filterSelect.appendChild(option);
    });
  });
  request2.send();
});

filterButton.addEventListener("click", () => {
  main.innerHTML = "";
  const filteredDogs = currentDogs.filter((item) => {
    return item.indexOf(filterInput.value) !== -1;
  });
  filterInput.value = "";
  filteredDogs.forEach((item) => {
    displayDogs(item);
  });
});

filterSelect.addEventListener("change", () => {
  main.innerHTML = "";
  const filteredDogs = currentDogs.filter((item) => {
    return item.indexOf(filterSelect.value) !== -1;
  });
  filteredDogs.forEach((item) => {
    displayDogs(item);
  });
});

reset.addEventListener("click", () => {
  // currentDogs = currentDogs.splice(0);
  // console.log(currentDogs.length, currentDogs);
  // sendRequest1();
  request1 = new XMLHttpRequest();
  request1.open("get", apiRandomDogs);
  request1.addEventListener("load", () => {
    const response = JSON.parse(request1.response);
    main.innerHTML = "";
    currentDogs = [];
    response.message.forEach((item) => {
      console.log("reset", item);
      currentDogs.push(item);
      displayDogs(item);
    });
  });
  request1.send();
});

// !!!그냥 more 눌렀을때랑 reset 누른뒤 눌렀을때 반응이 다름

more.addEventListener("click", () => {
  request1 = new XMLHttpRequest();
  request1.open("get", apiRandomDogs);
  // console.log(currentDogs.length, currentDogs);
  request1.addEventListener("load", () => {
    const response = JSON.parse(request1.response);
    // main.innerHTML = "";
    // currentDogs = [];
    response.message.forEach((item) => {
      console.log("more", item);
      currentDogs.push(item);
      displayDogs(item);
    });
    // console.log(currentDogs.length, currentDogs);
  });
  request1.send();
});

tothetop.addEventListener("click", () => {
  window.scrollTo({ top: 0 });
});
