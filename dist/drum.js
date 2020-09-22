function playAudio(fileName) {
    var _audio = new Audio(fileName);
    _audio.play();
}
function initAudioClickBtn() {
    $("#w-drum").on("click", function () {
        playAudio("../sounds/tom-1.mp3");
    });
    $("#a-drum").on("click", function () {
        playAudio("../sounds/tom-2.mp3");
    });
    $("#s-drum").on("click", function () {
        playAudio("../sounds/tom-3.mp3");
    });
    $("#d-drum").on("click", function () {
        playAudio("../sounds/tom-4.mp3");
    });
    $("#j-drum").on("click", function () {
        playAudio("../sounds/crash.mp3");
    });
    $("#k-drum").on("click", function () {
        playAudio("../sounds/kick-bass.mp3");
    });
    $("#l-drum").on("click", function () {
        playAudio("../sounds/snare.mp3");
    });
}
function initAudioTypingBtn() {
    document.addEventListener("keydown", function (e) {
        var btnParent = document.querySelector(".set");
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
    });
}
(function main() {
    initAudioClickBtn();
    initAudioTypingBtn();
})();
