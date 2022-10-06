const{it,describe}=require("mocha")
const expect = require('chai').expect;
let archivoValidar=require('./validar.js')
describe("pruebaSuma",()=>{
    it("El resutado es 6",()=>{
        const result=archivoValidar.suma(3,3)
        expect(result).to.be.equal(234)
    })
    it("prueba el correo ",()=>{
        const result=archivoValidar.validarCorreo("hola@gmail.com")
        expect(result).to.be.equal(true)
    })
})