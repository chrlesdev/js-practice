localStorage.setItem("test", "Hello");
// console.log(localStorage.getItem("test"));

// ✅ Convert to string first
const user = { name: "Pikachu", age: 25 };
localStorage.setItem("user", JSON.stringify(user));
// Saves as: '{"name":"Pikachu","age":25}'

// Get it back
const saved = JSON.parse(localStorage.getItem("user"));
//console.log(saved.name); // "Pikachu"

async function getData() {
  try {
    const datas = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu");
    const data = await datas.json();

    localStorage.setItem("Pokemon Name", data.species.name);
    console.log(localStorage.getItem("Pokemon Name"));
  } catch (error) {
    console.error("something went wrong!!", error);
  }
}

getData();

const keys = [1, 2, 3, 4, 5];
const value = ["a", "b", "c", "d", "e"];

keys.forEach((e, a) => {
  localStorage.setItem(e, value[a]);
});
