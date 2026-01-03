const btn = document.getElementById("button");
const fact = document.getElementById("fact");
const factList = document.getElementById("factList");

async function getData() {
  try {
    const response = await fetch("https://catfact.ninja/facts?page=1");
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const result = await response.json();

    const store = result.data;

    // const {
    //   data: [{ fact }],
    // } = result;
    for (let i = 0; i < store.length; i++) {
      console.log(store[i].fact);
    }
    // console.log(store);
  } catch (error) {
    console.log(error);
  }
}

getData();

//testing

obj = {
  a: [{ id: 1 }, { id: 2 }, { id: 3 }],
};

let stores = obj.a;

for (let i = 0; i < stores.length; i++) {
  // console.log(stores[i].id);
}
