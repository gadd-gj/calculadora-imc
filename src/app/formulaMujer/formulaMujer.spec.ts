import { calcular_imc } from "./formulaMujer";


describe('Pruebas unitarias imc mujer', () => {

    it('Peso=50kg altura=1.50m el imc debe ser igual a 22.2', () => {
        //Arrange
        let res = 0;
        //Act
        res = calcular_imc(50, 1.50);
        //Acert
        expect(res).toBe(22.22222222222222);

    })

    it('Peso=50kg altura=1.56m el imc debe ser igual a 20.5', () => {
        //Arrange
        let res = 0;
        //Act
        res = calcular_imc(50, 1.56);
        //Acert
        expect(res).toBe(20.5456936226167);

        
    })

    it('Peso=85kg altura=1.65m el imc debe ser igual a 31.2', () => {
        //Arrange
        let res = 0;
        //Act
        res = calcular_imc(85, 1.65);
        //Acert
        expect(res).toBe(31.22130394857668);

        
    })

    it('Peso=46kg altura=1.62m el imc debe ser igual 17.5', () => {
        //Arrange
        let res = 0;
        //Act
        res = calcular_imc(46, 1.62);
        //Acert
        expect(res).toBe(17.527815881725342);

        
    })

    it('Peso=40.80kg altura=1.62m el imc debe ser igual 15.5', () => {
        //Arrange
        let res = 0;
        //Act
        res = calcular_imc(40.80, 1.62);
        //Acert
        expect(res).toBe(15.546410608138999);

        
    })


    


});