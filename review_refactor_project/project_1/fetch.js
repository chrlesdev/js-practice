const btn = document.getElementById("button");
const facts = document.getElementById("fact");
const numbers = document.getElementById("count");

async function getData() {
  try {
    const response = await fetch("https://catfact.ninja/facts?page=1");
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const result = await response.json();
    const store = result.data;

    function handleFact() {
      let factData = store;
      let count = 0;
      return function () {
        if (count >= factData.length) {
          return count;
        }
        count++;
        numbers.innerHTML = count;
        newLi = document.createElement("li");
        newContent = document.createTextNode(factData[count - 1].fact);
        newLi.appendChild(newContent);
        document.body.insertBefore(newLi, facts);
      };
    }
    const buttonhandler = handleFact;

    btn.addEventListener("click", buttonhandler());

    // return ;
  } catch (error) {
    console.log(error);
  }
}
getData();

// function handleFact() {
//   return factList.append("olololololololo");
// }

// btn = addEventListener("click", handleFact);

//testing

obj = {
  a: [{ id: 1 }, { id: 2 }, { id: 3 }],
};

let stores = obj.a;

for (let i = 0; i < stores.length; i++) {
  // console.log(stores[i].id);
}
