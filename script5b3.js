function mostrarPrecioPizza() {
    document.getElementById("mensaje").value =
        document.getElementById("pizza").options[document.getElementById("pizza").selectedIndex].value;
}