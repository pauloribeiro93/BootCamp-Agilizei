/// <reference types="cypress"/>


Given(/^que acesso o site não possui registros$/, () => {
	cy.server()
	cy.route({
		method: 'GET',
		url: '**/api/1/databases/userdetails/collections/newtable**',
		status: 200,
		response: 'fixture:web-get-empty-table'
	}).as('getNewTable');

});

When(/^acessar a Listagem$/, () => {
	cy.visit('/WebTable.html')
});

Then(/^devo visualziar a listagem vazia$/, () => {
	cy.get('div[role=row]').should('have.length',1)
});



Given(/^que acesso o site para visualizar os registros$/, () => {
	cy.server()
	cy.route({
		method: 'GET',
		url: '**/api/1/databases/userdetails/collections/newtable**',
		status: 200,
		response: 'fixture:web-get-table'
	})
});


Then(/^devo visualziar a listagem com apenas um registro$/, () => {
	cy.get('div[role=row] div[role=gridcell]').eq(4).find('div').as('gridCell')
	cy.get('@gridCell').should('contain','1234567890')
});

