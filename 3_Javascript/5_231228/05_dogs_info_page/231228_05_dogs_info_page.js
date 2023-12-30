const apiRandomDogs = "https://dog.ceo/api/breeds/image/random/42";
const apiAllBreeds = "https://dog.ceo/api/breeds/list/all";

const header = document.getElementById("header");
const main = document.getElementById("main");
const filterInput = document.getElementById("filter-text");
const filterButton = document.getElementById("filter-button");
const filterSelect = document.getElementById("filter-select");
const reset = document.getElementById("reset");
const more = document.getElementById("more");
const tothetop = document.getElementById("tothetop");

const request1 = new XMLHttpRequest();

const currentDogs = [];

function displayDogs(item) {}

window.addEventListener("load", () => {
  request1.open("get", apiRandomDogs);
  console.log(request1);
  request1.addEventListener("load", () => {
    const response = JSON.parse(request1.response);
    console.log(response);
    response.message.forEach((item) => {
      currentDogs.push(item);
      displayDogs(item);
    });
  });
});
