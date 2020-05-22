describe("https://acid.com.mx/", () => {
  describe("Page loads", () => {
    it("Should load the page", () => {
      cy.visit("https://acid.com.mx/");
    });
  });

  describe("Productos destacados", () => {
    it("Should have 'Productos destacados'", () => {
      cy.visit("https://acid.com.mx/");
      cy.contains("PRODUCTOS DESTACADOS");
    });
  });

  describe("Descuentos", () => {
    it("Should have 'Descuentos'", () => {
      cy.visit("https://acid.com.mx/");
      cy.contains("Descuentos").click();

      cy.url().should("include", "/descuentos");
    });
  });
});
