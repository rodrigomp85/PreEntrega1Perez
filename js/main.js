let monto = 0;
let tasa = 0;
let plazo = 0;

function obtenerDatos() {
    let valido = false;
    while (!valido) {
        let input = prompt("Monto del préstamo (Ej: 10000):");
        monto = parseFloat(input);
        if (isNaN(monto) || monto <= 0) {
            alert("Monto inválido.");
        } else {
            valido = true
        }
    }

    valido = false;
    while (!valido) {
        let input = prompt("Tasa de interés anual: ");
        tasa = parseFloat(input);
        if (isNaN(tasa) || tasa < 0) {
            alert("Tasa inválida.");
        } else {
            valido = true
        }
    }

    valido = false;
    while (!valido) {
        let input = prompt("Plazo en años: ");
        plazo = parseInt(input);
        if (isNaN(plazo) || plazo <= 0) {
            alert("Plazo inválido.");
        } else {
            valido = true
        }
    }
}

function calcularPago() {
    const tm = (t / 100) / 12;
    const mt = p * 12;
    let pago = 0;

    if (tm === 0) {
        pago = m / mt;
    } else {
        pago = m * (tm * Math.pow(1 + tm, mt)) / (Math.pow(1 + tm, mt) - 1);
    }
    return pago
}

function mostrarResultado(res) {
    alert('El pago mensual estimado es: $${res.toFixed(2)}')
}

let continuar = true;
while (continuar) {
    obtenerDatos();
    const resultadoPago = calcularPago();
    mostrarResultado(resultadoPago);
    continuar = confirm("¿Otra simulación?")
}

alert("¡Hasta la próxima!")
