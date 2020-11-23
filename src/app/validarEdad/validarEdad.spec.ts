import { validar_edad } from './validarEdad';


describe ('Pruebas unitarias', () => {

    it('19 es menor que 20 debe ser true', () => {
        //Arrange
        let res = null;
        //Act
        res = validar_edad(19);
        //Assert
        expect(res).toBe(true);

    })


    it('40 es mayor que 20 debe de ser false', () => {
        //Arrange
        let res = null;
        //Act
        res = validar_edad(40);
        //Assert
        expect(res).toBe(false);

    })

    it('21 es mayor que 20 debe ser false', () => {
        //Arrange
        let res = null;
        //Act
        res = validar_edad(21);
        //Assert
        expect(res).toBe(false);

    })

    it('20 es igual que 20 debe ser false', () => {
        //Arrange
        let res = null;
        //Act
        res = validar_edad(20);
        //Assert
        expect(res).toBe(false);

    })


    it('15 es menor que 20 debe ser true', () => {
        //Arrange
        let res = null;
        //Act
        res = validar_edad(15);
        //Assert
        expect(res).toBe(true);

    })

});