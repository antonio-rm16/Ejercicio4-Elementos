function pagename(){
  let ruta = window.location.pathname;
  let page = ruta.substring(ruta.lastIndexOf('/') + 1,ruta.length);
    if (page===""){
      return "index.html";
     else{
   return page;}}
let pagina = pagename();
alert(pagina);
//Selección
let btnr1 = document.getElementById('ej1')
let btnr2 = document.getElementById('ej2');
let btnr3 = document.getElementById('ej3');

//Eventos
btnr1.addEventListener('click',linkr1);
btnr2.addEventListener('click',linkr2);
btnr3.addEventListener('click',linkr3);

//Acciones
function linkr1(){window.open("./index.html","_self");}  
function linkr2(){window.open("./reto2.html","_self");} 
function linkr3(){window.open("./reto3.html","_self");} 

switch (pagina){
  case "index.html":
    btnr1.disabled=true;btnr1.style.cursor="auto";
    btnr1.style.color="gray"; btnr1.style.backgroundColor="lightgray";
    btnr1.style.borderBlockColor="gray"; btnr1.style.boxShadow="none";
  break;
  case "reto2.html":
    btnr2.disabled=true;btnr2.style.cursor="auto";
    btnr2.style.color="gray"; btnr2.style.backgroundColor="lightgray";
    btnr2.style.borderBlockColor="gray"; btnr2.style.boxShadow="none";
  break;
  case "reto3.html":
    btnr3.disabled=true;btnr3.style.cursor="auto";
    btnr3.style.color="gray"; btnr3.style.backgroundColor="lightgray";
    btnr3.style.borderBlockColor="gray"; btnr3.style.boxShadow="none";
  break;
  default:  
  break;
}

