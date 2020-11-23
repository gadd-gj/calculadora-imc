import { validar_edad } from './validarEdad';


describe ('Pruebas unitarias', () => {

    it('19 es menor que 20 debe ser true', () => {

        let res = null;

        res = validar_edad(19);

        expect(res).toBe(true);

    })


    it('40 es mayor que 20 debe de ser false', () => {

        let res = null;

        res = validar_edad(40);

        expect(res).toBe(false);

    })

    it('21 es mayor que 20 debe ser false', () => {

        let res = null;

        res = validar_edad(21);

        expect(res).toBe(false);

    })

    it('20 es igual que 20 debe ser false', () => {

        let res = null;

        res = validar_edad(20);

        expect(res).toBe(false);

    })


    it('15 es menor que 20 debe ser true', () => {

        let res = null;

        res = validar_edad(15);

        expect(res).toBe(true);

    })

});