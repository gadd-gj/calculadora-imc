import { validar_diagnostico } from "./diagnostico";


describe ('Pruebas unitarias', () => {

    it('IMC=17 - Bajo peso',()=> {

        let res = "";

        res = validar_diagnostico(17);

        expect(res).toBe("Bajo peso");

    })

    it('IMC=28.1 - Sobrepeso', () => {

        let res = "";

        res = validar_diagnostico(28.1);

        expect(res).toBe("Sobrepeso");

    })

    it('IMC=32.4 - Obesidad de primer grado', () => {

        let res = "";

        res = validar_diagnostico(32.4);
        
        expect(res).toBe("Obesidad de primer grado");
        
    })

    it('IMC=35 - Obesidad de segundo grado', () => {

        let res = "";

        res = validar_diagnostico(35);

        expect(res).toBe("Obesidad de segundo grado");


    })

    it('IMC=43 - obesidad de tercer grado', () => {

        let res = "";

        res = validar_diagnostico(43);

        expect(res).toBe("Obesidad de tercer grado");

    })

});