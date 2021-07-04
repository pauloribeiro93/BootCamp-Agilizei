/// <reference types="cypress"/>
let Chance = require('chance');
let chance = new Chance();

context('Primeiro Cadastro', () => {
    it('Cadastro de usuario no site', () => {

        //Rotas
       // /api/1/databases/userdetails/collections/newtable?apiKey=YEX0M2QMPd7JWJw_ipMB3a5gDddt4B_X
      // /api/1/databases/userdetails/collections/usertable?apiKey= 
        cy.server()
      cy.route('POST','**/api/1/databases/userdetails/collections/newtable?**' )
      .as('postNewTable');

      cy.route('GET','**/Languages.json**' ).as('getJson');

      cy.route('POST','**/api/1/databases/userdetails/collections/usertable?**')
      .as('postUserDeatails');

      cy.route('GET', '**/api/1/databases/userdetails/collections/newtable**')
      .as('getNewTable');

      cy.route('GET','**/getconfig/sodar?sv=200&tid=gda&tv=r20210630&st=env**' ).as('teste');

        cy.visit('Register.html');
        cy.get('input[ng-model="FirstName"]').type(chance.first())
        cy.get('input[ng-model="LastName"]').type(chance.last())
        cy.get('input[ng-model="EmailAdress"]').type(chance.email())
        cy.get('input[ng-model="Phone"]').type(chance.phone({ formatted: false }))

        cy.get('input[value="Male"]').check();
        cy.get('input[type="checkbox"]').check('Cricket');
        cy.get('input[type="checkbox"]').check('Hockey');

        cy.get('select#Skills').select('Javascript');
        cy.get('select#countries').select('Argentina');
        cy.get('select#country').select('Australia', { force: true });
        cy.get('select#yearbox').select('1996');
        cy.get('select[ng-model^=month]').select('February');
        cy.get('select#daybox').select('18');

        cy.get('input[id="firstpassword"]').type('Paulo@2021')
        cy.get('input[id="secondpassword"]').type('Paulo@2021')

        cy.get('input#imagesrc').attachFile('Motoca.jpg')

        cy.get('#submitbtn').click()

        cy.wait('@getNewTable').then((resNewTable) =>{
            console.log(resNewTable.status)
            cy.log(resNewTable.status)
            expect(resNewTable.status).to.eq(null)
        })

        cy.wait('@getJson').then((resJson) =>{
            console.log(resJson.status)
            cy.log(resJson.status)
            expect(resJson.status).to.eq(200)
        })

        cy.get('.nav > :nth-child(3) > a').click()

        cy.wait('@teste').then((restes) => {
            expect(restes.status).to.eq(200)
        })

        cy.url().should('contain','WebTable')

       
    });

});

