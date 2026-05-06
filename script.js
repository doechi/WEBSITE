document.addEventListener('DOMContentLoaded', () => {
  const clickScreen = document.getElementById('click-screen');
  const overlay     = document.getElementById('intro-overlay');
  const video       = document.getElementById('intro-video');
  const song        = document.getElementById('song');

  function dismissOverlay() {
    overlay.classList.add('fade-out');
    overlay.addEventListener('transitionend', () => overlay.remove(), { once: true });
  }

  clickScreen.addEventListener('click', () => {
    clickScreen.remove();

    // Unlock the audio element while we have a direct user gesture
    song.play().then(() => song.pause()).catch(() => {});
    song.currentTime = 0;

    video.play().catch(() => {
      dismissOverlay();
      song.play();
    });
  });

  video.addEventListener('ended', () => {
    dismissOverlay();
    song.play();
  });

  video.addEventListener('error', () => { dismissOverlay(); song.play(); });

  const source = video.querySelector('source');
  if (source) source.addEventListener('error', () => { dismissOverlay(); song.play(); });
});
