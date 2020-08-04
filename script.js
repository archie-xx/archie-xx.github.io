const word = document.querySelector('.title')
word.addEventListener('click', () => {
  const video = document.querySelector('#back-video')
  video.muted = !video.muted
  word.classList.toggle('full-brightness')
  document.querySelector('.wrapper').classList.toggle('darken')
  document.querySelector('.blurred').classList.toggle('shown')
})
