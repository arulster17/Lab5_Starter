// explore.js

window.addEventListener('DOMContentLoaded', init);


function init() {

  let playButton = document.querySelector('#explore button');
  let voiceSelect = document.getElementById('voice-select');
  let textInput = document.getElementById('text-to-speak');
  let faceImage = document.querySelector('#explore img');
  let synth = window.speechSynthesis;
  let voices = '';

  synth.addEventListener("voiceschanged", () => {
    voices = synth.getVoices();
    voices = synth.getVoices();
    for (let i = 0; i < voices.length; i++) {
      let newOption = document.createElement("option");
      newOption.text = `${voices[i].name}`;
      voiceSelect.append(newOption);
    }
  });

  playButton.addEventListener('click', function() {
    let textToSpeak = textInput.value;
    let utterance = new SpeechSynthesisUtterance(textToSpeak);
    for (let i = 0; i < voices.length; i++) {
      if(voices[i].name == voiceSelect.value) {
        utterance.voice = voices[i];
      }
    }
    utterance.addEventListener('end', () => {
      console.log("Speech has finished.");
      faceImage.src = 'assets/images/smiling.png';
      // You can trigger any follow-up action here
    });
    faceImage.src = 'assets/images/smiling-open.png';
    synth.speak(utterance);
  });

 


}