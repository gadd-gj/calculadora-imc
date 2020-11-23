import { calcular_imc } from "./formula";


describe('Pruebas unitarias', () => {

    it('Peso=50kg altura=1.50m el imc debe ser igual a 22.2', () => {
       
        let res = 0;
        
        res = calcular_imc(50, 1.50);
       
        expect(res).toBe(22.22222222222222);

    })

    it('Peso=50kg altura=1.56m el imc debe ser igual a 20.5', () => {
       
        let res = 0;
        
        res = calcular_imc(50, 1.56);
       
        expect(res).toBe(20.5456936226167);

        
    })

    it('Peso=85kg altura=1.65m el imc debe ser igual a 31.2', () => {
        
        let res = 0;
       
        res = calcular_imc(85, 1.65);
     
        expect(res).toBe(31.22130394857668);

        
    })

    it('Peso=46kg altura=1.62m el imc debe ser igual 17.5', () => {
       
        let res = 0;
        
        res = calcular_imc(46, 1.62);
     
        expect(res).toBe(17.527815881725342);

        
    })

    it('Peso=40.80kg altura=1.62m el imc debe ser igual 15.5', () => {
      
        let res = 0;
       
        res = calcular_imc(40.80, 1.62);
 
        expect(res).toBe(15.546410608138999);

        
    })


    


});