const word = document.querySelector('.sign__word')
word.addEventListener('click', () => {
  const video = document.querySelector('video')
  video.muted = !video.muted
  word.classList.toggle('full')
})
