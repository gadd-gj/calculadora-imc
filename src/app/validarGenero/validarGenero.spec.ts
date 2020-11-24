import { validar_genero } from "./validarGenero";

describe ('Pruebas unitarias', () => {

    it('Masculino true',() => {
        //Arrange
        let res = null;
        //Act
        res=validar_genero('masculino');
        //Acert
        expect(res).toBe(true);

    })

    it('Femenino falso', () => {
        //Arrange
        let res = null;
        //Act
        res = validar_genero('femenino');
        //Acert
        expect(res).toBe(false);
    })

});