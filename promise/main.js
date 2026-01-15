// Your task: implement this
function wait(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(ms);
    }, ms);
  });
}

// Should work like this:
// wait(2000).then(() => console.log("2 seconds passed!"));

function add5(num) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(num + 5);
    }, 500);
  });
}

function multiply2(num) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(num * 2);
    }, 500);
  });
}

function subtract3(num) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(num - 3);
    }, 500);
  });
}

// Chain them:
// add5(10)
//   .then(multiply2)
//   .then(subtract3)
//   .then((result) => console.log(result)); // Should log 27

const urls = ["https://pokeapi.co/api/v2/pokemon/pikachu", "https://pokeapi.co/api/v2/pokemon/charizard", "https://pokeapi.co/api/v2/pokemon/bulbasaur"];

async function getData() {
  try {
    const fetchApis = urls.map(async (e) => fetch(e));

    const response = await Promise.all(fetchApis);

    const jsonPromises = response.map((e) => {
      return e.json();
    });

    const allData = await Promise.all(jsonPromises);

    const names = allData.map((data) => data.species.name);

    console.log(names);
  } catch (error) {
    console.error("fetch failed, error: ", error);
  }
}

// getData();

// Your task:
// 1. Fetch all 3 at once
// 2. Get their names
// 3. Log all 3 names
// Hint: Use Promise.all() and map()

function fastAPI() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Fast API responded!"), 1000);
  });
}

function slowAPI() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Slow API responded!"), 3000);
  });
}

function mediumAPI() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Medium API responded!"), 2000);
  });
}

// Your task:
// Use Promise.race() to get whichever finishes FIRST
// It should log "Fast API responded!" after 1 second
// (not waiting for the other two)

// Hint: Promise.race([...]) returns the first one to resolve

// Promise.race([fastAPI(), slowAPI(), mediumAPI()]).then((val) => console.log(val));

function unreliableAPI() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.5) {
        resolve("Success!");
      } else {
        reject(new Error("Failed! Try Again !!"));
      }
    }, 1000);
  });
}

async function awaitData() {
  let attempt = 1;

  while (true) {
    console.log(`Attempt ${attempt}...`);

    try {
      const response = await unreliableAPI();
      console.log(response);
      break;
      // TODO: Call unreliableAPI and await it
      // TODO: If we get here, it succeeded! Break the loop
    } catch (error) {
      console.error("failed to fetch! retrying...");
      // TODO: If we get here, it failed. Continue looping
    }

    attempt++;
  }
}

awaitData();
// unreliableAPI()
//   .then((value) => console.log(value))
//   .catch((err) => console.error(err));
