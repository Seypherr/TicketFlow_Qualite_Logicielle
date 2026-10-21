import { sortTicketsByTitle } from "../src/ticket-utils.js";

describe("Tri des tickets par titre", () => {
  test("classe les titres accentués dans l'ordre français A–Z", () => {
    // Arrange
    const tickets = ["zèbre", "Alpha", "école"].map((title) => ({ title }));

    // Act
    const sorted = sortTicketsByTitle(tickets, "title");

    // Assert
    expect(sorted.map((ticket) => ticket.title)).toEqual([
      "Alpha",
      "école",
      "zèbre",
    ]);
  });

  test("ne modifie pas le tableau de départ lors du tri A–Z", () => {
    // Arrange
    const tickets = ["zèbre", "Alpha", "école"].map((title) => ({ title }));
    const originalOrder = [...tickets];

    // Act
    const sorted = sortTicketsByTitle(tickets, "title");

    // Assert
    expect(tickets).toEqual(originalOrder);
    expect(sorted).not.toBe(tickets);
  });

  test.each([undefined, "creation"])(
    "conserve l'ordre de création avec le mode %j, même après un affichage A–Z",
    (mode) => {
      // Arrange
      const tickets = ["zèbre", "Alpha", "école"].map((title) => ({ title }));
      sortTicketsByTitle(tickets, "title");

      // Act
      const result = sortTicketsByTitle(tickets, mode);

      // Assert
      expect(result.map((ticket) => ticket.title)).toEqual([
        "zèbre",
        "Alpha",
        "école",
      ]);
    },
  );

  test("ignore la casse et conserve l'ordre relatif des titres équivalents", () => {
    // Arrange
    const tickets = ["Beta", "ALPHA", "alpha"].map((title) => ({ title }));

    // Act
    const sorted = sortTicketsByTitle(tickets, "title");

    // Assert
    expect(sorted.map((ticket) => ticket.title)).toEqual([
      "ALPHA",
      "alpha",
      "Beta",
    ]);
  });
});
