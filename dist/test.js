var listDiv = $(".set button");
listDiv.html("<em>Hello</em>");
listDiv.attr("style", "color: skyblue");
console.log(listDiv);
for (var i = 0; i < listDiv.length; i++) {
    listDiv[i].classList.add("color-btn");
}
var result = true;
var listBtn = $(".set button");
for (var i = 0; i < listBtn.length; i++) {
    result = result && listBtn[i].classList.contains("color-btn");
}
console.log(result);
