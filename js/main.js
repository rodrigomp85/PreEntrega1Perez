let monto = 0;
let tasa = 0;
let plazo = 0;

function obtenerDatos() {
    let valido = false;
    while (!valido) {
        monto = parseFloat(input);
        if (isNaN(monto) || monto <= 0) {
            alert("Monto inválido.");
        } else {
            valido = true
        }
    }

    valido = false;
    while (!valido) {
        tasa = parseFloat(input);
        if (isNaN(tasa) || tasa < 0) {
            alert("Tasa inválida.");
        } else {
            valido = true
        }
    }

    valido = false;
    while (!valido) {
        plazo = parseInt(input);
        if (isNaN(plazo) || plazo <= 0) {
            alert("Plazo inválido.");
        } else {
            valido = true
        }
    }
}

function calcularPago() {
    const tm = (tasa / 100) / 12;
    const mt = plazo * 12;
    let pago = 0;

    if (tm === 0) {
        pago = monto / mt;
    } else {
        pago = monto * (tm * Math.pow(1 + tm, mt)) / (Math.pow(1 + tm, mt) - 1);
    }
    return pago
}

let continuar = true;
while (continuar) {
obtenerDatos();
const resultadoPago = calcularPago();
mostrarResultado(resultadoPago);
continuar = confirm("¿Otra simulación?")
}

const simulaciones = [];

document.addEventListener("contenidoFormulario", () => {
  const formulario = document.getElementById("formulario");
  const resultadoDiv = document.getElementById("resultado");
  const otraBtn = document.getElementById("otraSimulacion");
  formulario.addEventListener("submit", (e) => {
    e.preventDefault()
  }
  const monto = parseFloat(document.getElementById('monto').value);
  const tasa = parseFloat(document.getElementById('tasa').value);
  const plazo = parseInt(document.getElementById('plazo').value);

  if (isNaN(monto) || monto <= 0 || isNaN(tasa) || tasa < 0 || isNaN(plazo) || plazo <= 0) {
      alert("Por favor, ingrese valores válidos");
      return;
  }

  simulaciones.push({ monto, tasa, plazo });

  const pagoMensual = calcularPago(monto, tasa, plazo);

  resultadoDiv.innerHTML = `El pago mensual estimado es: <strong>$${pagoMensual.toFixed(2)}</strong>`;

  otraBtn.style.display = "inline-block";
});
