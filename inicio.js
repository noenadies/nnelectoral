

$(document).ready(function(){
    inicia();

  });
var firebase;

function inicia(){
    onclikidRegistrar();

    
  


    var config = {
        apiKey: "AIzaSyBKLmOH3Xt9X6_pwqSW3BsRp0C3zk8E2lc",
        authDomain: "electoralp-af8c6.firebaseapp.com",
        databaseURL: "https://electoralp-af8c6-default-rtdb.firebaseio.com",
        projectId: "electoralp-af8c6",
        storageBucket: "electoralp-af8c6.appspot.com",
        messagingSenderId: "413440407514",
        appId: "1:413440407514:web:a556a649f61e05bd51b2e3",
        measurementId: "G-17TYS0S1V5"
      };
      firebase.initializeApp(config);


      traer();

}


var idhijostodo="idhijostodo";
var classactivo="classactivo";
function ocultartodoslosdiv(){ 
    closeNav();
ocultardiv(idmenuregistrar);
ocultardiv(idmenubuscarr);
   
 }
var idmenuregistrar="idmenuregistrar";
var idmenubuscarr="idmenubuscarr";
var hiceclickenregistrar=true;
var hiceidBuscar=true;
function onclikidRegistrar(){




    $("#idRegistrar").click(function(){
           
          ocultartodoslosdiv(); 
           mostrardiv(idmenuregistrar);

      });


      $("#idBuscar").click(function(){ 
          ocultartodoslosdiv();
 
          mostrardiv(idmenubuscarr);
    
          });



          $("#idbtsubir").click(function(){ 
            llnardform();
    if(elformulariolisto){
        traervotantesparasubir();
    }
    else{

        alert2("no llame no sube nada");
    }
           
      
            });
  
$("#idbtalert2").click(function(){ 
 ocultardiv("idmensaje");
   
  });         
  $("#idbtLimpiar").click(function(){ 
fidbtLimpiar   ();
      
     });      
                      

}



function ocultardiv(idx){
    try {
        document.getElementById(idx).style.display="none";
    } catch (error) {
        
    }


}



function mostrardiv(idx){
try {
    document.getElementById(idx).style.display="flex";
} catch (error) {
    
}
   
}

var divtodo="idtodo";
function creardivregistrar(){
var strregistrar="";
fadddiv(divtodo);
}

 function fadddiv(idelemento,str){
    $("#"+idelemento).append(str);
}




function traer(){
    firebase.database().ref().child(String("usuarios")).on("value", function(snapshot) {
  
      var  todolodeadminfire=snapshot.val();
      traervotantes();
  
console.log(todolodeadminfire);
    }, function (errorObject) {
      console.log("The read failed: " + errorObject.code);
    });
  }

var nombre="n11111111";
var papellido="papellido";
var sapellido="sapellido";
var cedula=1119886131;
var departamento="ciundin";
var municipio="bogota";
var puesto="puesto";
var direccion="direcion";
var mesa=21;
var fecha=1235555;
var referido="referido";
var movil=44444;
var email="email";
var facebook="facebook";
var vlat=1111111111;
var vlng=2222;
var idreferido="idreferido";
var notauser="notauser";
var notareferido="notareferido";

var boolpuedoubir=false;
var idfirevotantes="votantes";



var arraifireabeidfirevotantes=[];
 function subirvotantes(){


    boolpuedoubir=true;
    for(var i in  arraifireabeidfirevotantes){
        if(cedula==arraifireabeidfirevotantes[i].cedula){
            boolpuedoubir=false;

        }
     //   console.log(arraifireabeidfirevotantes[i].cedula);
             }
             console.log("boolpuedoubir");
console.log(boolpuedoubir);
  if(boolpuedoubir){

    if(elformulariolisto){
        var  persona={nombre:nombre,papellido:papellido,sapellido:sapellido,cedula:cedula,departamento:departamento,municipio:municipio,puesto:puesto,
            direccion:direccion,mesa:mesa,fecha:fecha, referido:referido,movil:movil,email:email,facebook:facebook,
            referido:referido,idreferido:idreferido,notauser:notauser,notareferido:notareferido,lat:vlat,lng:vlng};
        firebase.database().ref().child(idfirevotantes).push(persona);
        alert2("subio");

    }
 else{

    alert2("no subio faltaron datos");
 }


 }
 else{

    alert2("esta cedula ya existe " + cedula);
 }

  }

  function traervotantes(){
    firebase.database().ref().child(String(idfirevotantes)).on("value", function(snapshot) {
        arraifireabeidfirevotantes=[];
     arraifireabeidfirevotantes=snapshot.val();
 


     
    }, function (errorObject) {
      console.log("The read failed: " + errorObject.code);
    });
  }


  function traervotantesparasubir(){
    firebase.database().ref().child(String(idfirevotantes)).on("value", function(snapshot) {
        arraifireabeidfirevotantes=[];
     arraifireabeidfirevotantes=snapshot.val();
 
     subirvotantes();
    
    }, function (errorObject) {
      console.log("The read failed: " + errorObject.code);
    });
  }

var elformulariolisto=false;
  function llnardform(){

    elformulariolisto=true;

    nombre="";
    papellido="";
    sapellido="";
    cedula="";
    departamento="";
    municipio="";
    puesto="";
    direccion="";
    mesa="";
    idreferido="";
    movil="";
    email="";
    facebook="";
    vlat="";
    vlng="";
    notareferido="";
    notauser="";
    nombre=document.getElementById("idnombre").value;
    papellido=document.getElementById("idpapellido").value;
    sapellido=document.getElementById("idsapellido").value;
    cedula=document.getElementById("idCedula").value;
    departamento=document.getElementById("idDepartamento").value;
    municipio=document.getElementById("idMunicipio").value;
    puesto=document.getElementById("idPuestov").value;
    direccion=document.getElementById("idDireccion").value;
    mesa=document.getElementById("idMesa").value;
    movil=document.getElementById("idtelefono").value;
    idreferido=document.getElementById("idReferido").value;
    facebook= document.getElementById("idfacebook").value;
    email= document.getElementById("idemail").value;
    vlat= document.getElementById("idLatitud").value;
    vlng= document.getElementById("idLongitud").value;
    notauser= document.getElementById("idNotasv").value;
if(nombre==""){
    elformulariolisto=false;
}
if(papellido==""){
    elformulariolisto=false;
}
if(sapellido==""){
    elformulariolisto=false;
}
if(cedula==""){
    elformulariolisto=false;
}

if(departamento==""){
    elformulariolisto=false;

}  
if(municipio==""){
    elformulariolisto=false;
}
if(puesto==""){
    elformulariolisto=false;
}
if(mesa==""){
    elformulariolisto=false;
}
    console.log(cedula);

    
  }

  function alert2(st){
    // mostrardiv("idmensaje");
      document.getElementById("idmensaje").style.display="flex";
document.getElementById("idpmensaja").innerHTML=st;
    



  }

  function fidbtLimpiar(){
document.getElementById("idnombre").value="";
    document.getElementById("idpapellido").value="";
   document.getElementById("idsapellido").value="";
document.getElementById("idCedula").value="";
    document.getElementById("idDepartamento").value="";
document.getElementById("idMunicipio").value="";
   document.getElementById("idPuestov").value="";
    document.getElementById("idDireccion").value="";
document.getElementById("idMesa").value="";
document.getElementById("idReferido").value="";

document.getElementById("idtelefono").value="";
document.getElementById("idfacebook").value="";
document.getElementById("idemail").value="";
document.getElementById("idLatitud").value="";

document.getElementById("idLongitud").value="";

document.getElementById("idNotasv").value="";
  }