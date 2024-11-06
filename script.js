const images = ['imgproductos/1.jpg', 'imgproductos/2.jpg', 'imgproductos/3.jpg','imgproductos/4.jpg', 'imgproductos/5.jpg', 'imgproductos/6.jpg','imgproductos/7.jpg', 'imgproductos/8.jpg', 'imgproductos/9.jpg','imgproductos/10.jpg', 'imgproductos/11.jpg']; // Lista de URLs de las imágenes
const adImage = document.getElementById('adImage'); // Obtiene la imagen del anuncio
const adContainer = document.getElementById('adContainer'); // Obtiene el contenedor del anuncio
let currentIndex = 0; // Índice actual de la imagen en la lista
function changeImage() {
  currentIndex = (currentIndex + 1) % images.length; // Cambia al siguiente índice de imagen
  adImage.src = images[currentIndex]; // Cambia la imagen del anuncio
}
// Cambia la imagen cada 5 segundos
setInterval(changeImage, 1500);