//funciones de cada problema
function Suma() {
    const valor1 = document.getElementById("num1_suma").value
    const valor2 = document.getElementById("num2_suma").value
    const valor3 = document.getElementById("num3_suma").value

    const op = parseFloat(valor1) + parseFloat(valor2) + parseFloat(valor3);
    
    document.getElementById("resultado_suma").innerText = "La suma de los valores ingresados es: " + op;
}

function Cuadrado() {
    const valor = document.getElementById("valor_cuadrado").value;

    const op_cuadrado = parseFloat(valor) * 2;

    document.getElementById("resultado_cuadrado").innerText = "El cuadrado de " + valor + " es: " + op_cuadrado;
}

function Promedio(){
    const nombre = document.getElementById("nombre_estudiante").value;
    const cal1 = document.getElementById("valor1_calificacion").value;
    const cal2 = document.getElementById("valor2_calificacion").value;
    const cal3 = document.getElementById("valor3_calificacion").value;

    const op_promedio = (parseFloat(cal1) + parseFloat(cal2) + parseFloat(cal3)) / 3;

    document.getElementById("resultado_promedio").innerText = "El promedio de " + nombre + " es: " + op_promedio ;
}

function Conversion() {
    const valor_conversion = document.getElementById("valor_unidades").value;

    const op_cm = parseFloat(valor_conversion)*100
    const op_km = parseFloat(valor_conversion)/1000

    document.getElementById("resultado_conversion").innerText = valor_conversion + " Metros equivalen a " + op_cm + "Centímetros y " + op_km + "en kilómetros";
}

function Comparacion(){
    const num1_comparacion = document.getElementById("valor1_comparacion").value;
    const num2_comparacion = document.getElementById("valor2_comparacion").value;
    const distancia = Math.abs(num1_comparacion - num2_comparacion);

    if(num1_comparacion < num2_comparacion)
        {
            document.getElementById("resultado_comparacion").innerText = "El numero mayor es " + num1_comparacion + ", el menor es " + num2_comparacion + " y su diferencia es " + distancia;
        }
    else if(num1_comparacion > num2_comparacion)
        {
            document.getElementById("resultado_comparacion").innerText = "El numero mayor es " + num2_comparacion + ", el menor es " + num1_comparacion + " y su diferencia es " + distancia;
        }
    else
        {
            document.getElementById("resultado_comparacion").innerText = "Resultado: los dos valores son iguales (" + num1_comparacion + "). Distancia entre ambos: 0";
        }

}