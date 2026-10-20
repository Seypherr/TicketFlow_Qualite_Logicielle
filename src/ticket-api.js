import { ticketRepository } from "./ticket-repository.js";

const delay = (ms) => new Promise((r) => setTimeout(r, ms));

/**
 * HTTP-shaped transport used by the browser build. It keeps the project
 * runnable without another process while preserving a realistic response
 * shape for the service and its tests.
 */
export const httpClient = {
  async get(path) {
    await delay(20);
    if (path !== "/api/tickets")
      return { status: 404, body: { message: "Ressource introuvable" } };
    return { status: 200, body: { tickets: await ticketRepository.findAll() } };
  },
  async post(path, payload) {
    await delay(25);
    if (path !== "/api/tickets")
      return { status: 404, body: { message: "Ressource introuvable" } };
    return { status: 201, body: { ticket: payload } };
  },
  async patch(path, payload) {
    await delay(25);
    if (!path.startsWith("/api/tickets/"))
      return { status: 404, body: { message: "Ressource introuvable" } };
    return { status: 200, body: { ticket: payload } };
  },
};

function assertOk(response) {
  if (response.status >= 400)
    throw new Error(response.body?.message ?? "Erreur HTTP");
  return response.body;
}

export const ticketApi = {
  async getTickets() {
    const body = assertOk(await httpClient.get("/api/tickets"));
    return body.tickets;
  },
  async postTicket(payload) {
    return assertOk(await httpClient.post("/api/tickets", payload));
  },
  async notifySupport(ticket) {
    await delay(30);
    if (!ticket?.id) throw new Error("Ticket invalide");
    return { delivered: true };
  },
};
