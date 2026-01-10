const button = document.getElementById("button");
const lists = document.getElementById("lists");

button.addEventListener("click", myFunc);

function myFunc() {
  const item = [1, 2, 3, 4, 5];
  for (let e of item) {
    const store = Math.random() * e;

    lists.innerHTML = `${Math.ceil(store)}`;
  }
}
