import { filterTickets, calculateStats } from "../src/ticket-utils.js";

describe("Recherche de tickets", () => {
  test.each(["", "   "])(
    "renvoie tous les tickets pour une recherche vide ou blanche (%j)",
    (query) => {
      // Arrange
      const tickets = [{ title: "VPN inaccessible" }, { title: "Imprimante" }];

      // Act
      const results = filterTickets(tickets, query);

      // Assert
      expect(results).toEqual(tickets);
    },
  );

  test.each(["vpn", "VPN", "  vPn  "])(
    "retrouve VPN inaccessible avec %j, sans tenir compte de la casse ni des espaces extérieurs",
    (query) => {
      // Arrange
      const vpn = { title: "VPN inaccessible" };
      const tickets = [vpn, { title: "Imprimante" }];

      // Act
      const results = filterTickets(tickets, query);

      // Assert
      expect(results).toEqual([vpn]);
    },
  );

  test("renvoie une liste vide si aucun titre ne correspond", () => {
    // Arrange
    const tickets = [{ title: "VPN inaccessible" }];

    // Act
    const results = filterTickets(tickets, "imprimante");

    // Assert
    expect(results).toEqual([]);
  });
});

describe("Statistiques des tickets", () => {
  test("compte séparément OPEN et CLOSED sans classer PENDING comme fermé", () => {
    // Arrange
    const tickets = [
      { status: "OPEN" },
      { status: "CLOSED" },
      { status: "PENDING" },
    ];

    // Act
    const stats = calculateStats(tickets);

    // Assert
    expect(stats).toEqual({ total: 3, open: 1, closed: 1 });
  });

  test("inclut un statut inconnu dans le total, sans le compter ouvert ou fermé", () => {
    // Arrange
    const tickets = [{ status: "UNKNOWN" }];

    // Act
    const stats = calculateStats(tickets);

    // Assert
    expect(stats).toEqual({ total: 1, open: 0, closed: 0 });
  });

  test("renvoie des compteurs à zéro pour une liste vide", () => {
    // Arrange
    const tickets = [];

    // Act
    const stats = calculateStats(tickets);

    // Assert
    expect(stats).toEqual({ total: 0, open: 0, closed: 0 });
  });
});
