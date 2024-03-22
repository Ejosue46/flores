const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Configuración del canvas
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Función para dibujar un pétalo
function dibujarPetalo(x, y, radio, angulo) {
  ctx.beginPath();
  ctx.arc(x, y, radio, angulo, angulo + Math.PI * 2 / 3, false);
  ctx.fillStyle = "yellow";
  ctx.fill();
}

// Función para dibujar una flor
function dibujarFlor(x, y, radio) {
  for (let i = 0; i < 6; i++) {
    dibujarPetalo(x, y, radio, i * Math.PI * 2 / 6);
  }
}

// Función para animar las flores
function animar() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let i = 0; i < 100; i++) {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    const radio = Math.random() * 20 + 10;

    dibujarFlor(x, y, radio);
  }

  requestAnimationFrame(animar);
}

animar();
