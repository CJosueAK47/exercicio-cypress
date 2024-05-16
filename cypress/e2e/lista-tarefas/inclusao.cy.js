/// <reference types="cypress" />

describe('Testes incluir contato', () => {
  it('Deve renderizar 4 vagas', () => {
    cy.visit('https://agenda-contatos-react.vercel.app/')

    cy.get('.contato').then((contatos) => {
      const qtdContatos = contatos.length

      cy.get('input[placeholder="Nome"]').type('Carlos Josue')
      cy.get('input[placeholder="E-mail"]').type('Carlos@teste.com')
      cy.get('input[placeholder="Telefone"]').type('98 98257-1953')
      cy.get('.adicionar').click()

      cy.get('.contato').should('have.length', qtdContatos + 1)
    })
  })
})
