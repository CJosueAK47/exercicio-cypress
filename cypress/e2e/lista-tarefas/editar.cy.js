/// <reference types="cypress" />

describe('Testes editar um contato', () => {
  it('Deve renderizar 4 vagas', () => {
    cy.visit('https://agenda-contatos-react.vercel.app/')
    cy.get(':nth-child(2) > .sc-gueYoa > .edit').click()

    cy.get('[type="text"]').clear()
    cy.get('[type="text"]').type('Joao Romao')

    cy.get('[type="email"]').clear()
    cy.get('[type="email"]').type('joao@teste.com')

    cy.get('[type="tel"]').clear()
    cy.get('[type="tel"]').type('98 94567-3421')

    cy.get('.alterar').click()

  })
})
