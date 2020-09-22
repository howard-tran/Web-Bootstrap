function playAudio(fileName: string) {
  let _audio = new Audio(fileName);
  _audio.play();
}

function initAudioClickBtn() {
  $("#w-drum")[0].onclick = function () {
    playAudio("../sounds/tom-1.mp3");
  };

  $("#a-drum")[0].onclick = function () {
    playAudio("../sounds/tom-2.mp3");
  };

  $("#s-drum")[0].onclick = function () {
    playAudio("../sounds/tom-3.mp3");
  };

  $("#d-drum")[0].onclick = function () {
    playAudio("../sounds/tom-4.mp3");
  };

  $("#j-drum")[0].onclick = function () {
    playAudio("../sounds/crash.mp3");
  };

  $("#k-drum")[0].onclick = function () {
    playAudio("../sounds/kick-bass.mp3");
  };

  $("#l-drum")[0].onclick = function () {
    playAudio("../sounds/snare.mp3");
  };
}

function initAudioTypingBtn() {
  $(document)[0].onkeydown = function (e) {
    switch (e.key) {
      case "w":
      case "W": {
        $("#w-drum").trigger("click");
        break;
      }
      case "a":
      case "A": {
        $("#a-drum").trigger("click");
        break;
      }
      case "s":
      case "S": {
        $("#s-drum").trigger("click");
        break;
      }
      case "d":
      case "D": {
        $("#d-drum").trigger("click");
        break;
      }
      case "j":
      case "J": {
        $("#j-drum").trigger("click");
        break;
      }
      case "k":
      case "K": {
        $("#k-drum").trigger("click");
        break;
      }
      case "l":
      case "L": {
        $("#l-drum").trigger("click");
        break;
      }
    }
  };
}

(function main() {
  initAudioClickBtn();
  initAudioTypingBtn();
})();
