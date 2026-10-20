const KEY = "ticketflow:tickets";
function read() {
  try {
    return JSON.parse(localStorage.getItem(KEY) ?? "[]");
  } catch {
    return [];
  }
}
function write(t) {
  localStorage.setItem(KEY, JSON.stringify(t));
}
export const ticketRepository = {
  async findAll() {
    return read();
  },
  async save(ticket) {
    const t = read();
    t.push(ticket);
    write(t);
    return ticket;
  },
  async replace(ticket) {
    const t = read().map((x) => (x.id === ticket.id ? ticket : x));
    write(t);
    return ticket;
  },
  clear() {
    localStorage.removeItem(KEY);
  },
};
