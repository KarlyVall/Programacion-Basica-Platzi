let texto = document.getElementById("texto_lineas");
let boton = document.getElementById("botoncito");
boton.addEventListener("click", dibujoPorClick);

let d = document.getElementById("dibujito");
let ancho = d.width;
let lienzo = d.getContext("2d");

function dibujarLinea(col, xin, yin, xfi, yfi)
{
  lienzo.beginPath();
  lienzo.strokeStyle = col;
  lienzo.moveTo(xin,yin);
  lienzo.lineTo(xfi,yfi);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujoPorClick()
{
  let lineas = parseInt(texto.value);
  let l = 0;
  let yi, xf;
  let colorcito = "#FF0040";
  let colorcito2 = "#FF0040";
  let espacio = ancho / lineas;

  for (l = 0; l < lineas; l++)
  {
    yi = espacio * l;
    xf = espacio * (l + 1);
    dibujarLinea(colorcito, 0, yi, xf, 300);
    dibujarLinea(colorcito2, 300, yi, xf, 0);
  }

  dibujarLinea(colorcito, 1, 1, 1, 299);
  dibujarLinea(colorcito, 1, 299, 299, 299);
  dibujarLinea(colorcito2, 1, 1, 299, 1);
  dibujarLinea(colorcito2, 299, 1, 299, 299);
}