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

Link.textContend = "Mozilla devolper network";

Link.href = "https://devolper.mozilla.org";

const sect = document.querySelector("section");

const para = document.querySelector("p");

para.textContent = "We hope you enjoyed the ride";

sect.appendChild(para);

const text = document.createTextNode("The promise source for web developen knowloage");

const LinkPara = document.querySelector("p");

LinkPara.appendChild(text);

sect.appendChild(LinkPara);

/*sect.removeChild(LinkPara);*/


para.style.color = "yellow";
para.style.backgroundColor = "black";
para.style.pading = "10px";
para.style.width = "250px";
para.style.textAlign = "center";

para.setAttribute("class", "toroMax");