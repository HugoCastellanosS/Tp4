/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio() {
    let vcantLamp;
    let vPrecioLamp = 35;
    let vDto;
    let vMarca;
    let vPrecioparcial;
    let vPreciofinal;
    let vIIBB;

    //A
    vcantLamp = parseFloat(document.getElementById("txtIdCantidad").value);
    vMarca = document.getElementById("Marca").value;
    vPreciofinal = parseFloat(vPreciofinal);

    if (vcantLamp >= 6) {
        vDto = 0.50;
        vPrecioparcial = vPrecioLamp * vcantLamp;
        vPreciofinal = vPrecioparcial - (vPrecioparcial * vDto);

        document.getElementById("txtIdprecioDescuento").value = vPreciofinal;
    }

    //B


    if (vcantLamp == 5 && vMarca == "ArgentinaLuz") {
        vDto = 0.40;
        vPrecioparcial = vPrecioLamp * vcantLamp;
        vPreciofinal = vPrecioparcial - (vPrecioparcial * vDto);
        document.getElementById("txtIdprecioDescuento").value = vPreciofinal
    }

    else if (vcantLamp == 5 && vMarca != "ArgentinaLuz") {
        vDto = 0.30
        vPrecioparcial = vPrecioLamp * vcantLamp;
        vPreciofinal = vPrecioparcial - (vPrecioparcial * vDto);
        document.getElementById("txtIdprecioDescuento").value = vPreciofinal
    }

    //C

    if (vcantLamp == 4 && vMarca == "ArgentinaLuz" || vMarca == "FelipeLamparas") {
        vDto = 0.25;
        vPrecioparcial = vPrecioLamp * vcantLamp;
        vPreciofinal = vPrecioparcial - (vPrecioparcial * vDto);
        document.getElementById("txtIdprecioDescuento").value = vPreciofinal
    }
    else if (vcantLamp == 4 && !(vMarca == "ArgentinaLuz" || vMarca == "FelipeLamparas")) {
        vDto = 0.20;
        vPrecioparcial = vPrecioLamp * vcantLamp;
        vPreciofinal = vPrecioparcial - (vPrecioparcial * vDto);
        document.getElementById("txtIdprecioDescuento").value = vPreciofinal
    }

    //D

    if (vcantLamp == 3 && vMarca == "ArgentinaLuz") {
        vDto = 0.15;
        vPrecioparcial = vPrecioLamp * vcantLamp;
        vPreciofinal = vPrecioparcial - (vPrecioparcial * vDto);
        document.getElementById("txtIdprecioDescuento").value = vPreciofinal
    }
    else if (vcantLamp == 3 && vMarca == "FelipeLamparas") {
        vDto = 0.10;
        vPrecioparcial = vPrecioLamp * vcantLamp;
        vPreciofinal = vPrecioparcial - (vPrecioparcial * vDto);
        document.getElementById("txtIdprecioDescuento").value = vPreciofinal
    }
    else if (vcantLamp == 3 && !(vMarca == "ArgentinaLuz" || vMarca == "FelipeLamparas")) {
        vDto = 0.5;
        vPrecioparcial = vPrecioLamp * vcantLamp;
        vPreciofinal = vPrecioparcial - (vPrecioparcial * vDto);
        document.getElementById("txtIdprecioDescuento").value = vPreciofinal
    }

    //E

    if (vPreciofinal > 120) {
        vIIBB = 10 * vPreciofinal / 100;

        alert("IIBB Usted pagó " + vIIBB);
    }


}
