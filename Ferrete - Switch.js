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

    let vCantLamparas;
    let vPrecioParcial;
    let vPrecioFinal;
    let vDescuento;
    let vTipoLampara;
    let vImpuestoIIBB;
    let vPrecioLampara=35;
    
    vTipoLampara = document.getElementById("Marca").value;
    vCantLamparas = parseFloat(document.getElementById("txtIdCantidad").value);
    

    if (vCantLamparas > 0) 
    {

        switch (vCantLamparas) 
        {
            case 1:
            case 2:
                vPrecioFinal = (vCantLamparas * vPrecioLampara);
                document.getElementById("txtIdprecioDescuento").value = vPrecioFinal;
                break;
            case 3:
                if (vTipoLampara == "ArgentinaLuz") {
                    vPrecioParcial = (vCantLamparas * vPrecioLampara)
                    vDescuento = 0.15;
                    vPrecioFinal = (vPrecioParcial - (vPrecioParcial * vDescuento));

                    document.getElementById("txtIdprecioDescuento").value =vPrecioFinal;
                }
                else if (vTipoLampara == "FelipeLamparas") 
                {
                    vPrecioParcial = (vCantLamparas * vPrecioLampara)
                    vDescuento = 0.10;
                    vPrecioFinal = (vPrecioParcial - (vPrecioParcial * vDescuento));

                    document.getElementById("txtIdprecioDescuento").value = vPrecioFinal;
                }
                else if (vTipoLampara != "FelipeLamparas" && vTipoLampara != "ArgentinaLuz") 
                {
                    vPrecioParcial = (vCantLamparas * vPrecioLampara)
                    vDescuento = 0.05;
                    vPrecioFinal = (vPrecioParcial - (vPrecioParcial * vDescuento)).toFixed(2);

                    document.getElementById("txtIdprecioDescuento").value =vPrecioFinal;
                }
                break;
            case 4:
                if (vTipoLampara == "ArgentinaLuz" || vTipoLampara == "FelipeLamparas") 
                {
                    vPrecioParcial = (vCantLamparas * vPrecioLampara)
                    vDescuento = 0.25;
                    vPrecioFinal = (vPrecioParcial - (vPrecioParcial * vDescuento));

                    document.getElementById("txtIdprecioDescuento").value = vPrecioFinal;
                }
                else 
                {
                    vPrecioParcial = (vCantLamparas * vPrecioLampara)
                    vDescuento = 0.20;
                    vPrecioFinal = (vPrecioParcial - (vPrecioParcial * vDescuento));

                    document.getElementById("txtIdprecioDescuento").value = vPrecioFinal;
                }
            case 5:
                if (vTipoLampara == "ArgentinaLuz") 
                {
                    vPrecioParcial = (vCantLamparas * vPrecioLampara)
                    vDescuento = 0.40;
                    vPrecioFinal = (vPrecioParcial - (vPrecioParcial * vDescuento));

                    document.getElementById("txtIdprecioDescuento").value = vPrecioFinal;
                }
                else if (vTipoLampara != "ArgentinaLuz") 
                {
                    vPrecioParcial = (vCantLamparas * vPrecioLampara)
                    vDescuento = 0.30;
                    vPrecioFinal = (vPrecioParcial - (vPrecioParcial * vDescuento));

                    document.getElementById("txtIdprecioDescuento").value = vPrecioFinal;
                }
            case 6:

                vPrecioParcial = (vCantLamparas * vPrecioLampara)
                vDescuento = 0.50;
                vPrecioFinal = (vPrecioParcial - (vPrecioParcial * vDescuento));
                document.getElementById("txtIdprecioDescuento").value = vPrecioFinal;
                break;

            default:
                if (vCantLamparas > 6) 
                {
                    vPrecioFinal = (vCantLamparas * vPrecioLampara);
                    vPrecioFinal = parseFloat(vPrecioFinal);

                    if (vPrecioFinal > 120) 
                    {

                        vImpuestoIIBB = (vPrecioFinal * 0.10);
                        vPrecioFinal = (vPrecioFinal + vImpuestoIIBB); 

                        document.getElementById("txtIdprecioDescuento").value = vPrecioFinal;
                        alert("Usted pagó" + vPrecioFinal);

                    }
                }

                break;
        }



    }
    else {
        alert("El numero ingresado no es válido.");
    }

}

