const button = document.getElementById("button");
const input = document.getElementById("input");
const lists = document.getElementById("lists");

input.addEventListener("input", function (e) {
  lists.innerText = "Hello " + e.target.value + ", how are you ?";
});
