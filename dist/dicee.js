function gamePlay() {
    var player1 = Math.floor(Math.random() * 6) + 1;
    var player2 = Math.floor(Math.random() * 6) + 1;
    var title = document.querySelector("#title div h1");
    if (player1 > player2) {
        title.innerHTML = "Player1 Win";
    }
    else if (player1 < player2) {
        title.innerHTML = "Player2 Win";
    }
    else {
        title.innerHTML = "Draw";
    }
    var player1_img = document.querySelector("#player1-dice");
    var player2_img = document.querySelector("#player2-dice");
    player1_img.setAttribute("src", "../images/dice" + player1 + ".png");
    player2_img.setAttribute("src", "../images/dice" + player2 + ".png");
}
function test() {
    console.log("fuck you");
}
function removeGameplayCookies() {
    if (sessionStorage.getItem("gameplay-reloaded")) {
        return;
    }
    else {
        sessionStorage.setItem("gameplay-reloaded", "true");
    }
}
document.querySelector("body").onload = removeGameplayCookies;
function main() {
    if (sessionStorage.getItem("gameplay-reloaded")) {
        gamePlay();
    }
}
main();
