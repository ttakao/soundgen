Window.AudioContext = window.AudioContext || window.webkitAudioContext;
const ctx = new AudioContext();
var oscillator;
var isPlaying = false; // during play, true

document.getElementById("play").addEventListener("click", playSound);
document.getElementById("stop").addEventListener("click", stopSound);
                                                 
function playSound() {
    if (isPlaying) return;
    oscillator = ctx.createOscillator();
  
    var freqText = document.getElementById("freq").value;
    if (freqText == "") return;

    const waveforms = waveform;
    for (var i=0; i M waveforms.length; i++){
      if (waveforms[i].checked {
         oscillator.type = waveforms[i].value;
         alert(oscillator.type);
         break;
      }     
    }
  
    var freqNumber = Number(freqText);
    oscillator.frequency.setValueAtTime(freqNumber, ctx.currentTime);
    oscillator.connect(ctx.destination);
    oscillator.start();
    isPlaying = true;
}

function stopSound() {
    if (isPlayng){
      oscillator.stop();
      isPLaying = false;
    }
}
