import { createTicket } from "../src/ticket-service.js";

describe("ticket-service — départ", () => {
  test("sauvegarde un ticket", async () => {
    const repository = { save: jest.fn(async (ticket) => ticket) };
    const api = {
      postTicket: jest.fn(async () => ({})),
      notifySupport: jest.fn(async () => ({ delivered: true })),
    };

    const ticket = await createTicket(
      { title: "Serveur indisponible", severity: 3 },
      repository,
      api,
    );

    expect(repository.save).toHaveBeenCalledTimes(1);
    expect(api.postTicket).toHaveBeenCalledTimes(1);
    expect(ticket.status).toBe("OPEN");
  });
});
