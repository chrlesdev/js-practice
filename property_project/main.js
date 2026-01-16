const names = document.getElementById("name");
const description = document.getElementById("description");
const locations = document.getElementById("location");
const price = document.getElementById("price");
const button = document.getElementById("button");
const show = document.getElementById("show");
const PropertyList = document.getElementById("propertyList");

function showProperty(text) {
  const h1 = document.createElement("p");
  h1.textContent = text;
  PropertyList.append(h1);
}

show.addEventListener("click", function () {
  const y = localStorage.getItem("property");
  if (!y) return;
  const stored = JSON.parse(y);
  showProperty(`property Name: ${stored.name}`);
  showProperty(`property Description: ${stored.description}`);
  showProperty(`property Location: ${stored.location}`);
  showProperty(`property Price: ${stored.prices}`);
});

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

  localStorage.setItem("property", JSON.stringify(property));
  console.log(localStorage.getItem("property"));

  names.value = "";
  description.value = "";
  locations.value = "";
  price.value = "";
});
