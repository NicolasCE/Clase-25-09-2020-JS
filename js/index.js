var alumno = {
    nombre: "Carlos",
    edad: 23,
    carrera: "Analista Programador",
    ramosAprobados: ["Fundamentos", "Matematica", "Ingles", "Base de datos"],
    direccion: {
      calle: "Avenida siempre viva",
      numero: 3030,
      ciudad: "Talca",
    },
    tieneMascotas: true,
  };
  

  var frutas = ["PERA", "MANZANA", "MELON", "SANDIA", "LIMON"];
  cargarFrutas();
  cargarDatosCarlos();
  
  var boton_buscar = document.getElementById("bt_buscar");
  var boton_nuevo = document.getElementById("bt_nuevo");
  
  boton_buscar.addEventListener("click", () => {
    var txt1 = document.getElementById("txt1");
    var resp1 = document.getElementById("resp1");
    var esta = frutas.includes(txt1.value.toUpperCase());
  
    if (esta) {
      resp1.innerHTML = "La fruta esta en la colección";
    } else {
      resp1.innerHTML = "La fruta no encontrada :(";
    }
  });
  
  boton_nuevo.addEventListener("click", () => {
    var txt2 = document.getElementById("txt2");
    var resp2 = document.getElementById("resp2");
  
    var esta = frutas.includes(txt2.value.toUpperCase());
  
    if (esta) {
      //innerHTML = "La fruta ya esta en la coleccion";
      alert("fruta ya existe");
    } else {
      frutas.push(txt2.value.toUpperCase());
    }
  
    cargarFrutas();
  });
  
  function cargarFrutas() {
    var caja = document.getElementById("caja_frutas");
  
    var html = "Mis Frutas <ul>";
    frutas.forEach((item) => {
      html += "<li>" + item + "</li>";
    });
    html += "</ul>";
  
    caja.innerHTML = html;
  }

function cargarDatosCarlos(){
  var datos = document.getElementById("datos_carlos");
  datos.innerHTML = "Nombre: " + alumno.nombre + "<br>";
  datos.innerHTML += "Edad: " + alumno.edad + "<br>";
  datos.innerHTML += "Carrera: " + alumno.carrera + "<br>";
  //datos.innerHTML += "Ramos AP: " + alumno.ramosAprobados + "<br>";
  datos.innerHTML += "Ramos Aprobados: <br>";
  alumno.ramosAprobados.forEach(item=>{
    datos.innerHTML  += "<li>" + item + "</li>";
  
  });
  datos.innerHTML +=
    "Direccion:" +
    alumno.direccion.calle +
    " " +
    alumno.direccion.numero +
    " " +
    alumno.direccion.ciudad +
    "<br>";
  datos.innerHTML += alumno.tieneMascotas
    ? "tiene mascotas"
    : "no tiene mascotas";

}


