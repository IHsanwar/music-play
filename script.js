const songs = [
    { title: "To the Abyss", file: "Made in Abyss OST 1_ 08.To the Abyss!.mp3" },
    { title: "Song 2", file: "Made in Abyss OST 1_ 08.To the Abyss!.mp3" },
    { title: "Song 3", file: "Made in Abyss OST 1_ 08.To the Abyss!.mp3" }
  ];
  
  let currentSongIndex = 0;
  const audio = document.getElementById("audio");
  const playPauseBtn = document.getElementById("play-pause");
  const songTitle = document.getElementById("song-title");
  const progressBar = document.getElementById("progress");
  
  document.getElementById("prev").addEventListener("click", () => changeSong(-1));
  document.getElementById("next").addEventListener("click", () => changeSong(1));
  playPauseBtn.addEventListener("click", togglePlayPause);
  audio.addEventListener("timeupdate", updateProgress);
  progressBar.addEventListener("input", setProgress);
  
  function loadSong(songIndex) {
    const song = songs[songIndex];
    songTitle.textContent = song.title;
    audio.src = song.file;
  }
  
  function togglePlayPause() {
    if (audio.paused) {
      audio.play();
      playPauseBtn.src = "⏸️";
    } else {
      audio.pause();
      playPauseBtn.src = "https://img.icons8.com/ios-glyphs/30/play--v1.png";
    }
  }
  
  function changeSong(direction) {
    currentSongIndex = (currentSongIndex + direction + songs.length) % songs.length;
    loadSong(currentSongIndex);
    togglePlayPause();
  }
  
  function updateProgress() {
    const progress = (audio.currentTime / audio.duration) * 100;
    progressBar.value = progress;
  }
  
  function setProgress() {
    audio.currentTime = (progressBar.value / 100) * audio.duration;
  }
  
  // Load initial song
  loadSong(currentSongIndex);