describe("Test our form inputs", function(){

    beforeEach(function(){
        cy.visit("http://localhost:3000/");
    }); 
    it("add text to input", function(){
        cy.get('[data-cy="fName"]').type("Evelyn").should("have.value", "Evelyn");
        cy.get('[data-cy="fName"]').clear();
        cy.get('[data-cy="lName"]').type("Evelyn").should("have.value", "Evelyn");
        cy.get('[data-cy="email"]').type("email@gmail.com").should("have.value", "email@gmail.com"); 
        cy.get('[data-cy="password"]').type("Evelyn1234").should("have.value", "Evelyn1234");
        cy.get('[type="checkbox"]').check().should("be.checked");
        cy.get("form").submit();
        cy.get("#error").should("contain", "First Name is a required field");
        
    
    })
});