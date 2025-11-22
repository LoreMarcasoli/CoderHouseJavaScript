//Constantes
const c_razonSocial= "Diqmar";
const c_comisionventa = 0.03;
const c_comisioncompra = 0.04;
const c_comisionalquiler = 0.015;
const fechaActual = new Date();

//Variables
let v_tipooperación= "Compra";
let v_nombre_apellido ;
let Regiones = ['GBA-Sur', 'GBA-Oeste', 'GBA-Este'];
let v_localidad;
let v_aniosActividad;

//Declaraciones
function DarBienvenida (c_razonSocial,v_tipooperación)
{//Cuerpo de funcion
    console.log("Le damos la bienvenidad a operar con " + c_razonSocial)
    console.log("Usted necesita realizar un tipo de operación de " +v_tipooperación + "?")}

function obtenerAnoActual() {
  const fechaActual = new Date();
  return fechaActual.getFullYear();
}

function AniosActividad(){

    for (let i = 2001; i <= obtenerAnoActual(); i++) 
        { v_aniosActividad = i-2001; }
          console.log("Estamos operando en el rubro inmobiliario hace " +v_aniosActividad + " años")}

function saludar (nombre,email)
{//Cuerpo de funcion
    console.log("Te estas contactando con " + nombre)
    console.log("Te dejo mi correo para que puedas comentarme tu necesidad " + email)}

function Porcentaje (v_monto,v_comision)
{return v_monto*v_comision}


//Invocación
DarBienvenida (c_razonSocial,v_tipooperación);
AniosActividad();
saludar('Lorena Marcasoli Agente de Bienes Raices','Lorenamarcasoli@diqmar.com');

console.log(Regiones);
let RegionEliminada = Regiones.pop(); //Elimina GRA-Este por no existir
console.log("Muestra la region eliminada ",RegionEliminada);
console.log("Muestra las regiones que quedaron post eliminación :",Regiones);

Regiones.push('GBA-Norte');
console.log("Muestra las regiones que quedaron push eliminación :",Regiones);


const select = document.getElementById("select");
const input = document.getElementById("input");
const button = document.getElementById("boton");
const resultado = document.getElementById("resultado");

window.addEventListener("DOMContentLoaded", () => {
    const seleccionGuardada = localStorage.getItem("operacion");
    const montoGuardado = localStorage.getItem("monto");
    if (seleccionGuardada) {
        select.value = seleccionGuardada;
    }
    if (montoGuardado) {
        input.value = montoGuardado;
    }
    else{input.value = 0;}
});


console.log("valor guardado lore"+select.value);
console.log(input);
console.log(button);

let contador = 0;

button.addEventListener ("click", ()=>{
    const monto = parseFloat(input.value);
    const opcionSeleccionada = select.value;
    localStorage.setItem("operacion", opcionSeleccionada);
    localStorage.setItem("monto", monto);

   if (isNaN(monto) || monto <= 0) {
        alert("Por favor ingresa un monto válido antes de continuar.");
        input.focus(); // Lleva el foco al input
        return; // Detiene la ejecución del resto del código
    } 

    if (opcionSeleccionada=="Vender") {
        resultado.innerText = "La operacion de Vender tiene una comision aproximada de " + monto * c_comisionventa;
        return;
    }

    if (opcionSeleccionada=="Comprar") {
        resultado.innerText = "La operacion de Comprar tiene una comision aproximada de " + monto * c_comisioncompra;
        return;
    }

    if (opcionSeleccionada=="Alquilar") {
        resultado.innerText = "La operacion de Aluilar tiene una comision aproximada de " + monto * c_comisionalquiler;
        return;
    }    

});




