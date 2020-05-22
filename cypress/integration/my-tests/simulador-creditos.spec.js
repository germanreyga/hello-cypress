let testUrl =
  "https://www.nafin.com/portalnf/content/herramientas-de-negocio/simulador-de-creditos/simulador-de-creditos.do";

describe("https://www.nafin.com/", () => {
  describe("Page loads", () => {
    it("Should load the page", () => {
      cy.visit(testUrl);
    });
  });

  describe("Calculate crédito", () => {
    it("Should ccomplete the form and count the resulting table rows", () => {
      // Fills the #dispDate field and then clicks in the input's label to disappear the calendar
      cy.get("#dispDate").clear().type("05/05/2020");
      cy.contains("Fecha de disposición:").click();

      cy.get("#creditAmount").clear().type(20000);

      cy.get("#paymentMethod").select("1");

      cy.get("#period").select("2");

      cy.get("#rate").clear().type("15.0");

      cy.contains("Calcular").click();

      cy.contains("Ahora no").click();

      let headerTrLength = 1;
      cy.get(".table-responsive ")
        .find("tr")
        .should("have.length", 24 + headerTrLength);
    });
  });
});
