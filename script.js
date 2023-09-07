var marcador = document.getElementById("contador");
var contador = 0;
var circulos = []; // Matriz para mantener los círculos

function crearCirculo() {
    var nuevoDiv = document.createElement("div");
    nuevoDiv.className = "circulo";
    nuevoDiv.style.top = Math.random() * 90 + "%";
    nuevoDiv.style.left = Math.random() * 90 + "%";
    
    nuevoDiv.addEventListener("click", function(){
        nuevoDiv.style.display = "none";
        contador++;
        marcador.innerHTML = contador;
        
        // Eliminar el círculo de la matriz
        var index = circulos.indexOf(nuevoDiv);
        if (index !== -1) {
            circulos.splice(index, 1);
        }
    });

    document.getElementById("contenedor-circulos").appendChild(nuevoDiv);
    circulos.push(nuevoDiv);
}

function crearCirculosIniciales(cantidad) {
    for (var i = 0; i < cantidad; i++) {
        crearCirculo();
    }
}

crearCirculosIniciales(5); // Crear 5 círculos iniciales

var tiempoLimite =20 * 1000; // 20 segundos
var tiempoTranscurrido = 0;

var intervalId = setInterval(function() {
    tiempoTranscurrido += 1000; // 1 segundo
    if (tiempoTranscurrido >= tiempoLimite) {
        clearInterval(intervalId); // Detener el juego cuando se alcance el tiempo límite
        mostrarResultado();
    } else if (circulos.length < 5) {
        var cantidadNuevosCirculos = 5 - circulos.length;
        crearCirculosIniciales(cantidadNuevosCirculos);
    }
}, 1000); // Actualizar cada segundo



function mostrarResultado() {
    // Mostrar puntuación final y un mensaje de juego terminado
    var resultadoDiv = document.createElement("div");
    resultadoDiv.classList.add("resultadoDiv");
    resultadoDiv.innerHTML = "Juego terminado. Tu puntuación es: " + contador + '\n<input type="button" value="Recargar" onclick="location.reload()">' ;
    document.body.appendChild(resultadoDiv);
    document.getElementById("contenedor-circulos").style.display = "none";
}

/*FUNCION PARA EL BOTON QUE REFRESQUE LA PÁGUINA UNA VEZ ACABADO EL CONTADOR*/ 
let refresh = document.getElementById('refresh');
refresh.addEventListener('click', _ => {
            location.reload();
})