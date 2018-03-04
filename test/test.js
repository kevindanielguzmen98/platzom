const expect  = require('chai').expect
const platzom = require('..').default

describe('#platzom', function () {
    it('Si la palabra termina en ar se eliminan esas dos letras', function () {
        const traslation = platzom('Programar')
        expect(traslation).to.equal('Program')
    })
    it('Si la palabra empieza con "z" se añade "pe" al final', function () {
        const traslation = platzom('Zorro')
        const traslation1 = platzom('Zarpar')
        expect(traslation).to.equal('Zorrope')
        expect(traslation1).to.equal('Zarppe')
    })
    it('Si la palabra tiene 10 o mas caracteres se separa parte y se concatena con un "-"', function () {
        const traslation = platzom('Programador')
        expect(traslation).to.equal('Progra-mador')
    })
    it('Si la palabra es un palindromo se intercala entre mayuscula y minuscula', function () {
        const traslation = platzom('bob')
        expect(traslation).to.equal('BoB')
    })
})