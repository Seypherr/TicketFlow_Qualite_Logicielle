import { shippingCost } from "../src/ticket-utils.js";

describe("Frais de livraison", () => {
  test.each([
    [99, 9.9],
    [100, 0],
    [101, 0],
    [0, 9.9],
  ])("facture %s € de commande à %s € de frais", (total, expectedCost) => {
    // Arrange
    const order = { total, premium: false };

    // Act
    const cost = shippingCost(order);

    // Assert
    expect(cost).toBe(expectedCost);
  });

  test("offre la livraison à un membre premium même pour 20 €", () => {
    // Arrange
    const order = { total: 20, premium: true };

    // Act
    const cost = shippingCost(order);

    // Assert
    expect(cost).toBe(0);
  });

  test("traite une commande absente comme un total de 0 € non premium", () => {
    // Arrange : hypothèse annoncée dans le compte rendu.
    const order = undefined;

    // Act
    const cost = shippingCost(order);

    // Assert
    expect(cost).toBe(9.9);
  });
});
