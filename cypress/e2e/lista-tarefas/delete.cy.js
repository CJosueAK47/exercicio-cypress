/// <reference types="cypress" />

describe('Testes excluir contato', () => {
  it('Deve renderizar 4 vagas', () => {
    cy.visit('https://agenda-contatos-react.vercel.app/')
    cy.get('.contato').then((contatos) => {
      const qtdContatos = contatos.length
      cy.get(':nth-child(2) > .sc-gueYoa > .delete').click()

      cy.get('.contato').should('have.length', qtdContatos - 1)

    })
  })
})
