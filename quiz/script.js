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
let pontos = 30;
function corAleatoria() {
  return arrayCores[Math.floor(Math.random() * arrayCores.length)];
}

const main = () => {
  let cont = 2;
  let intervalo = setInterval(()=>{
    h1Timer.innerHTML = cont;
    cont--;
    pontos -= 10;
    console.log(pontos);
  },1000)
  let timer = setTimeout(()=>{
    clearInterval(intervalo)
    youLose();

  },3000)
  let arrayValores = [
    corAleatoria(),
    corAleatoria(),
    corAleatoria(),
  ];
  for (let i = 0; i < arrayValores.length; i++) {
    for (let j = i+1; j < arrayValores.length; j++) {
        if(arrayValores[i] == arrayValores[j]){
            arrayValores[j] = corAleatoria();
            i = 0;
            
        }
    }
  }
  btn1.style.order = Math.floor(Math.random() * arrayOrders.length);
  btn2.style.order = Math.floor(Math.random() * arrayOrders.length);
  btn3.style.order = Math.floor(Math.random() * arrayOrders.length);

  cor.innerHTML = arrayValores[0];
  cor.style.color = arrayValores[1];

  btn1.innerHTML = arrayValores[0];
  btn2.innerHTML = arrayValores[1];
  btn3.innerHTML = arrayValores[2];

  function youLose(){
    clearInterval(intervalo);
    clearTimeout(timer);
    cor.innerHTML = "Você perdeu";
    cor.style.color = "red";
    btn2.style.display = "none";
    btn1.innerHTML = "Jogar novamente";
    btn3.innerHTML = "ver Ranking";
    btn1.style.backgroundColor = "blue";
    btn3.style.backgroundColor = "blue";
    pScore.innerHTML = `Total de pontos = ${pontos}`;
    btn3.addEventListener('click',()=>{
      window.location.href = "/quiz/ranking.html";
    });
  
    btn1.addEventListener('click',()=>{
      btn2.style.display = "flex";
      btn1.style.backgroundColor = "black";
      btn2.style.backgroundColor = "black";
      btn3.style.backgroundColor = "black";
      pScore.innerHTML = "";
      main();
    });
    
  }

  btn2.addEventListener('click',()=>{
    clearTimeout(timer);
    cont = 3;
    pontos = pontos * 5;
    console.log(pontos);
    main();
  })
  btn1.addEventListener('click',()=>{
    youLose();
  });
  btn3.addEventListener('click',()=>{
    youLose();
  });
};

main();