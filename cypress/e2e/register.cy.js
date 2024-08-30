/// <reference types="cypress" />

describe('Template Spec - Testes de Cadastro e Fluxo de Compra', () => {

  beforeEach('Visitando o site e fazendo login', () => {
    cy.visit('https://www.saucedemo.com');

    // Login com usuário padrão
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('[data-test="login-button"]')
      .click()

    // Verifica se o login foi bem-sucedido
    cy.get('[data-test="title"]').should('be.visible');
  });

  it('Fazendo compra e logout', () => {

    cy.get(':nth-child(3) > [data-test="inventory-item-description"]')
    cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]')
      .click()

    cy.get('[data-test="shopping-cart-link"]')
      .click()

    cy.get('[data-test="shopping-cart-link"]').should('be.visible')
    cy.get('[data-test="checkout"]')
      .click()

    //Preencher dados e prosseguir
    cy.get('[data-test="firstName"]').type('standard')
    cy.get('[data-test="lastName"]').type('user')
    cy.get('[data-test="postalCode"]').type('00000-000')
    cy.get('[data-test="continue"]')
      .click()

    //Finalizar pedido
    cy.get('#finish')
      .click()

    //Voltando a home
    cy.get('#back-to-products')
      .click()
    cy.get('[data-test="inventory-container"]').should('be.visible')

    //Logout da conta
    cy.get('#react-burger-menu-btn')
      .click()
    cy.get('[data-test="logout-sidebar-link"]')
      .click()
  })

})