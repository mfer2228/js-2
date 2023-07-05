//linkeo, estás ahí?
console.log ("probandooo");

alert ("Esta es una página por y para estudiantes");
let nombre = prompt ( "¿Cuál es tu nombre?" );
intencion()

 function  intencion () {
  const intenc = prompt ("hola " + nombre + ", te ofrecemos los siguientes servicios:" + "\n1) Generador de citas APA    \n2) minijuego: Adivinanzas    \n3) Calculadora")  
    switch (intenc) {
 case "1":
 
 let citas = [];
  
  function mostrarMenu() {
  
    const opcion = prompt("Ingrese el número de la opción deseada: \n ----- MENÚ ----- \n 1. Agregar cita \n 2. Ver citas en consola \n 3. Eliminar una cita \n 4. Volver al menú anterior"
    );
  
    switch (opcion) {
      case "1":
        solicitarDatosCita()
        mostrarMenu();
        break;

      case "2":
        mostrarCitas()
        alert ("las citas se mostrarán en consola")
        mostrarMenu();
        break;

      case "3":
        eliminarCita()
        alert ("sus cambios serán visibles en consola")
        mostrarCitas()
        mostrarMenu();
        break;

      case "4":
        intencion();
        break;
      default:
        alert ("Opción inválida. Por favor, ingrese un número válido del menú.")
        
        mostrarMenu();
    }
  }
  
  function solicitarDatosCita () {
      const autor = prompt("Ingrese el nombre completo del autor:");
      const fecha = prompt("Ingrese la fecha de publicación (AAAA, MM DD):");
      const titulo = prompt("Ingrese el título del artículo o libro:");
      const fechaConsulta = prompt("Ingrese la fecha de consulta (AAAA, MM DD):");
      const sitioWeb = prompt("Ingrese el nombre del sitio web:");
      const url = prompt("Ingrese la URL del artículo:");
      
      // Formatear el nombre del autor
      const partesAutor = autor.split(" ");
      let nombreAutorFormateado = partesAutor[partesAutor.length - 1];
      
      for (let i = 0; i < partesAutor.length - 1; i++) {
        nombreAutorFormateado += `, ${partesAutor[i].charAt(0)}.`;
      }
      
      // Crear la cita en formato APA
      const cita = `${nombreAutorFormateado} (${fecha}) "${titulo}". Recuperado el ${fechaConsulta} de ${sitioWeb} ${url}`;
      
      // Agregar la cita al array
      citas.push(cita);
  }  
      // Preguntar si desea agregar otra cita
      const agregarOtraCita = confirm("¿Desea agregar una cita?");
  
      if (agregarOtraCita) {
        solicitarDatosCita();
      } else {
        mostrarMenu();
      }
   
  
  function mostrarCitas() {

      console.log("Lista de citas:");
      citas.forEach((cita, index) => {
        console.log(`Cita ${index + 1}:`);
        console.log(cita);
        console.log("----------------------");
      });  }
  
  function eliminarCita() {
    const borrarCita = confirm("¿Desea borrar alguna cita?");
  
    if (borrarCita) {
      const numeroCita = prompt("Ingrese el número de la cita que desea borrar:");
      
      // Verificar si el número de cita es válido
      if (numeroCita >= 1 && numeroCita <= citas.length) {
        citas.splice(numeroCita - 1, 1);
        console.log("La cita ha sido borrada correctamente.");
      } else {
        console.log("Número de cita inválido.");
      }
    }
  }
  
  mostrarMenu();
 
  break;

  case "2":
    alert ("adivina adivinador...")
    numero = Math.random() * 10
    if (numero <= 5) {
    respuesta = prompt ("Si de Covid me curo en dos días y de meninguitis en 4, ¿en cuantos días me curo de sarampión?")
      if (respuesta == "3") {
        alert ("Felicidades!!")
        intencion ()
      }
      
      else if (respuesta != "3", "salir", "esc") {
        respuesta = prompt ("nop, inténtalo de nuevo o tipea: salir")
      }
      
    }

    else {
        respuesta = prompt ("Tengo una caja musical donde entran palabras, pero no entran todas. Sol entra, pero Luna no. Dólar entra, pero Euro no, ¿Micrófono entra? ")
        if (respuesta == "si"){
            alert ("Felicidades " + nombre + " tu respuesta es correcta")
            intencion ()
        }
        else if (respuesta !="si") {
            alert (" Mejor suerte la próxima :( ")
        }
    
    }
    break;

  case "3":
 
 alert ("Hola, esta es una calculadora, no es mucho pero es trabajo honesto")
 let num1 = parseFloat(prompt("Introduce el primer número:"));
 let num2 = parseFloat(prompt("Introduce el segundo número:"));

 let operacion = prompt("¿Qué operación quieres realizar?\n1. Suma\n2. Resta\n3. Multiplicación\n4. División");

 switch (operacion) {
  case "1":
    alert("La suma es: " + (num1 + num2));
    intencion()
    break;
  case "2":
    alert("La resta es: " + (num1 - num2));
    intencion()
    break;
  case "3":
    alert("La multiplicación es: " + (num1 * num2));
    intencion()
    break;
  case "4":
    alert("La división es: " + (num1 / num2));
    intencion()
    break;
  default:
    alert("Opción inválida");
}
 break;

 case "esc":
 alert ("Hasta luego, " + nombre)

}
}