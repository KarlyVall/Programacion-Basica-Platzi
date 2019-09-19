let vp = document.getElementById("villaPlatzi");
let papel = vp.getContext("2d");
document.addEventListener("keyup", moverCerdo);

let vaca = {
  url: "vaca.png",
  cargaOK: false
};

let fondo = {
  url: "tile.png",
  cargaOK: false
};

let cerdo = {
  url: "cerdo.png",
  cargaOK: false
};

let pollo = {
  url: "pollo.png",
  cargaOK: false
};

let teclas = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39,
  ENTER: 13
};

let xInicialCerdo, yInicialCerdo;
let cantidadVaca = aleatorio(0, 5);
let cantidadCerdo = 1;
let cantidadPollo = aleatorio(0, 5);
let xInicialVaca = [],
  yInicialVaca = [];
let xInicialPollo = [],
  yInicialPollo = [];

//crear objetos de la nada
fondo.imagen = new Image(); //clase Imagen o definicion de objeto image
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVaca);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdo);
//cerdo.imagen.addEventListener("keyup", moverCerdo);

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollo);

function cargarFondo() {
  fondo.cargaOK = true;
  dibujar();
}

function cargarVaca() {
  vaca.cargaOK = true;
  dibujar();
}

function cargarCerdo() {
  cerdo.cargaOK = true;
  dibujar();
}

function cargarPollo() {
  pollo.cargaOK = true;
  dibujar();
}

function dibujar() {
  if (fondo.cargaOK == true) {
    papel.drawImage(fondo.imagen, 0, 0);
  }

  if (vaca.cargaOK) {
    // es lo mismo el condicional siempre evalua si el valor es verdadero
    for (let i = 0; i < cantidadVaca; i++) {
      let xVaca = aleatorio(0, 7) * 60;
      let yVaca = aleatorio(0, 7) * 60;
      papel.drawImage(vaca.imagen, xVaca, yVaca);
      xInicialVaca[i] = xVaca;
      yInicialVaca[i] = yVaca;
      //console.log("x inicial " + i + ":" + xInicialVaca[i]);
      //console.log("y inicial " + i + ":" + yInicialVaca[i]);
    }
  }

  if (pollo.cargaOK) {
    // es lo mismo el condicional siempre evalua si el valor es verdadero
    for (let i = 0; i < cantidadPollo; i++) {
      let xPollo = aleatorio(0, 7) * 60;
      let yPollo = aleatorio(0, 7) * 60;
      papel.drawImage(pollo.imagen, xPollo, yPollo);
      xInicialPollo[i] = xPollo;
      yInicialPollo[i] = yPollo;
    }
  }

  if (cerdo.cargaOK) {
    // es lo mismo el condicional siempre evalua si el valor es verdadero
    let xCerdo = aleatorio(0, 7) * 60;
    let yCerdo = aleatorio(0, 7) * 60;
    papel.drawImage(cerdo.imagen, xCerdo, yCerdo);
    xInicialCerdo = xCerdo;
    yInicialCerdo = yCerdo;
  }
}

function moverCerdo(evento) {
  let movimiento = 10;

  switch (evento.keyCode) {
    case teclas.UP:
      yInicialCerdo = yInicialCerdo - movimiento;
      dibujarMovimientoCerdo();
      break;
    case teclas.DOWN:
      yInicialCerdo = yInicialCerdo + movimiento;
      dibujarMovimientoCerdo();
      break;
    case teclas.LEFT:
      xInicialCerdo = xInicialCerdo - movimiento;
      dibujarMovimientoCerdo();
      break;
    case teclas.RIGHT:
      xInicialCerdo = xInicialCerdo + movimiento;
      dibujarMovimientoCerdo();
      break;
    case teclas.ENTER:
      dibujar();
      break;

    default:
      alert("Pon solo flechas");
  }
  if (xInicialCerdo == 420) {
    if (yInicialCerdo == 430) {
    }
  }
}

function dibujarMovimientoCerdo() {
  if (fondo.cargaOK == true) {
    papel.drawImage(fondo.imagen, 0, 0);
  }

  if (vaca.cargaOK) {
    // es lo mismo el condicional siempre evalua si el valor es verdadero
    for (let i = 0; i < cantidadVaca; i++) {
      papel.drawImage(vaca.imagen, xInicialVaca[i], yInicialVaca[i]);
    }
  }

  if (pollo.cargaOK) {
    // es lo mismo el condicional siempre evalua si el valor es verdadero
    for (let i = 0; i < cantidadPollo; i++) {
      papel.drawImage(pollo.imagen, xInicialPollo[i], yInicialPollo[i]);
    }
  }

  if (cerdo.cargaOK) {
    // es lo mismo el condicional siempre evalua si el valor es verdadero
    papel.drawImage(cerdo.imagen, xInicialCerdo, yInicialCerdo);
  }

  console.log("V:" + cantidadVaca + "/" + "P:" + cantidadPollo);
}

document.write("Vacas en la villa: " + cantidadVaca + "<br>");
document.write("Pollos en la villa: " + cantidadPollo + "<br>");
document.write("Cerdos en la villa: " + cantidadCerdo + "<br>");
document.write("Presiona ENTER para iniciar de nuevo" + "<br>");

function aleatorio(min, maxi) {
  let resultado;
  resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
  return resultado;
}
