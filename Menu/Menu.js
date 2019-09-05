/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  "Students",
  "Faculty",
  "What's New",
  "Tech Trends",
  "Music",
  "Log Out"
];

// Step 1: Write a function that will create a menu component as seen below:

// <div class="menu">
//   <ul>
//     {each menu item as a list item}
//   </ul>
// </div>

// The function takes an array as its only argument.

// Step 2: Inside this function, iterate over the array creating a list item <li> element for each item in the array.
// Add those items to the <ul>

// Step 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM.

// Step 4: add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class).

// Step 5: return the menu component.

// Step 6: add the menu component to the DOM.

//start here ================

// Step 1: Write a function that will create a menu component as seen below:

// <div class="menu">
//   <ul>
//     {each menu item as a list item}
//   </ul>
// </div>

const header = document.querySelector(".header");
console.log(header);

function createMenu(arr) {
  const menuDiv = document.createElement("div");
  const listWrap = document.createElement("ul");

  console.log(menuDiv);
  console.log(listWrap);

  menuDiv.appendChild(listWrap);

  menuDiv.classList.add("menu");

  arr.forEach(item => {
    let listItems = document.createElement("li");
    listItems.textContent = item;
    listWrap.appendChild(listItems);
    return listWrap;
  });
  console.log(listWrap);

  const menuButton = document.querySelector(".menu-button");
  console.log(menuButton);

  menuButton.addEventListener("click", () => {
    menuDiv.classList.toggle("menu--open");
    header.appendChild(menuDiv);
    console.log("button clicked");
    console.log(menuDiv.classList);
    return header;
  });
  console.log(menuDiv);
  

  return menuDiv;
}

createMenu(menuItems);
