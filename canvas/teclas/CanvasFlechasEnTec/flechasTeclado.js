let teclas = {
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40
};

document.addEventListener("keydown", dibujarTeclado);
let cuadrito = document.getElementById("area_de_dibujo");
let papel = cuadrito.getContext("2d");
let x = 150;
let y = 150;

dibujarLinea("green", 149, 149, 151, 151, papel);

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo) {
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth = 3;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujarTeclado(evento) {
  let colorcito = "black";
  let movimiento = 10;

  switch (evento.keyCode) {
    case teclas.LEFT:
      dibujarLinea(colorcito, x, y, x - movimiento, y, papel);
      x = x - movimiento;
      break;

    case teclas.UP:
      dibujarLinea(colorcito, x, y, x, y - movimiento, papel);
      y = y - movimiento;
      break;

    case teclas.RIGHT:
      dibujarLinea(colorcito, x, y, x + movimiento, y, papel);
      x = x + movimiento;
      break;

    case teclas.DOWN:
      dibujarLinea(colorcito, x, y, x, y + movimiento, papel);
      y = y + movimiento;
      break;

    default:
      console.log("Es otra tecla");
  }
}
