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
    video.play();
  });

  video.addEventListener('ended', () => {
    dismissOverlay();
    song.play();
  });
});
