describe('teste', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/');
    });

    it('deve verificar input',() =>{
        cy.get('input').should('have.length',3)
    })

    it('deve preencher o formulario', () => {
        cy.get('input[placeholder="Nome"]').type('teste teste');
        cy.get('input[placeholder="E-mail"]').type('teste@teste');
        cy.get('input[placeholder="Telefone"]').type('11-9823891723');
        cy.get('.adicionar').click();
        
       });


       it('deve editar o formulario', ()=>{
        cy.get(':nth-child(2) > .sc-gueYoa > .edit')

       })
      

       it('deve editar o formulario', ()=>{
        cy.get(':nth-child(2) > .sc-gueYoa > .delete')

       })

   
   
  

   
});




