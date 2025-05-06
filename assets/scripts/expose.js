// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  var hornChosen = false;
  let curHorn = 'select';
  let hornSelect = document.getElementById('horn-select');
  let hornImage = document.querySelector('#expose img');
  let hornAudio = document.querySelector('#expose audio');


  let volumeSelect = document.getElementById('volume');
  let volumeImage = document.querySelector('#volume-controls img');

  let playButton = document.querySelector('#expose button');
  

  
  hornSelect.addEventListener('input', function () {
    hornChosen = true;
    curHorn = hornSelect.value;
    let curImage = 'assets/images/' + curHorn + '.svg';
    let curAudio = 'assets/audio/' + curHorn + '.mp3';

    
    hornImage.src = curImage;
    hornAudio.src = curAudio;
  });

  volumeSelect.addEventListener('input', function () {
    let curVolume = volumeSelect.value;
    if (curVolume == 0) {
      volumeImage.src = 'assets/icons/volume-level-0.svg';
    }
    else if (curVolume < 33) {
      volumeImage.src = 'assets/icons/volume-level-1.svg';
    }
    else if (curVolume < 67) {
      volumeImage.src = 'assets/icons/volume-level-2.svg';
    }
    else {
      volumeImage.src = 'assets/icons/volume-level-3.svg';
    }
    hornAudio.volume = curVolume/100;
    
  });

  playButton.addEventListener('click', function () {
    if (!hornChosen) return;
    hornAudio.play();
    if(curHorn == 'party-horn') {
      const jsConfetti = new JSConfetti();
      jsConfetti.addConfetti();
    }
  });

}