//linkeo, estás ahí?
console.log ("probandooo");

alert ("Esta es una página por y para estudiantes");
let nombre = prompt ( "¿Cuál es tu nombre?" );

alert ("hola " + nombre + ", te ofrecemos los siguientes servicios:" + "\n1) Generador de citas APA    \n2) minijuego: Adivinanzas    \n3) Calculadora");



do { 
    intencion = prompt ("Ingresa  1, 2, o 3")
             
    switch (intencion) {
 case "1":
    alert ( "Bienvenido al generador de citas bibliográficas web APA, por favor ingresa los datos que te pediremos a continuación")
    let titulo = prompt("nombre de el artículo que quieres citar")
    let sitio = prompt("nombre del sitio que contiene el artículo")
    let apellido = prompt("Apellido del autor del artículo")
    let inicial = prompt("Inicial del nombre del autor del artículo")
    let fecha = prompt("Año en que el artículo fue publicado")
    let consulta = prompt("Fecha en la cual el artículo fue consultado Ejemplo: 22 de mayo de 2019")
    let url = prompt ("Por último, ingresa la url del sitio a citar")

    alert ("tu cita en formato APA es: " + apellido + " " + inicial + " (" + fecha + ")" + " " + titulo + ". " + "Recuperado el " + consulta + ", de " + sitio  + url)

    

  break;

 case "2":
    alert ("adivina adivinador...")
    numero = Math.random() * 10
    if (numero <= 5) {
    respuesta = prompt ("Si de Covid me curo en dos días y de meninguitis en 4, ¿en cuantos días me curo de sarampión?")
      if (respuesta == "3") {
        alert ("Felicidades!!")
      }
      
      else if (respuesta != "3", "salir", "esc") {
        respuesta = prompt ("nop, inténtalo de nuevo o tipea: salir")
      }
      
    }

    else {
        respuesta = prompt ("Tengo una caja musical donde entran palabras, pero no entran todas. Sol entra, pero Luna no. Dólar entra, pero Euro no, ¿Micrófono entra? ")
        if (respuesta == "si"){
            alert ("Felicidades " + nombre + " tu respuesta es correcta")
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
    break;
  case "2":
    alert("La resta es: " + (num1 - num2));
    break;
  case "3":
    alert("La multiplicación es: " + (num1 * num2));
    break;
  case "4":
    alert("La división es: " + (num1 / num2));
    break;
  default:
    alert("Opción inválida");
}



 case "esc":
 alert ("Hasta luego, " + nombre)
 

 }
} while (intencion != "1", "2", "3", esc);  

