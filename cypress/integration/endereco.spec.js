/// <reference types="cypress" />
import EnderecoPage from '../support/page-objects/endereco.page'

describe('Funcionalidade Endereços - Faturamento e Entrega', () => {
    beforeEach(() => {
        cy.visit('minha-conta')
        cy.fixture('perfil').then(dados => {
            cy.login(dados.usuario, dados.senha)
        })
        
    });

    it('Deve fazer cadastro de faturamento com sucesso', () => {
        EnderecoPage.editarEnderecoFaturamento('Anderson', 'Coitinho', 'Google', 'Brasil', 'Rua XV', '560', 'Jaragua', 'Santa Catarina', '684521-55', '0616451616', 'emaiL@gamil.com')
        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso.')
    });
});