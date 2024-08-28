/// <reference types="cypress" />

describe('template spec', () => {
  beforeEach('visitando o site', () => {
    cy.visit('https://www.saucedemo.com')

  })

  it('preencher username, password e login', () => {

    cy.get('[data-test="username"]')
      .type('standard_user')

    cy.get('[data-test="password"]')
      .type('secret_sauce')

    cy.get('[data-test="login-button"]')
      .click()

    cy.get('[data-test="title"]').should('be.visible')

    cy.get(':nth-child(3) > [data-test="inventory-item-description"]')
    cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]')
      .click()

    cy.get('[data-test="shopping-cart-link"]')
      .click()

    cy.get('[data-test="shopping-cart-link"]').should('be.visible')
  });
})
