export function calcular_imc(peso, altura) {
    
    altura =  altura * altura;
    
    let imc = peso / (altura);
    
    return imc;

}
