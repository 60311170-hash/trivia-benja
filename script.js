let puntos= 0;
 let textoPuntos = document.querySelector("#textoPuntos");


  function verifRespuesta(pregunta, result) {
  let respuesta = document.querySelector(`input[name="${pregunta}"]:checked`);
  let resultado = document.querySelector(result);
  resultado.style.display = "block";
  if(respuesta.value === "correcto"){
    resultado.innerText = "correcto"
    puntos += 1;
    textoPuntos.innerText = `Puntos: ${puntos}`;
  }
  else{
    resultado.innerText = "incorrecto"
  }
}
  
  


































































































//Variables para movimiento de preguntas
var currentQ = 0;
const questions = document.querySelectorAll(".contenedor");

// Mostrar solo la primera pregunta
questions.forEach((q, index) => {
  if (index !== 0) {
    q.style.display = "none";
  }
});


//Aparecer siguiente pregunta
function sigPregunta() {
  questions[currentQ].classList.add("fade-out");
  setTimeout(() => {
    if (currentQ < questions.length - 1) {
      questions[currentQ].style.display = "none";
      currentQ++;
      questions[currentQ].classList.add("slide-left");
      questions[currentQ].style.display = "block";
    } else {
      scoreText.innerText = `Final score: ${score}/${questions.length}`;
      scoreText.classList.add("glowing");
      if (score === questions.length) {
        fullMarks.style.display = "block";
      } else {
        retry.style.display = "block";
      }
    }
  }, "2000");
}