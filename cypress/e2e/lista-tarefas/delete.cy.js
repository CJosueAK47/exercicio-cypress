/// <reference types="cypress" />

describe('Testes incluir contato', () => {
  it('Deve renderizar 4 vagas', () => {
    cy.visit('https://agenda-contatos-react.vercel.app/')
    cy.get(':nth-child(2) > .sc-gueYoa > .delete').click()
  })
})
