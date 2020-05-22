describe("https://www.yotepresto.com/prestamos-en-linea", () => {
  describe("Load prestamo", () => {
    it("Should show the text 'Nuestra mejor tasa", () => {
      cy.visit("https://www.yotepresto.com/prestamos-en-linea");

      cy.contains("Entendido").click();

      cy.get("#amount").clear().type(25000);

      cy.get("#loan_term").select("24");

      cy.contains("Nuestra mejor tasa").should("be.visible");
    });
  });
});
