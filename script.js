/*const AudioContext = window.AudioContext || window.webkitAudioconmtext;
const audioCtx= new AudioContext();

const audioElement = document.querySelector("audio");
const playBtn = document.querySelector("button");
const volumeSlider = document.querySelector(".volume");

const audioSource = audioCtx.createMediaElementSource(audioElement);

playBtn.addEventListener("click", function() {
    if(audioCtx.state === "suspended") {
        audioCtx.resume();
    }

    if(this.getAttribute("class") === "paused") {
        audioElement.play();
        this.setAttribute("class", "playing");
        this.textContent = "pause"
    }else if(this.getAttribute("class") === "playing") {
        audioElement.pause();
        this.setAttribute("class", "paused");
        this.textContent = "play";
    }
});

audioElement.addEventListener("ended", function() {
    playBtn.setAttribute("class", "paused");
    this.textContent = "play";
});

const gainNode = audioCtx.createGain();

volumeSlider.addEventListener("input", function() {
    gainNode.gain.value = this.value;
});

audioSource.connect(gainNode).connect(audioCtx.destination);*/

const Link = document.querySelector("a");

