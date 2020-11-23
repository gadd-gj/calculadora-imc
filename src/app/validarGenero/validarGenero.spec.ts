import { validar_genero } from "./validarGenero";

describe ('Pruebas unitarias', () => {

    it('Masculino true',() => {

        let res = null;

        res=validar_genero('masculino');

        expect(res).toBe(true);

    })

    it('Femenino falso', () => {
        let res = null;
        res = validar_genero('femenino');
        expect(res).toBe(false);
    })

});