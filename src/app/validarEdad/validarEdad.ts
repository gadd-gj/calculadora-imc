export function validar_edad(edad) {
 
    let res = false;

    if (edad < 20) {
        res = true;
    } else {
        res = false;
    }
   
    return res;
}