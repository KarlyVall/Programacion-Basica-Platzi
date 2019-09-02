let teclas = {
    UP: 38,    
    DOWN: 40, 
    LEFT: 37,
    RIGHT: 39
  };
  
  console.log(teclas);
  document.addEventListener("keydown", dibujarTeclado);
  
  function dibujarTeclado() 
  {
  
  switch (event.keyCode)
  {
    case teclas.UP:
        console.log("arriba");
      break;
  
    case teclas.DOWN:
        console.log("abajo");
      break;
  
    case teclas.LEFT:
        console.log("izquierda");
      break;
  
    case teclas.RIGHT:
        console.log("derecha");
      break;
      
      default:
        console.log("otra tecla");
  }
  
  }