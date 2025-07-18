let monto = 0;
let tasa = 0;
let plazo = 0;

const formulario = document.getElementById("formulario");
const resultadoDiv = document.getElementById("resultado");
const otraBtn = document.getElementById("otraSimulacion");

const simulaciones = [];

formulario.addEventListener("submit", function(e) {
    e.preventDefault();

    const monto = parseFloat(document.getElementById('monto').value);
    const tasa = parseFloat(document.getElementById('tasa').value);
    const plazo = parseInt(document.getElementById('plazo').value);

    if (isNaN(monto) || monto <= 0 || isNaN(tasa) || tasa < 0 || isNaN(plazo) || plazo <= 0) {
        alert("Por favor, ingrese valores válidos.");
        return;
    }

    const pagoMensual = calcularPago(monto, tasa, plazo);
    mostrarResultado(pagoMensual);

    simulaciones.push({ monto, tasa, plazo });

    otraBtn.style.display = "inline-block";
    });

    otraBtn.addEventListener("click", function() {
    formulario.reset();
    resultadoDiv.innerHTML = "";
    otraBtn.style.display = "none";
    });

    function calcularPago(monto, tasa, plazo) {
    const tm = (tasa / 100) / 12;
      const mt = plazo * 12;

    if (tm === 0) return monto / mt;
      return monto * (tm * Math.pow(1 + tm, mt)) / (Math.pow(1 + tm, mt) - 1);
    }

    function mostrarResultado(pago) {
    resultadoDiv.innerHTML = `El pago mensual estimado es: <strong>$${pago.toFixed(2)}</strong>`;
    }