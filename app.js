// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
    
let mAplicar = [];
function agregarAmigo() {
    
       // document.querySelector("#idIntentar").setAttribute("disabled","true"); 
              let vidNombre=document.getElementById("idNombre");             
              let nombreUsuario=vidNombre.value;             
          if (!nombreUsuario){
               alert("Ingresa un nombre");
               return;
          } 
          mAplicar.push(nombreUsuario);
          vidNombre.value="";
          vidNombre.focus;
          mostrarAmigos();
}
function mostrarAmigos(){
    let listadoAmigos=document.getElementById("idListadoAmigos");
    listadoAmigos.innerHTML="";
 
    for (let i= 0;i<mAplicar.length;i++){
          let vMostrador = document.createElement("li");
          vMostrador.textContent= mAplicar[i];
          listadoAmigos.appendChild(vMostrador);
    }
}                                           
function sortearAmigo(){
    if (mAplicar.length===0){
        alert("No has ingresado nombres de amigos");
        return;
    }
   // Let validandoNombre =
  //  if (mAplicar.includes()){
  //      alert("Elija por favor otro nombre, no es permitido utilizar el mismo nombre");
  //      return;
 //   }
    let amigoSorteado=mAplicar[Math.floor(Math.random()*mAplicar.length)];
    let vResultado = document.getElementById("resultado");
    vResultado.innerHTML=`El amigo secreto es: ${amigoSorteado}`;
    let limpiarLista = document.getElementById("idListaAmigos");
    limpiarLista.innerHTML="";
}