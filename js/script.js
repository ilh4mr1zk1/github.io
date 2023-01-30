const burger = document.querySelector('.burger')
const sidebar = document.querySelector('.sidebar')
const bgSidebar = document.querySelector('.bg-sidebar')

burger.addEventListener('click', function() {
  this.classList.toggle('change')
  sidebar.classList.toggle('change')
  bgSidebar.classList.toggle('change')
})

bgSidebar.addEventListener('click', function() {
  this.classList.remove('change')
  sidebar.classList.remove('change')
  burger.classList.remove('change')
})

$('.page-scroll').on('click', function(e) {

  // ambil isi href
  var tujuan = $(this).attr('href');
  // tangkap elemen ybs
  var elemenTujuan = $(tujuan);

  // pindahkan scroll
   $('html , body').animate({
     scrollTop: elemenTujuan.offset().top - 90
  }, 850, 'swing');

  e.preventDefault();

});

const txtElement = ['Selamat Datang di Website Saya !       '];
let count = 0;
let txtIndex = 0;
let currentTxt = '';
let words = '';

(function ngetik() {

  if(count == txtElement.length) {
    count = 0;
  }

  currentTxt = txtElement[count];

  words = currentTxt.slice(0, ++txtIndex);
  document.querySelector('.efek-ngetik').textContent = words;

  if(words.length == currentTxt.length) {
    count++;
    txtIndex = 0;
  }

  setTimeout(ngetik, 180);

}) ();