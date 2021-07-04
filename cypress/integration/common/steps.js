// steps/ Passos Comuns para mais de uma features
Given(/^que acesso o site$/, () => {
    cy.server()
    cy.route('POST', '**/api/1/databases/userdetails/collections/newtable?**')
        .as('postNewTable');

    cy.route('GET', '**/Languages.json**').as('getJson');

    cy.route('POST', '**/api/1/databases/userdetails/collections/usertable?**')
        .as('postUserDeatails');

    cy.route('GET', '**/api/1/databases/userdetails/collections/newtable**')
        .as('getNewTable');

    cy.route('GET', '**/getconfig/sodar?sv=200&tid=gda&tv=r20210630&st=env**').as('teste');

    cy.visit('Register.html');
});
