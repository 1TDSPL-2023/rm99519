//Atrlandi o evento click ao elemento h2 
// const h2Element = document.getElementById("titulo");

// h2Element.addEventListener("click", ()=>{
    //Math função matemática...
    //Os métodos floor, round e ceil eles arredondam os números passados
    //O método random retorna um número entre 0 e 1. 
    
//     let r = "";
//     let g = "";
//     let b = "";
    
//     r = Math.round(Math.random()*255);
//     g = Math.round(Math.random()*255);
//     b = Math.round(Math.random()*255);
//     console.log(r);
    
//     h2Element.textContent = "Vai toma no cu velho broxa";
//     h2Element.setAttribute("style", `color:rgb(${r},${g},${b});`);

// });

// let frutas = ["uva", "laranja", "banana", "maçã", "kiwi", "abacate"];
// console.log("minhas frutas: " + frutas);

// frutas.forEach((fruta)=>{
//     console.log(fruta);
// })

// let nr1 = [1,2,3,4,5];
// let nr2 = [6,7,8,9,10];

//CONCATENAÇÃO DE ARRAYS
// let nr3 = [nr1,nr2];
// let nr3 =[...nr1,...nr2];
//Imprimindo novo array concatenado.
// console.log("Novo Array: " + nr3);
//Aplicando o forEach no novo array
// nr3.forEach((nr)=>{
//     console.log("Itens do Novo Array: " + nr);
// })

const aElement = document.getElementsByTagName("a");
const aElementArray = [...aElement];
console.log(aElementArray);

//Imprimindo atributos dos elementos recuperados...
aElementArray.forEach((a)=>{
    console.log(a.innerHTML)
})
