const names = document.getElementById("name");
const description = document.getElementById("description");
const locations = document.getElementById("location");
const price = document.getElementById("price");
const button = document.getElementById("button");
const show = document.getElementById("show");
const PropertyList = document.getElementById("propertyList");



function deleteProperty(id) { // Renamed for clarity
  let properties = JSON.parse(localStorage.getItem("properties"));
  properties = properties.filter(property => property.id !== id);
  localStorage.setItem("properties", JSON.stringify(properties));
  displayAllProperties(); // Re-display after deleting
}

function editProperty(id) {
  
}

function displayAllProperties() {
  const properties = JSON.parse(localStorage.getItem("properties")) || [];
  const container = document.getElementById("propertyList");
  container.innerHTML = "";
  
  properties.forEach((property) => {
    const card = document.createElement("div");
    card.innerHTML = `
      <h3>${property.name}</h3>
      <p>${property.description}</p>
      <p>Location: ${property.location}</p>
      <p>Price: $${property.price}</p>
      <button onclick="deleteProperty(${property.id})">Delete</button>
      <button onclick="editProperty(${property.id})">Edit</button>
      <hr>
    `;
    container.appendChild(card);
  });
}

// displayAllProperties();

show.addEventListener("click", displayAllProperties);



const properties = JSON.parse(localStorage.getItem("properties")) || [];
button.addEventListener("click", function () {
  const value1 = names.value;
  const value2 = description.value;
  const value3 = locations.value;
  const value4 = price.value;

  const id = properties.length;
  const property = {
    id,
    name: value1,
    description: value2,
    location: value3,
    prices: value4,
  };

  // if (!property.name || !property.description || !property.location || !property.price) {
  //   alert("Please fill in all fields!");
  //   return; // Stop here, don't save
  // }

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
