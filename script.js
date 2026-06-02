const videos = [
  'WhatsApp Video 2026-05-02 at 10.49.11 AM.mp4',
  'testfootage.mp4',
  'warmer.mp4',
  'warmer2.mp4',
  'filmtest.mov',
  'bestvid0001-0312.mkv',
  'peephole effect.mp4',
  'IMG_1373.MOV',
  'IMG_1375.MOV',
  'IMG_1377.MOV',
  'RafaPhone001_05151322_C005.mov',
  'DenzelPhone001_0515314 PM_C036.mov',
  'DenzelPhone001_0515725 PM_C003.mov',
  'DenzelPhone001_0515729 PM_C004.mov',
  'DenzelPhone001_0515739 PM_C009.mov',
  'DenzelPhone001_0515825 PM_C008.mov',
  'DenzelPhone001_0515746 PM_C011.mov',
  'DenzelPhone001_0515147 PM_C008.mov',
  'DenzelPhone001_0515303 PM_C028.mov',
  'DenzelPhone001_0515242 PM_C019.mov',
  'WhatsApp Video 2026-05-19 at 10.46.13 PM.mp4',
  'A001_05221204_C010.mov',
  'A001_05221208_C011.mov',
  'A001_05221211_C012.mov',
  'A001_05221236_C027.mov',
  'outro.mov',
  'SilvaCam001_05271405_C168.mov',
  'SilvaCam001_05271355_C159.mov',
  'SilvaCam001_05271404_C166.mov',
  'SilvaCam001_05271406_C169.mov',
  'DenzelPhone001_05291122 AM_C003.mov',
  'DenzelPhone001_0529148 PM_C001.mov',
  'DenzelPhone001_05291222 PM_C008.mov',
  'DenzelPhone001_0529126 PM_C004.mov',
  'LealCam001_05281625_C035.mov',
  'LealCam001_05281623_C034.mov',
];

const video = document.getElementById('random-video');

function pickRandom(exclude) {
  const pool = exclude ? videos.filter(v => v !== exclude) : videos;
  return pool[Math.floor(Math.random() * pool.length)];
}

function loadVideo(src) {
  video.src = src;
  video.play().catch(() => {});
}

loadVideo(pickRandom());

video.addEventListener('click', () => {
  loadVideo(pickRandom(video.src.split('/').slice(-2).join('/')));
});
