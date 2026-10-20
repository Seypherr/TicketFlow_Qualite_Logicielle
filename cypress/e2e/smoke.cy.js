describe("TicketFlow — smoke", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get('[data-cy="reset"]').click();
  });
  it("crée un ticket simple", () => {
    cy.get('[data-cy="ticket-title"]').type("VPN inaccessible");
    cy.get('[data-cy="ticket-severity"]').select("3");
    cy.get('[data-cy="create-ticket"]').click();
    cy.contains("VPN inaccessible").should("be.visible");
    cy.contains("Ticket créé.").should("be.visible");
  });
});
