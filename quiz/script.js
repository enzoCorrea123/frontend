const cor = document.getElementById("cor");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
let arrayOrders = [0, 1, 2];
let arrayCores = [
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

const main = () => {
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

  btn2.addEventListener('click',()=>{
    main();
  })
  btn1.addEventListener('click',()=>{
    //perder
  });
  btn1.addEventListener('click',()=>{
    //perder
  });
};
main();
function corAleatoria() {
  return arrayCores[Math.floor(Math.random() * arrayCores.length)];
}

//verificar cores: nome da cor precisa aparecer em um botao, cor da fonte precisa aparecer em outro botao,
//e uma cor aleatoria no último botão
