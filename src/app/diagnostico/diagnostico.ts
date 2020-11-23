export function validar_diagnostico(imc) {
    let res = "";
    
    if (imc < 18.5) {
        res = "Bajo peso";
    } else if (imc >= 18.5 && imc <= 24.9) {
        res = "Peso normal";
    } else if (imc >= 25 && imc <=29.9) {
        res = "Sobrepeso";
    } else if (imc >= 30 && imc <= 34.9) {
        res = "Obesidad de primer grado";
    } else if (imc >= 35 && imc <=39.9) {
        res = "Obesidad de segundo grado";
    } else if (imc >= 40) {
        res = "Obesidad de tercer grado";
    }

    return res;
}