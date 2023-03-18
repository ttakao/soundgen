try{
    //Window.AudioContext = window.AudioContext || window.webkitAudioContext;

    var ctx = new (window.AudioContext|| window.webkitAudioContext)();
;
} catch (e) {
    alert('This browser does not work.');
}

var isPlaying = false; // during play, true
var oscillator;

document.getElementById("play").addEventListener("click", playSound);
document.getElementById("stop").addEventListener("click", stopSound);
                                                 
function playSound() {
    console.log("play pushed.");
    if (isPlaying) return;

    console.log(ctx.state);
    oscillator = ctx.createOscillator(); //  oscillator must be made by each play.
   
    var freqText = document.getElementById("freq").value; // get desired frequency.
    if (freqText == "") return;

    var freqNumber = Number(freqText);

    oscillator.frequency.value = freqNumber;

    const waveforms = document.getElementsByName("waveform"); // get desired waveform.
    for (var i=0; i < waveforms.length; i++){
      if (waveforms[i].checked) {
         oscillator.type = waveforms[i].value;
         break;
      }     
    }

    oscillator.connect(ctx.destination);
    oscillator.start(0);
    isPlaying = true;
}

function stopSound() {
    if (isPlaying){
      oscillator.stop(0);
      ctx.resume();
      isPlaying = false;
    }
    console.log("stop pushed");
}
