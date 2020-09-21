let arr = document.querySelectorAll("#list li");

let child = <HTMLElement>arr[0].firstElementChild;
child.style.color = "red";

console.log(arr);
//
// event for a tag
//
function mouseOver(obj: HTMLElement) {
  obj.firstElementChild.innerHTML = "Fuck You";
}

function mouseOut(obj: HTMLElement) {
  obj.firstElementChild.innerHTML = "Google";
}

let btn = <HTMLElement>(
  document.firstElementChild.lastElementChild.querySelector("button")
);
btn.style.display = "block";
btn.classList.add("btn");
btn.classList.add("btn-outline-primary");

let _facebook = <HTMLElement>(
  document.querySelector("body").querySelector("ul").children[1]
    .firstElementChild
);

_facebook.setAttribute("href", "https://larryjason.com");
_facebook.style.color = "red";
