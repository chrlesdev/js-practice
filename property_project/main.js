const names = document.getElementById("name");
const description = document.getElementById("description");
const locations = document.getElementById("location");
const price = document.getElementById("price");
const button = document.getElementById("button");
const show = document.getElementById("show");
const PropertyList = document.getElementById("propertyList");

// function showProperty(text) {
//   const h1 = document.createElement("p");
//   h1.textContent = text;
//   PropertyList.append(h1);
// }

function displayAllProperties() {
  const properties = JSON.parse(localStorage.getItem("properties")) || [];
  const container = document.getElementById("propertyList"); // ← Add this!
  container.innerHTML = "";
  properties.forEach((property) => {
    const card = document.createElement("div");
    card.innerHTML = `
    <h3>${property.name}</h3>
      <p>${property.description}</p>
      <p>Location: ${property.location}</p>
      <p>Price: $${property.prices}</p>
      <button>Delete</button>
      <button>Edit</button>
      <hr>
    `;
    container.appendChild(card);
  });
}

// displayAllProperties();

// show.addEventListener("click", function () {
//   const y = localStorage.getItem("property");
//   if (!y) return;
//   const stored = JSON.parse(y);
//   showProperty(`property Name: ${stored.name}`);
//   showProperty(`property Description: ${stored.description}`);
//   showProperty(`property Location: ${stored.location}`);
//   showProperty(`property Price: ${stored.prices}`);
// });

button.addEventListener("click", function () {
  const value1 = names.value;
  const value2 = description.value;
  const value3 = locations.value;
  const value4 = price.value;

  const property = {
    name: value1,
    description: value2,
    location: value3,
    prices: value4,
  };

  // if (!property.name || !property.description || !property.location || !property.price) {
  //   alert("Please fill in all fields!");
  //   return; // Stop here, don't save
  // }

  const properties = JSON.parse(localStorage.getItem("properties")) || [];

  properties.push(property);

  localStorage.setItem("properties", JSON.stringify(properties));
  console.log(localStorage.getItem("properties"));

  displayAllProperties();

  names.value = "";
  description.value = "";
  locations.value = "";
  price.value = "";
});

// localStorage.clear();
