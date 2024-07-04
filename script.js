let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
let action = ['ate', 'peed', 'crushed', 'broke'];
let what = ['my homework', 'my phone', 'the car'];
let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];


const contenedorExcusas=document.querySelector(".contenedor-excusas");

function generadorExcusa(){
    const parrafoExcusa=document.querySelector(".parrafo-excusa");
    parrafoExcusa.remove();
    
    let nuevaExcusa=`${who[Math.floor(Math.random()*4)]} ${action[Math.floor(Math.random()*4)]} ${what[Math.floor(Math.random()*4)]} ${when[Math.floor(Math.random()*5)]}`;
    
    parrafoExcusa.textContent=nuevaExcusa;

    contenedorExcusas.appendChild(parrafoExcusa);
}    

