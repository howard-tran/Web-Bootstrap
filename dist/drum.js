function playAudio(fileName) {
    var _audio = document.createElement("audio");
    _audio.src = fileName;
    _audio.play();
}
function initAudioClickBtn() {
    var btnParent = document.querySelector(".set");
    btnParent.querySelector("#w-drum").onclick = function () {
        playAudio("../sounds/tom-1.mp3");
    };
    btnParent.querySelector("#a-drum").onclick = function () {
        playAudio("../sounds/tom-2.mp3");
    };
    btnParent.querySelector("#s-drum").onclick = function () {
        playAudio("../sounds/tom-3.mp3");
    };
    btnParent.querySelector("#d-drum").onclick = function () {
        playAudio("../sounds/tom-4.mp3");
    };
    btnParent.querySelector("#j-drum").onclick = function () {
        playAudio("../sounds/crash.mp3");
    };
    btnParent.querySelector("#k-drum").onclick = function () {
        playAudio("../sounds/kick-bass.mp3");
    };
    btnParent.querySelector("#l-drum").onclick = function () {
        playAudio("../sounds/snare.mp3");
    };
}
function initAudioTypingBtn() {
    document.addEventListener("keydown", function (e) {
        var btnParent = document.querySelector(".set");
        switch (e.key) {
            case "w":
            case "W": {
                btnParent.querySelector("#w-drum").click();
                break;
            }
            case "a":
            case "A": {
                btnParent.querySelector("#a-drum").click();
                break;
            }
            case "s":
            case "S": {
                btnParent.querySelector("#s-drum").click();
                break;
            }
            case "d":
            case "D": {
                btnParent.querySelector("#d-drum").click();
                break;
            }
            case "j":
            case "J": {
                btnParent.querySelector("#j-drum").click();
                break;
            }
            case "k":
            case "K": {
                btnParent.querySelector("#k-drum").click();
                break;
            }
            case "l":
            case "L": {
                btnParent.querySelector("#l-drum").click();
                break;
            }
        }
    });
}
(function main() {
    initAudioClickBtn();
    initAudioTypingBtn();
    var _human = {
        name: "hello",
        age: 123,
        fam_name: ["123", "23"],
    };
    console.log(_human);
})();
