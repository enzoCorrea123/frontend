const cor = document.getElementById("cor");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const h1Timer = document.getElementById("timer");
const pScore = document.getElementById('score');
const arrayOrders = [0, 1, 2];
const arrayCores = [
  "Red",
  "Yellow",
  "Green",
  "Pink",
  "Purple",
  "Orange",
  "Brown",
  "Blue",
  "Black",
  "Gray",
];

btn1.style.order = arrayOrders[0];
btn2.style.order = arrayOrders[1];
btn3.style.order = arrayOrders[2];

function corAleatoria() {
  return arrayCores[Math.floor(Math.random() * arrayCores.length)];
}

let arrayValores = [
  corAleatoria(),
  corAleatoria(),
  corAleatoria(),
];

let pontos = 0;
let cont = 2;
let intervalo = setInterval(()=>{
  console.log('intervalo')
  h1Timer.innerHTML = cont;
  cont--;
  
},1000)
let timer = setTimeout(()=>{
  clearInterval(intervalo)
  youLose();

},3000)
  
function valores(){
  console.log('valores');
  for (let i = 0; i < arrayValores.length; i++) {
    for (let j = i+1; j < arrayValores.length; j++) {
      console.log('entrou for')
        if(arrayValores[i] == arrayValores[j]){
            arrayValores[j] = corAleatoria();
            i = 0;
        }
    }
  }
}

function ordemBotoes(){
  console.log('ordem botoes');
  btn1.style.order = Math.floor(Math.random() * arrayOrders.length);
  btn2.style.order = Math.floor(Math.random() * arrayOrders.length);
  btn3.style.order = Math.floor(Math.random() * arrayOrders.length);
}
function cores(){
  console.log('cores');
  cor.innerHTML = arrayValores[0];
  cor.style.color = arrayValores[1];

  btn1.innerHTML = arrayValores[0];
  btn2.innerHTML = arrayValores[1];
  btn3.innerHTML = arrayValores[2];
}

function youLose(){
  console.log('youlose');
  clearInterval(intervalo);
  clearTimeout(timer);
  cor.innerHTML = "Você perdeu";
  cor.style.color = "red";
  btn2.style.display = "none";
  btn1.innerHTML = "Jogar novamente";
  btn3.innerHTML = "ver Ranking";
  btn1.style.backgroundColor = "blue";
  btn3.style.backgroundColor = "blue";
  pScore.innerHTML = `Total de pontos: ${pontos}`;

  btn1.removeEventListener('click',errou);
  btn3.removeEventListener('click',errou);
  btn3.addEventListener('click',()=>{//ver ranking
    window.location.href = "/quiz/ranking.html";
  });

  btn1.addEventListener('click',()=>{//jogar novamente
    btn2.style.display = "flex";
    btn1.style.backgroundColor = "black";
    btn2.style.backgroundColor = "black";
    btn3.style.backgroundColor = "black";
    pScore.innerHTML = "";
    pontos = 0;
    cont = 3;
    for(let i=0;i<arrayValores.length;i++){
      arrayValores[i] = corAleatoria();
    }
    intervalo = setInterval(()=>{
      h1Timer.innerHTML = cont;
      cont--;
      
    },1000);
    timer = setTimeout(()=>{
      clearInterval(intervalo)
      youLose();
    
    },3000);
    cores();
    valores();
    ordemBotoes();
    btn1.removeEventListener('click',arguments.callee);
  });
  
}


function errou(){
  console.log('errou');
  youLose();
  
}
function acertou(){
  console.log('acertou');
  clearInterval(intervalo);
  clearTimeout(timer);
  cont = 3;
  pontos++;
  intervalo = setInterval(()=>{
    h1Timer.innerHTML = cont;
    cont--;
    
  },1000);
  timer = setTimeout(()=>{
    clearInterval(intervalo)
    youLose();
  
  },3000);
  cores();
  valores();
  ordemBotoes();
  btn2.removeEventListener('click',acertou);
}

btn2.addEventListener('click', acertou);
btn1.addEventListener('click',errou);
btn3.addEventListener('click',errou);

cores();
valores();
ordemBotoes();