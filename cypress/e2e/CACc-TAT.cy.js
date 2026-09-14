describe('template spec', () => {
  beforeEach(() => {
    cy.visit('./src/index.html')

  })
  it('Verifica o titulo da aplicação', () => {
    cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
  })

  it('preencher os campos', () => {
    cy.get('#firstName').type('Gustavo')
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
  it("teste de valor nao numerico no campo telefone", () => { 
    cy.get('#phone').type('aberc').should('have.value','')


  })
  it('Envia o formuario com sucesso usando um comando customizado',()=>{
    cy.fillMandatoryFieldsAndSubmit()
    cy.get('.success').should('be.visible')
  })
  it('exibe mensagem de erro ao submeter o formulario sem preencher os campos obrigatoiso',()=>{
    cy.fillMandatoryFieldsAndSubmit()

    //parei no exercicio0 na 03.md
    

  })
  it("marca o tipo de atendimento",()=>{
    cy.marcaotipodeatendimento()
    

  })
  it('testando each e wrap',()=>{
    cy.get('input[type="radio"]')
    .each(opcoes=>{
      cy.wrap(opcoes)
      .check()
      .should('be.checked')
    })
  })
  it('marca ambos checkboxes, depois desmarca o último',()=>{
    cy.get("input[type='checkbox']").check().should('be.checked').last().uncheck().should('not.be.checked')
    //proximo capitulo 06.md
  })
  it("seleciona um arquivo da pasta fixtures",()=>{
    cy.get('#file-upload').selectFile('cypress/fixtures/example.json')
    
  })

  it("seleciona um arquivo simulando um drag-and-drop",()=>{
    cy.get('#file-upload').selectFile('cypress/fixtures/example.json', { action: 'drag-drop' })
    
  })
  it("seleciona um arquivo utilizando uma fixture para a qual foi dada um alias",()=>{
    cy.fixture("example.json").as('sampleFile')
    cy.get('#file-upload').selectFile('@sampleFile')
    .should(input=>{
      expect(input[0].files[0].name).to.equal('example.json')
    })

  })
  it("verifica que a política de privacidade abre em outra aba sem a necessidade de um clique",()=>{
    cy.contains('a','Política de Privacidade')
    .should('have.attr','href','privacy.html')
    .and('have.attr','target','_blank')

    
  })
  it.only('testa a página da política de privacidade de forma independente',()=>{
     cy.contains('a','Política de Privacidade')
     .invoke('removeAttr','target')
     .click()
     cy.contains('h1','CAC TAT - Política de Privacidade').should("be.visible")


  })




})