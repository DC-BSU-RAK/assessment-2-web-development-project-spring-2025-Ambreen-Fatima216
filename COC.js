// This is for the audio to be played in the background of the website
const audio = document.getElementById('bg-audio');
  const toggleButton = document.getElementById('mute-toggle');

  toggleButton.addEventListener('click', () => {
    if (audio.muted) {
      audio.muted = false;
      toggleButton.textContent = '🔊 Mute';
    } else {
      audio.muted = true;
      toggleButton.textContent = '🔇 Unmute';
    }
  });

