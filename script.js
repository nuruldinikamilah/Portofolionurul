const themeToggle = document.querySelector('.theme-toggle');
const themeIcon = document.getElementById('theme-icon');

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');

  // Ganti icon sesuai mode
  if (document.body.classList.contains('dark')) {
    themeIcon.src = 'icons/night.png';  // ikon malam
  } else {
    themeIcon.src = 'icons/day.png';   // ikon siang
  }
});
