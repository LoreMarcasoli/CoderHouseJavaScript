// =======================
// Constantes
// =======================
const c_razonSocial = "Diqmar";
const c_comisionventa = 0.03;
const c_comisioncompra = 0.04;
const c_comisionalquiler = 0.015;
const fechaActual = new Date();

// =======================
// Variables
// =======================
let v_tipooperación = "Compra";
let v_nombre_apellido;
let Regiones = ["GBA-Sur", "GBA-Oeste", "GBA-Este"];
let v_localidad;
let v_aniosActividad;

// =======================
// Declaración de funciones
// =======================

function DarBienvenida(c_razonSocial, v_tipooperación) {
  console.log("Le damos la bienvenida a operar con " + c_razonSocial);
  console.log("Usted necesita realizar un tipo de operación de " + v_tipooperación + "?");
}

function obtenerAnoActual() {
  const fechaActual = new Date();
  return fechaActual.getFullYear();
}

function AniosActividad() {
  for (let i = 2001; i <= obtenerAnoActual(); i++) {
    v_aniosActividad = i - 2001;
  }
  console.log("Estamos operando en el rubro inmobiliario hace " + v_aniosActividad + " años");
}

function saludar(nombre, email) {
  console.log("Te estás contactando con " + nombre);
  console.log("Te dejo mi correo para que puedas comentarme tu necesidad: " + email);
}

function Porcentaje(v_monto, v_comision) {
  return v_monto * v_comision;
}

// =======================
// Invocación inicial
// =======================
DarBienvenida(c_razonSocial, v_tipooperación);
AniosActividad();
saludar("Lorena Marcasoli Agente de Bienes Raices", "Lorenamarcasoli@diqmar.com");

// Modificación del array Regiones
let RegionEliminada = Regiones.pop(); // Elimina GBA-Este por no existir
Regiones.push("GBA-Norte");

// =======================
// Captura de elementos del HTML
// =======================
const select = document.getElementById("select");
const input = document.getElementById("input");
const provincia = document.getElementById("selectProvincias");
const button = document.getElementById("boton");
const resultado = document.getElementById("resultado");

// =======================
// Cargar JSON y poblar el select de provincias
// =======================
let comisiones = [];

fetch("comisiones.json")
  .then((response) => response.json())
  .then((data) => {
    comisiones = data;

    data.forEach((item) => {
      const option = document.createElement("option");
      option.value = item.provincia;
      option.textContent = item.provincia;
      provincia.appendChild(option);
    });

    const provinciaGuardada = localStorage.getItem("provincia");
    if (provinciaGuardada) provincia.value = provinciaGuardada;
  })
  .catch((error) => console.error("Error cargando JSON:", error));

// =======================
// Cargar valores almacenados
// =======================
window.addEventListener("DOMContentLoaded", () => {
  const seleccionGuardada = localStorage.getItem("operacion");
  const montoGuardado = localStorage.getItem("monto");

  if (seleccionGuardada) select.value = seleccionGuardada;
  input.value = montoGuardado ? montoGuardado : 0;
});

// =======================
// Función para mostrar resultado
// =======================
const mostrarResultado = (opcion, monto, provinciaElegida) => {
  const provinciaData = comisiones.find((p) => p.provincia === provinciaElegida);

  if (!provinciaData) {
    resultado.innerText = "Provincia no encontrada.";
    return;
  }

  let comisionOptada = 0;

  if (opcion === "Vender") comisionOptada = provinciaData.v1;
  if (opcion === "Comprar") comisionOptada = provinciaData.v2;
  if (opcion === "Alquilar") comisionOptada = provinciaData.v3;

  resultado.innerHTML = `La operación de <strong>${opcion}</strong> en la provincia de <strong>${provinciaElegida}</strong>  tiene una comisión aproximada de <strong>$${(monto * comisionOptada) / 100}</strong>, equivalente a un porcentaje de comisión de: <strong>${comisionOptada} %</strong>`;
};

// =======================
// Evento del botón
// =======================
button.addEventListener("click", () => {
  const monto = parseFloat(input.value);
  const opcionSeleccionada = select.value;
  const provinciaSeleccionada = provincia.value;

  localStorage.setItem("operacion", opcionSeleccionada);
  localStorage.setItem("monto", monto);
  localStorage.setItem("provincia", provinciaSeleccionada);

  if (isNaN(monto) || monto <= 0) {
    alert("Por favor ingresa un monto válido antes de continuar.");
    input.focus();
    return;
  }

  mostrarResultado(opcionSeleccionada, monto, provinciaSeleccionada);
});
