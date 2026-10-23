/* eslint-disable no-undef, no-unused-vars */ 

// DECLARACIONES 
let canvas; 
let canvasHeight; 
let canvasWidth; 

// Constante con la URL del video 
const URL_VIDEO = "vid/ASM - Tutorial 9 - Video.webm"; 
let videoConejo; 

// Constante con la URL de la imagen del icono de filtro 
const URL_IMAGEN_FILTRO = "img/ASM - Tutorial 9 - Imagen.png"; 
let imagenFiltro; 

// Variable que contiene el identificador del filtro a aplicar 
let filtro = 8; 

// FUNCIÓN DE PRECARGA DE LOS RECURSOS 
function preload() { 
  videoConejo = createVideo(URL_VIDEO); 
  imagenFiltro = loadImage(URL_IMAGEN_FILTRO); 
} 

// FUNCIÓN DE CONFIGURACIÓN 
function setup() { 
  canvasHeight = windowHeight - 155; 
  canvasWidth = windowWidth; 
  canvas = createCanvas(canvasWidth, canvasHeight); 
  canvas.parent("canvas-container"); 
  
  videoConejo.hide(); 
  videoConejo.volume(0); 
  videoConejo.loop(); 
} 

// FUNCIÓN DONDE SE PROGRAMA LA FUNCIONALIDAD 
function draw() { 
  background(0); 

  image(videoConejo, 0, 0, 640, 360); 

  switch (filtro) { 
    case 0: 
      filter(THRESHOLD); 
      break; 
    case 1: 
      filter(GRAY);
    case 2: 
      filter(OPAQUE); 
      break; 
    case 3: 
      filter(INVERT); 
      break; 
    case 4: 
      filter(POSTERIZE, 3); 
      break; 
    case 5: 
      filter(DILATE); 
      break; 
    case 6: 
      filter(BLUR, 3); 
      break; 
    case 7: 
      filter(ERODE); 
      break; 
    default: 
      break; 
  } 

  image(imagenFiltro, 10, 10, 32, 32); 
} 

// FUNCIÓN QUE SE LLAMA AL PRESIONAR CLIC EN EL RATÓN 
function mouseClicked() { 
  if (mouseX > 10 && mouseX < 42 && mouseY > 10 && mouseY < 42) { 
    
    if (filtro === 8) {
      filtro = 3;
    } else if (filtro === 3) {
      filtro = 6;
    } else if (filtro === 6) {
      filtro = 4;
    } else if (filtro === 4) {
      filtro = 1; 
    } else {
      filtro = 8; 
    }
  } 
}

// FUNCIÓN QUE SE LLAMA AL PRESIONAR TECLAS
function keyPressed() {
  if (key === ' ') {
    if (videoConejo.elt.paused) {
      videoConejo.loop();
    } else {
      videoConejo.pause();
    }
  }
}