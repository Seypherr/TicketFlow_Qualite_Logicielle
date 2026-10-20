Cypress.Commands.add("resetDb", () => {
  cy.window().then((window) =>
    window.localStorage.removeItem("ticketflow:tickets"),
  );
  cy.reload();
});

Cypress.Commands.add("seedTickets", (tickets) => {
  cy.window().then((window) =>
    window.localStorage.setItem("ticketflow:tickets", JSON.stringify(tickets)),
  );
  cy.reload();
});
