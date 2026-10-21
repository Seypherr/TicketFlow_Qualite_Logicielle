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

describe("Validation lors de la création d'un ticket", () => {
  test("refuse un titre blanc sans sauvegarde ni appel API", async () => {
    // Arrange
    const repository = { save: jest.fn(async (ticket) => ticket) };
    const api = {
      postTicket: jest.fn(async () => ({})),
      notifySupport: jest.fn(async () => ({ delivered: true })),
    };

    // Act
    const creation = createTicket(
      { title: "   ", severity: 3 },
      repository,
      api,
    );

    // Assert
    await expect(creation).rejects.toThrow(/titre/i);
    expect(repository.save).not.toHaveBeenCalled();
    expect(api.postTicket).not.toHaveBeenCalled();
    expect(api.notifySupport).not.toHaveBeenCalled();
  });

  test("crée toujours un ticket valide avec un titre normalisé", async () => {
    // Arrange
    const repository = { save: jest.fn(async (ticket) => ticket) };
    const api = {
      postTicket: jest.fn(async () => ({})),
      notifySupport: jest.fn(async () => ({ delivered: true })),
    };

    // Act
    const ticket = await createTicket(
      { title: "  VPN   inaccessible  ", severity: 3 },
      repository,
      api,
    );

    // Assert
    expect(ticket).toEqual(
      expect.objectContaining({
        title: "VPN inaccessible",
        severity: 3,
        priority: "LOW",
        status: "OPEN",
      }),
    );
    expect(repository.save).toHaveBeenCalledTimes(1);
    expect(repository.save).toHaveBeenCalledWith(ticket);
    expect(api.postTicket).toHaveBeenCalledTimes(1);
  });
});
