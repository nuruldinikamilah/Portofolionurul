document.querySelectorAll('.faq-item').forEach(item => {
  const question = item.querySelector('.faq-question');
  const answer = item.querySelector('.faq-answer');
  const icon = item.querySelector('.toggle-icon');

  question.addEventListener('click', () => {
    // Tutup semua card lain dulu (opsional)
    document.querySelectorAll('.faq-item').forEach(i => {
      if (i !== item) {
        i.classList.remove('active');
        i.querySelector('.faq-answer').style.display = 'none';
        i.querySelector('.toggle-icon').src = 'icons/add.png';
      }
    });

    // Toggle card yang diklik
    const isActive = item.classList.toggle('active');

    if (isActive) {
      answer.style.display = 'block';
      icon.src = 'icons/add.png'; // ganti ke ikon tutup
    } else {
      answer.style.display = 'none';
      icon.src = 'icons/add.png'; // kembali ke ikon tambah
    }
  });
});
