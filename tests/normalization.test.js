import { normalizeTicketTitle } from "../src/ticket-utils.js";

describe("Normalisation du titre", () => {
  test.each([
    ["transforme null en titre vide", null, ""],
    ["transforme un titre blanc en titre vide", "   ", ""],
    [
      "retire les espaces extérieurs et réduit les espaces internes",
      "  VPN   inaccessible\t depuis\n lundi  ",
      "VPN inaccessible depuis lundi",
    ],
  ])("%s", (_behavior, input, expectedTitle) => {
    // Arrange : input et expectedTitle sont fournis par le tableau de cas.

    // Act
    const title = normalizeTicketTitle(input);

    // Assert
    expect(title).toBe(expectedTitle);
  });
});
