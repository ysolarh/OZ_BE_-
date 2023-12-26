const form = document.getElementById("form");

function add(n1, n2) {
  return n1 + n2;
}

function subtract(n1, n2) {
  return n1 - n2;
}

function multiply(n1, n2) {
  return n1 * n2;
}

function divide(n1, n2) {
  return n1 / n2;
}

function clear() {
  location.reload();
}

form.addEventListener("click");

form.addEventListener("submit", function (e) {
  e.preventDefault();
});
