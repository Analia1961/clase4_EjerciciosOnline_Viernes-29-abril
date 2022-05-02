// EJERCICIO 1 - Mayor a 20 - Clase4 viernes 29 abril

/* EJERCICIO EN LÍNEA

rotulo.innerHTML = ”Escriba el número que desea verificar
 si es mayor o no a 20: “;*/

let dato = document.getElementById("dato");
let btnEnviar = document.getElementById("enviar");

btnEnviar.addEventListener("click" , () => {

  let datoExtraido: number = Number(dato.value);

  if (datoExtraido > 20) {
    console.log("El numero es mayor a 20");
  } else {
    console.log("el numero es menor o igual que 20")
  }
})
