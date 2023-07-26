/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let who = ["The dog", "My grandma", "His turtle", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "the keys", "the car"];
let when = [
  "before the class",
  "right on time",
  "when I finished",
  "during my lunch",
  "while I was praying"
];

window.onload = () => {
  let excuse = document.querySelector("#excuse");
  let random1 = Math.floor(Math.random() * who.length);
  let random2 = Math.floor(Math.random() * action.length);
  let random3 = Math.floor(Math.random() * what.length);
  let random4 = Math.floor(Math.random() * when.length);

  let result = who[random1] + action[random2] + what[random3] + when[random4];

  excuse.innerHTML = result;
};

let generateExcuse = () => {
  let random1 = Math.floor(Math.random() * who.length);
  let random2 = Math.floor(Math.random() * action.length);
  let random3 = Math.floor(Math.random() * what.length);
  let random4 = Math.floor(Math.random() * when.length);

  let result = who[random1] + action[random2] + what[random3] + when[random4];

  excuse.innerHTML = result;
};

let button = document.createElement("button");
button.innerHTML = "CREADOR DE EXCUSAS";
let firsTDiv = document.querySelector(".firstDiv");
firsTDiv.appendChild(button);
button.style.display = "flex";
button.style.margin = "auto";
button.classList.add("btn", "btn-primary");
button.classList.add("mt-5");

let interval;
let isIntervalRunning = false;

button.addEventListener("click", () => {
  if (isIntervalRunning) {
    clearInterval(interval); // Detener el intervalo si está en ejecución
    isIntervalRunning = false;
    button.innerHTML = "CONTINUA"; // Cambiar el texto del botón
    button.classList.remove("btn-warning");
    button.classList.add("btn", "btn-success");
  } else {
    interval = setInterval(() => {
      generateExcuse();
    }, 1000);
    isIntervalRunning = true;
    button.innerHTML = "DETENER"; // Cambiar el texto del botón
    button.classList.remove("btn-success");
    button.classList.add("btn", "btn-warning");
  }
});

/*La diferencia entre llamar a la función de esas dos formas radica en cómo se pasa la referencia de la función al método addEventListener.

button.addEventListener("click", () => generateExcuse());
En este caso, se utiliza una función flecha como el controlador de eventos. Dentro de la función flecha, se llama a la función generateExcuse() sin argumentos. La función flecha actúa como un envoltorio alrededor de la llamada a generateExcuse(). Este enfoque es útil cuando necesitas realizar alguna lógica adicional dentro del controlador de eventos o si deseas pasar argumentos a la función.

button.addEventListener("click", generateExcuse);
Aquí, se pasa directamente la referencia de la función generateExcuse como el controlador de eventos. No se utiliza una función flecha o una función anónima. Esto significa que, cuando se haga clic en el botón, se llamará directamente a la función generateExcuse. No hay envoltorios o funciones adicionales involucradas. Este enfoque es útil cuando no necesitas realizar ninguna lógica adicional en el controlador de eventos y solo deseas llamar a la función directamente.

En resumen, la principal diferencia entre las dos formas de llamar a la función radica en si se utiliza una función flecha o se pasa la referencia de la función directamente. La elección depende de tus necesidades y de si requieres realizar lógica adicional dentro del controlador de eventos o pasar argumentos a la función. Si solo deseas llamar a la función directamente, puedes utilizar la segunda forma.*/
