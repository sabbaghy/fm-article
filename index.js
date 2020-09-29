const share = document.getElementById('share');
const social = document.getElementById('social');

share.addEventListener('click', () => {
   social.classList.add('social--show');
})
social.addEventListener('click', (e) => {
   social.classList.remove('social--show');
})