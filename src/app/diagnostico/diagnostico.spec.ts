import { validar_diagnostico } from "./diagnostico";


describe ('Pruebas unitarias', () => {

    it('IMC=17 - Bajo peso',()=> {

        //act
        let res = "";
        //Arange
        res = validar_diagnostico(17);
        //Assert
        expect(res).toBe("Bajo peso");

    })

    it('IMC=28.1 - Sobrepeso', () => {

        //Act
        let res = "";
        //Arrange
        res = validar_diagnostico(28.1);
        //Assert
        expect(res).toBe("Sobrepeso");

    })

    it('IMC=32.4 - Obesidad de primer grado', () => {
        //Act
        let res = "";
        //Arrange
        res = validar_diagnostico(32.4);
        //Assert
        expect(res).toBe("Obesidad de primer grado");
        
    })

    it('IMC=35 - Obesidad de segundo grado', () => {
        //Act
        let res = "";
        //Arrange
        res = validar_diagnostico(35);
        //Assert
        expect(res).toBe("Obesidad de segundo grado");


    })

    it('IMC=43 - obesidad de tercer grado', () => {
        //Act
        let res = "";
        //Arrange
        res = validar_diagnostico(43);
        //Assert
        expect(res).toBe("Obesidad de tercer grado");

    })

});