function gamePlay() {
  let player1 = Math.floor(Math.random() * 6) + 1;
  let player2 = Math.floor(Math.random() * 6) + 1;

  let title = document.querySelector("#title div h1");

  if (player1 > player2) {
    title.innerHTML = "Player1 Win";
  } else if (player1 < player2) {
    title.innerHTML = "Player2 Win";
  } else {
    title.innerHTML = "Draw";
  }

  let player1_img = document.querySelector("#player1-dice");
  let player2_img = document.querySelector("#player2-dice");

  player1_img.setAttribute("src", `../images/dice${player1}.png`);
  player2_img.setAttribute("src", `../images/dice${player2}.png`);
}

function main() {
  if (document.cookie.indexOf("checkReload") == -1) {
    document.cookie = "checkReload=1";
    //
  } else {
    gamePlay();
  }
}

main();
