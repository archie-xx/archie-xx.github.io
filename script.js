const word = document.querySelector('.title')
word.addEventListener('click', () => {
  const video = document.querySelector('#back-video')
  video.muted = !video.muted
  word.classList.toggle('full-brightness')
})
