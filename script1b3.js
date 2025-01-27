function cargar(vec) {
    for (let f = 0; f < vec.length; f++) {
        let valor = prompt("Introduce numero");
        vec[f] = parseInt(valor);
    }
}

function sumar(vec) {
    let suma = 0;
    for (let f = 0; f < vec.length; f++) {
        suma = suma + vec[f];
    }
    document.write("Valor acumulado de los numeros: " + suma + '<br>');
}

function sumarMayor36(vec) {
    let suma = 0;
    for (let f = 0; f < vec.length; f++) {
        if (vec[f] > 36) {
            suma = suma + vec[f];
        }
    }
    document.write("Valor acumulado de los numeros mayores de 36: " + suma + '<br>');
}

function cantidadMayores50(vec) {
    let cant = 0;
    for (let f = 0; f < vec.length; f++) {
        if (vec[f] > 50) {
            cant = cant + 1;
        }
    }
    document.write("Cantidad de numeros mayores de 50: " + cant + '<br>');
}

let vec = new Array(8);
cargar(vec);
sumar(vec);
sumarMayor36(vec);
cantidadMayores50(vec);