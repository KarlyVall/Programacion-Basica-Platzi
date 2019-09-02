let d = document.getElementById('dibujito');
let lienzo = d.getContext("2d");
let lineas = 30;
let l = 0;
let yi, xf;
let xi, yf;
let colorcito = "#FF0040";



for (l = 0; l < lineas; l++) {
    yi = 10 * l;
    xf = 10 * (l + 1);
    dibujarLinea(colorcito, 0, yi, xf, 300);

}

for (m = 0; m < lineas; m++) {
    xi = 10 * m;
    yf = 10 * (m + 1);
    dibujarLinea(colorcito, 300, xi, yf, 0);

}
for (j = 0; j < lineas; j++) {
    yi = 10 * (j + 1);
    xf = 10 * (30 - j);
    dibujarLinea(colorcito, 0, yi, xf, 0);
}

for (h = 0; h < lineas; h++) {
    xi = 10 * h;
    yf = 10 * (29 - h);
    dibujarLinea(colorcito, xi, 300, 300, yf);
}

dibujarLinea(colorcito, 1, 1, 1, 299);
dibujarLinea(colorcito, 1, 299, 299, 299);
dibujarLinea(colorcito, 1, 1, 299, 1);
dibujarLinea(colorcito, 299, 0, 299, 299);


function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal) {
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}