// El principal objetivo de este desafío es fortalecer tus habilidades en 
// lógica de programación. Aquí deberás desarrollar la lógica para resolver 
// el problema.
// Aquí deberás desarrollar la lógica para resolver el problema.

//Crear un array para almacenar los nombres
// Paso 1 ******************************************************************
let amigos = [];

//Implementa una función para agregar amigos
//Desarrolla una función, que permita al usuario ingresar un nombre en el 
// campo de texto y añadirlo a la lista de amigos creada anteriormente.

// Paso 2 ******************************************************************
function agregarAmigo() {
        
//Capturar el valor del campo de entrada: Utilizar document.getElementById o 
// document.querySelector para obtener el texto ingresado por el usuario.

    let input = document.getElementById('amigo');

//Validar la entrada: Implementar una validación para asegurarse de que el campo no esté vacío. Si está vacío, mostrar un alert con un mensaje de error: "Por favor, inserte un nombre."

    let nombre = input.value.trim();

    if (nombre ===""){
        alert("Por favor ingresa un nombre valido.");
        return;
    }

//Actualizar el array de amigos: Si el valor es válido, añadirlo al arreglo 
// que almacena los nombre de amigos usando el método.push().

    amigos.push(nombre);
    console.log(amigos); // para visualizar en consola como va la lista

//Limpiar el campo de entrada: Después de añadir el nombre, restablecer el campo de texto a una cadena vacía.
    input.value = '';
    actualizarLista();
}

// Paso 3 ******************************************************************
// Función que actualiza la lista de amigos
function actualizarLista(){
    let li = document.getElementById('listaAmigos');
    lista.innerHTML = "";
//Esta función flecha la hice con ChatGPT porque no me salía

    amigos.forEach((nombre) => {
        let li = document.createElement("li");
        li.textContent = nombre;
        lista.appendChild(li);
    });
    }

// Paso 4 ******************************************************************
function sortearAmigo(params) {
    if(amigos.length ===0){
        alert("No hay nombres en la lista aún");
        return;
    }
    let indiceAleatorio = Math.floor(Math.random()*amigos.length);
    let amigoSecreto = amigos[indiceAleatorio];
    
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li> El amigo secreto es: ${amigoSecreto} </li>`;
}