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
v_tipooperación = confirm("Ingresar 'Confirmar' si la operación es una compra");
alert ("El hecho de confirmar no implica ninguna obligacion de partes");
saludar('Lorena Marcasoli Agente de Bienes Raices','Lorenamarcasoli@diqmar.com');

console.log(Regiones);
let RegionEliminada = Regiones.pop(); //Elimina GRA-Este por no existir
console.log("Muestra la region eliminada ",RegionEliminada);
console.log("Muestra las regiones que quedaron post eliminación :",Regiones);

Regiones.push('GBA-Norte');
console.log("Muestra las regiones que quedaron push eliminación :",Regiones);

alert("Ingresa el numero de la operación a realizar");
alert("Luego ingresa el monto de la operación");
alert("Te devolveremos un aprox de los gastos");

let operación = prompt(" 1 para compra / 2 alquiler / 3 venta");
let monto = prompt(" ingrese el monto");

if (operación === "3") 
{alert("El porc en concepto de comisión por venta y gastos de escribania es de "+ c_comisionventa*100+ "% segun nuestra simulación sus gastos ascienden aproximadamente a: " + Porcentaje(monto,c_comisionventa));};

if (operación === "2") 
{alert("El porc en concepto de comisión por alquiler y gastos de escribania es de "+ c_comisionalquiler*100+ "% segun nuestra simulación sus gastos ascienden aproximadamente a: " + Porcentaje(monto,c_comisionalquiler));};

if (operación === "1") 
{alert("El porc en concepto de comisión por compra y gastos de escribania es de "+ c_comisioncompra*100+ "% segun nuestra simulación sus gastos ascienden aproximadamente a: " + Porcentaje(monto,c_comisioncompra));};





