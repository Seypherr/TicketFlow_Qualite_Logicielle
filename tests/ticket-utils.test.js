import {
  normalizeTicketTitle,
  calculatePriority,
  filterTickets,
  calculateStats,
} from "../src/ticket-utils.js";

describe("ticket-utils — départ", () => {
  test("normalise le titre", () => {
    expect(normalizeTicketTitle("  Imprimante   cassée  ")).toBe(
      "Imprimante cassée",
    );
  });

  test("sévérité critique => HIGH", () => {
    expect(calculatePriority({ severity: 10 })).toBe("HIGH");
  });

  test("recherche vide => tout", () => {
    const tickets = [{ title: "A" }, { title: "B" }];
    expect(filterTickets(tickets, "")).toEqual(tickets);
  });

  test("stats total", () => {
    expect(
      calculateStats([{ status: "OPEN" }, { status: "CLOSED" }]).total,
    ).toBe(2);
  });
});
