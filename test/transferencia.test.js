const request = require('supertest');
const { expect } = require('chai')
require('dotenv').config()
const { obterToken } = require ('../helpers/autenticacao')

describe('Transferências', () => {
    describe('POST /transferencias', () => {
        it('Deve retornar sucesso com 201 quando o valor da transferência for igual ou acima de R$10,00', async () => {
            const token = await obterToken('julio.lima','123456')

            const resposta = await request(process.env.BASE_URL)
                .post('/transferencias')
                .set('Authorization', 'Bearer ' + token) //set('Authorization', `Bearer ${token}`) 
                .set('Content-Type', 'application/json')
                .send({
                    contaOrigem: 1,
                    contaDestino: 2,
                    valor: 11,
                    token: ""
                })

                 expect(resposta.status).to.be.equal(201);

                 console.log(resposta.body)

        })        

        it('Deve retornar falha com 422 quando o valor da transferência for abaixo de R$10,00', async () => {
            const token = await obterToken('julio.lima','123456')

            const resposta = await request(process.env.BASE_URL)
                .post('/transferencias')
                .set('Authorization', 'Bearer ' + token) //set('Authorization', `Bearer ${token}`) 
                .set('Content-Type', 'application/json')
                .send({
                    contaOrigem: 1,
                    contaDestino: 2,
                    valor: 9,
                    token: ""
                })

                 expect(resposta.status).to.be.equal(422);

                 console.log(resposta.body)
        })
    })
})