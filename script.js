const btn = document.querySelector('.switch__input');

btn.addEventListener('click', function() {
  document.body.classList.toggle('light-theme');
})