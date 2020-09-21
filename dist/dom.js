var arr = document.querySelectorAll("#list li");
var child = arr[0].firstElementChild;
child.style.color = "red";
console.log(arr);
//
// event for a tag
//
function mouseOver(obj) {
    obj.firstElementChild.innerHTML = "Fuck You";
}
function mouseOut(obj) {
    obj.firstElementChild.innerHTML = "Google";
}
var btn = (document.firstElementChild.lastElementChild.querySelector("button"));
btn.style.display = "block";
btn.classList.add("btn");
btn.classList.add("btn-outline-primary");
var _facebook = (document.querySelector("body").querySelector("ul").children[1]
    .firstElementChild);
_facebook.setAttribute("href", "https://larryjason.com");
_facebook.style.color = "red";
