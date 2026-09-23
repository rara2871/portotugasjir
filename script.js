// Mengambil Elemen DOM
const btnSapa = document.getElementById('btn-sapa');
const pesanInteraktif = document.getElementById('pesan-interaktif');

// Event Click untuk memunculkan/menyembunyikan pesan
btnSapa.addEventListener('click', function() {
  if (pesanInteraktif.classList.contains('tersembunyi')) {
    pesanInteraktif.classList.remove('tersembunyi');
    btnSapa.innerHTML = '<i class="fa-solid fa-xmark"></i> Tutup Pesan';
  } else {
    pesanInteraktif.classList.add('tersembunyi');
    btnSapa.innerHTML = '<i class="fa-solid fa-paper-plane"></i> Sapa Saya';
  }
});