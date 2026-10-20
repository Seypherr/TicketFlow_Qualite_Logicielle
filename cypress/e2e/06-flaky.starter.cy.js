// TP6 : retirer `.skip` scénario par scénario. Ces exemples sont délibérément mauvais.
describe.skip("TP6 A — attente fixe", () => {
  it("ferme le premier ticket", () => {
    cy.visit("/");
    cy.get('[data-cy="reset"]').click();
    cy.get('[data-cy="ticket-title"]').type("Connexion VPN");
    cy.get('[data-cy="create-ticket"]').click();
    cy.contains("Connexion VPN").should("be.visible");
    cy.get(".ticket:nth-child(1) .close-btn").click();
    cy.wait(100);
    cy.get(".ticket:nth-child(1)").should("contain", "CLOSED");
  });
});

describe.skip("TP6 B — ordre implicite", () => {
  it("prépare un ticket pour le test suivant", () => {
    cy.visit("/");
    cy.get('[data-cy="reset"]').click();
    cy.get('[data-cy="ticket-title"]').type("Imprimante");
    cy.get('[data-cy="create-ticket"]').click();
  });
  it("utilise le ticket du test précédent", () => {
    cy.visit("/");
    cy.contains("Imprimante").should("be.visible");
  });
});

describe.skip("TP6 C — état partagé", () => {
  it("suppose que le navigateur ne contient aucun ancien ticket", () => {
    cy.visit("/");
    cy.get('[data-cy="ticket-card"]').should("have.length", 0);
  });
});

describe.skip("TP6 D — sélecteur structurel", () => {
  it("ouvre un détail par sa position dans le DOM", () => {
    cy.visit("/");
    cy.get('[data-cy="reset"]').click();
    cy.get('[data-cy="ticket-title"]').type("Messagerie");
    cy.get('[data-cy="create-ticket"]').click();
    cy.get(
      ".tickets > article:nth-child(1) > div:nth-child(2) > button:nth-child(1)",
    ).click();
    cy.get('[data-cy="detail-status"]').should("have.text", "OPEN");
  });
});
