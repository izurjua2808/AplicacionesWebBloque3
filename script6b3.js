function calcularprecio()
{
      
    var seleccion=document.getElementById("Pizza");
    var cantidad=document.getElementById("cant").value
    var precioPizza=document.getElementById("PrecioTotal")
    var precioSeleccionado=seleccion.options[seleccion.selectedIndex].value;
    var total= cantidad * precioSeleccionado
    document.getElementById("total").value=total;
}
