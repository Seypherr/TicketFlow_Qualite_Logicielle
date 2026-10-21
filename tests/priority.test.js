import { calculatePriority } from "../src/ticket-utils.js";

describe("Priorité des tickets", () => {
  test.each([
    [0, "LOW"],
    [3, "LOW"],
    [4, "MEDIUM"],
    [7, "MEDIUM"],
    [8, "HIGH"],
    [10, "HIGH"],
  ])("classe la sévérité %i en %s", (severity, expectedPriority) => {
    // Arrange : préparer une valeur frontière et son résultat métier attendu.
    const ticket = { severity };

    // Act : exécuter la fonction testée.
    const priority = calculatePriority(ticket);

    // Assert : comparer au résultat attendu.
    expect(priority).toBe(expectedPriority);
  });
});
