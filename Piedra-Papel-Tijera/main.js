const gameItemElemet = document.getElementById("game-items");
const userPickedElement = document.getElementById("user-picked");
const pcPickedElement = document.getElementById("pc-picked");
const resultadoItemElemet = document.getElementById("resultado");
const pointUserElement = document.getElementById("pointUser");
const pointPcElement = document.getElementById("pointPC");


const gameRules = {
    piedra:{
        papel : true,
        tijera : false
    },
    papel:{
        tijera : true,
        piedra : false
    },
    tijera:{
        tijera : false,
        piedra : true
    },
}
// empiezan los valores en null ya que no hay jugadas empezadas
let userSelection = null;
let pcSelection = null;
let userPoint = 0;
let pcPoint = 0;

// sumando los puntos
const updatePoints= () => {
    pointPcElement.textContent = pcPoint,
    pointUserElement.textContent = userPoint
}

// imprimiendo los resultados 
const printChoise = () =>{
    userPickedElement.textContent = userSelection.toUpperCase();
    pcPickedElement.textContent = pcSelection.toUpperCase();
}
// comprobar el ganador
const checkWinner = () =>{
    if(userSelection === pcSelection){
        resultadoItemElemet.textContent = "Empate";
        return;
    }
    if (gameRules[userSelection][pcSelection]){
        resultadoItemElemet.textContent = "Perdiste Bro"
        pcPoint ++
    }else{
        resultadoItemElemet.textContent = "Ganaste Rey"
        userPoint++
    }
    updatePoints()
}


// opciones de la computadora
const gameOption = ["piedra", "papel","tijera"]
// jugada del ordenador aleatoria
const generateRandomPlay = () =>{
    const randomPlay = Math.floor(Math.random() * gameOption.length);
    const pcPlay = gameOption[randomPlay];
    pcSelection = pcPlay;
    //si sale empate la funcion cumple 
    checkWinner();
    // esto para que imprima la jugadas en la consola console.log(`${userSelection}---${pcSelection}`);
    printChoise();
}


// opciones del jugador 
const setUserSelection = (item) =>{
    userSelection = item;
    generateRandomPlay();
}
// para saber donde hago el click
gameItemElemet.addEventListener("click", evento => {
    // si el evento no tiene la clase game-item que lo saltee
    if(!evento.target.classList.contains(`game-item`)) return;
    // para saber donde hago el click console.log(evento.target.dataset.item);
    setUserSelection(evento.target.dataset.item);
})

