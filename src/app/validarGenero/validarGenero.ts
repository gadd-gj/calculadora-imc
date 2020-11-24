export function validar_genero(genero){

    let res = false;
    
    if (genero == 'masculino') {
        res = true;
    } else {
        res = false;
    }

    return res;

}