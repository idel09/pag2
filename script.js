const images = ['p1.jpg','p2.jpg','p3.jpg']; // Lista de URLs de las imágenes
const adImage = document.getElementById('adImage'); // Obtiene la imagen del anuncio
const adContainer = document.getElementById('adContainer'); // Obtiene el contenedor del anuncio
let currentIndex = 0; // Índice actual de la imagen en la lista
function changeImage() {
  currentIndex = (currentIndex + 1) % images.length; // Cambia al siguiente índice de imagen
  adImage.src = images[currentIndex]; // Cambia la imagen del anuncio
}
// Cambia la imagen cada 5 segundos
setInterval(changeImage, 1500);