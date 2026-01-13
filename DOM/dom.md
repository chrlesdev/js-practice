DOM Cheat Sheet - The Essential Syntax:

1. Get elements from HTML:

```js
document.getElementById("myId"); // Get by ID
document.querySelector(".myClass"); // Get first match
document.querySelectorAll(".myClass"); // Get all matches
```

2. Create new elements:

```js
document.createElement("div"); // <div></div>
document.createElement("img"); // <img>
document.createElement("button"); // <button></button>
document.createElement("p"); // <p></p>
```

3. Change content/attributes:

```js
element.textContent = "Hello"; // Set text
element.innerHTML = "<b>Bold</b>"; // Set HTML
element.src = "image.jpg"; // For images
element.value = "text"; // For inputs
element.className = "myClass"; // Set class
```

4. Add to page:

```js
parent.appendChild(child); // Add to end
parent.insertBefore(child, reference); // Add before something
parent.removeChild(child);
```

5. Event listeners:

```js
element.addEventListener("click", function)
element.addEventListener("input", function)
element.addEventListener("change", function)
```

Common patterns you'll use:

6. Display text:

```js
const div = document.getElementById("output");
div.textContent = "Hello!";
```

7. Display image:

```js
const container = document.getElementById("images");
const img = document.createElement("img");
img.src = "url-here";
container.appendChild(img);
```

8. Get input value:

```js
const input = document.getElementById("myInput");
const value = input.value;
```

9. Create a button that does something:

```js
const btn = document.getElementById("myBtn");
btn.addEventListener("click", () => {
  console.log("Clicked!");
});
```
