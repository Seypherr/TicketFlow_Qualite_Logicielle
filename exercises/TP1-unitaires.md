# TP1 — Premier filet de sécurité Jest (60 min)

**Incident.** Les tickets de sévérité 8 ne sont pas classés comme urgents. Les cinq tests livrés passent pourtant.

**Règles :** 0–3 → `LOW` ; 4–7 → `MEDIUM` ; 8–10 → `HIGH`. Une recherche ignore la casse et les espaces extérieurs. Dans les statistiques, seul `CLOSED` compte comme fermé. Un titre vide après normalisation est refusé avant sauvegarde.

## Mission essentielle — 25 min

Créer `tests/priority.test.js` et `tests/search-stats.test.js`. Écrire des tests nommés par comportement, avec arrange/act/assert. Couvrir 3, 4, 7, 8 et 10 ; recherche vide et recherche `vpn` pour `VPN inaccessible` ; une liste mêlant `OPEN`, `CLOSED` et `PENDING`. Lancer `npm test -- --runInBand` et noter **quel test passe à tort dans la suite livrée**. Corriger les fonctions concernées dans `src/ticket-utils.js` après avoir vu le rouge.

## Investigation — 20 min

Tester la normalisation de `null`, d'un titre blanc et d'espaces internes. Tester `createTicket({ title: '   ', severity: 3 })` avec un repository et une API injectés : après rejet, `save` et `postTicket` doivent être à zéro appel. La création d'un ticket valide doit rester possible. Corriger `src/ticket-service.js` pour le refus du titre blanc.

## Défi — 15 min

Ajouter des tests sur `sortTicketsByTitle` : `['zèbre', 'Alpha', 'école']` doit s'afficher dans l'ordre français A–Z, sans modifier le tableau de départ ; le mode `creation` conserve l'ordre. Corriger au besoin. Discuter : ce tri justifie-t-il un E2E à lui seul ?

**Livrable :** au moins 12 cas pertinents, dont le seuil 8, un statut inconnu et un rejet sans effet de bord. Montrer le rouge puis le vert. Ne pas modifier l'API du TP4.
