/**
 * Testes automatizados
 *
 * @author Marcos Vaz
 */

/**
 * Carrega as bibliotecas que vamos utilizar
 */
var should = require("should");
var request = require("request");
var chai = require("chai");
var expect = chai.expect;
var urlBase = "http://localhost:3000";

// Caso de teste
describe("Teste API Marmitas", function () {
    it("Deve receber marmitas", function (done) {
        request.get(
            {
                url: urlBase + "/marmitas"
            },
            function (error, response, body) {

                var _body = {};
                try {
                    _body = JSON.parse(body);
                }
                catch (e) {
                    _body = {};
                }

                // valida se a resposta do status foi 200
                expect(response.statusCode).to.equal(200);

                // valida se é maior que 1
                expect(_body).lengthOf.to.be.gte(1);

                done(); 
            }
        );
    });

    it("Marmita deve possuir os campos 'nome', 'descrição', 'preço', 'ingredientes', 'estoque', 'url da imagem' e 'desconto'", function (done) {
        request.get(
            {
                url: urlBase + "/marmitas"
            },
            function (error, response, body) {

                var _body = {};
                try {
                    _body = JSON.parse(body);
                }
                catch (e) {
                    _body = {};
                }

                // valida se a resposta do status foi 200
                expect(response.statusCode).to.equal(200);

                // valida se todos os elementos possuem os campos
                for (i = 0; i <= expect(_body).lengthOf; i++){
                    (_body[i]).should.have.property('nm_name');
                    (_body[i]).should.have.property('ds_description');
                    (_body[i]).should.have.property('nr_price');
                    (_body[i]).should.have.property('ds_ingredients');
                    (_body[i]).should.have.property('nr_stock');
                    (_body[i]).should.have.property('ds_image_url');
                    (_body[i]).should.have.property('nr_discount');
                }

                done();
            }
        );
    });

    it("Ao adicionar uma marmita, deve receber o id adicionado", function (done) {
        request
            .post(
                {
                    url: urlBase + "/marmitas/add"
                },
                function (error, response, body) {

                    var _body = {};
                    try {
                        _body = JSON.parse(body);
                    }
                    catch (e) {
                        _body = {};
                    }

                    // valida se a resposta do status foi 200
                    expect(response.statusCode).to.equal(200);

                    // valida se é um número
                    expect(_body).lengthOf.to.be.a('number');

                    done(); 
                }
            );
    });
});