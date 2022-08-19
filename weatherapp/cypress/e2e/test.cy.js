describe("Testklasse weatherapplicatie", () => {
    it("go to week forecast", () =>{
        cy.visit("http://localhost:3000")
        cy.get("[data-cy=week_btn]").click();
    })
    it("draait de applicatie", () => {
        cy.visit('http://localhost:3000/contact')
        cy.get("h1").should("exist");
    })
  })