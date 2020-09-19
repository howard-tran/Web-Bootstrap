//@ts-nocheck

import "../dist/bundle.js";

/**
 * @type {HTMLElement}
 */
let arr = document.querySelectorAll("#list li");

/**
 * @type {HTMLElement}
 */
let child = arr[0].firstElementChild;
child.style.color = "red";

console.log(arr);

/**
 * @type {Document}
 */
let t = (document
  .querySelector("body")
  .querySelector("div")
  .querySelector("div").style.color = "red");

//
// event for a tag
//

/**
 * change text when mouse over
 * @param {HTMLElement} obj
 */
function mouseOver(obj) {
  obj.firstElementChild.innerHTML = "Fuck You";
}

/**
 * change text when mouse out
 * @param {HTMLElement} obj
 */
function mouseOut(obj) {
  obj.firstElementChild.innerHTML = "Google";
}

/**
 * @type {HTMLElement}
 */
//

let btn = document.firstElementChild.lastElementChild.querySelector("button");
btn.style.display = "block";
btn.classList.add("btn");
btn.classList.add("btn-outline-primary");

/**
 * @type {HTMLElement}
 */
let _facebook = document.querySelector("body").querySelector("ul").children[1]
  .firstElementChild;
_facebook.setAttribute("href", "https://larryjason.com");
_facebook.style.color = "red";
