/// <reference types="cypress"/>

context('Listagem', () => {
    it('Sem Listagem com Registros', () => {
        cy.server()
        cy.route({
            method: 'GET',
            url: '**/api/1/databases/userdetails/collections/newtable**',
            status: 200,
            response: 'fixture:web-get-empty-table'
        }).as('getNewTable');

        cy.visit('/WebTable.html')

        cy.get('div[role=row]').should('have.length',1)


    });

    it('Listagem com Registros', () => {
        cy.server()
        cy.route({
            method: 'GET',
            url: '**/api/1/databases/userdetails/collections/newtable**',
            status: 200,
            response: 'fixture:web-get-table'
        })
        cy.visit('/WebTable.html')

        cy.get('div[role=row] div[role=gridcell]').eq(4).find('div').as('gridCell')
        cy.get('@gridCell').should('contain','1234567890')
    });
});