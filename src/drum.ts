function playAudio(fileName: string) {
  let _audio = new Audio(fileName);
  _audio.play();
}

function initAudioClickBtn() {
  let btnParent = document.querySelector(".set");

  (btnParent.querySelector("#w-drum") as HTMLElement).onclick = function () {
    playAudio("../sounds/tom-1.mp3");
  };
  (btnParent.querySelector("#a-drum") as HTMLElement).onclick = function () {
    playAudio("../sounds/tom-2.mp3");
  };
  (btnParent.querySelector("#s-drum") as HTMLElement).onclick = function () {
    playAudio("../sounds/tom-3.mp3");
  };
  (btnParent.querySelector("#d-drum") as HTMLElement).onclick = function () {
    playAudio("../sounds/tom-4.mp3");
  };
  (btnParent.querySelector("#j-drum") as HTMLElement).onclick = function () {
    playAudio("../sounds/crash.mp3");
  };
  (btnParent.querySelector("#k-drum") as HTMLElement).onclick = function () {
    playAudio("../sounds/kick-bass.mp3");
  };
  (btnParent.querySelector("#l-drum") as HTMLElement).onclick = function () {
    playAudio("../sounds/snare.mp3");
  };
}

function initAudioTypingBtn() {
  document.addEventListener("keydown", function (e) {
    let btnParent = document.querySelector(".set");
    switch (e.key) {
      case "w":
      case "W": {
        (btnParent.querySelector("#w-drum") as HTMLElement).click();
        break;
      }
      case "a":
      case "A": {
        (btnParent.querySelector("#a-drum") as HTMLElement).click();
        break;
      }
      case "s":
      case "S": {
        (btnParent.querySelector("#s-drum") as HTMLElement).click();
        break;
      }
      case "d":
      case "D": {
        (btnParent.querySelector("#d-drum") as HTMLElement).click();
        break;
      }
      case "j":
      case "J": {
        (btnParent.querySelector("#j-drum") as HTMLElement).click();
        break;
      }
      case "k":
      case "K": {
        (btnParent.querySelector("#k-drum") as HTMLElement).click();
        break;
      }
      case "l":
      case "L": {
        (btnParent.querySelector("#l-drum") as HTMLElement).click();
        break;
      }
    }
  });
}

interface human {
  name: string;
  age: number;
  fam_name: string[] | number[];
}

(function main() {
  initAudioClickBtn();
  initAudioTypingBtn();

  const _human: human = {
    name: "hello",
    age: 123,
    fam_name: ["123", "23"],
  };
  console.log(_human);
})();
