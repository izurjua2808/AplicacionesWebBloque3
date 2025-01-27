function mitad(frase) {
    document.write("Primera mitad de la frase: ");
    for (let f = 0; f < frase.length / 2; f++) {
        document.write(frase.charAt(f));
    }
    document.write("<br><br>");
}

function ultimoCaracter(frase) {
    document.write("Ultimo carácter de la frase: ");
    document.write(frase.charAt(frase.length - 1));
    document.write("<br><br>");
}

function imprimirInverso(frase) {
    document.write("De forma inversa: ");
    for (let f = 0; f < frase.length; f++) {
        document.write(frase.charAt(frase.length - f - 1));
    }
    document.write("<br><br>");
}

function imprimirConGuion(frase) {
    document.write("Separados por guión:");
    for (let f = 0; f < frase.length; f++) {
        document.write(frase.charAt(f) + "-");
    }
    document.write("<br><br>");
}

function cantidadVocales(frase) {
    let cant = 0;
    for (let f = 0; f < frase.length; f++) {
        if (frase.charAt(f) == "a" ||
            frase.charAt(f) == "e" ||
            frase.charAt(f) == "i" ||
            frase.charAt(f) == "o" ||
            frase.charAt(f) == "u" ||
            frase.charAt(f) == "A" ||
            frase.charAt(f) == "E" ||
            frase.charAt(f) == "I" ||
            frase.charAt(f) == "O" ||
            frase.charAt(f) == "U") {
            cant++;
        }
    }
    document.write("Numero de vocales" + cant);
}


let frase = prompt("Introduce una palabra o frase: ");
document.write(frase);
document.write("<br><br>");
mitad(frase);
ultimoCaracter(frase);
imprimirInverso(frase);
imprimirConGuion(frase);
cantidadVocales(frase);