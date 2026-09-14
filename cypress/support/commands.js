Cypress.Commands.add('fillMandatoryFieldsAndSubmit', () => {
    cy.get('#firstName').type('DEU CERTO')
    cy.get('#lastName').type('Pereira Bazeia')
    cy.get('#email').type("gustopb@hotmail.com")
    cy.get('#phone').type('9941023')
    cy.get('#product').select(3)
    cy.get(':nth-child(3) > input').click()
    cy.get('#email-checkbox').click()
    cy.get('#open-text-area').type("MUITO FACIL ISSO AQUI")
    cy.get('.button').click()
    cy.get('.success').should("be.visible")
})
Cypress.Commands.add("marcaotipodeatendimento",()=>{
    cy.get('input[type="radio"][value="ajuda"]').check()
    cy.get('input[type="radio"][value="elogio"]').check()
    cy.get('input[type="radio"][value="feedback"]').check()

})