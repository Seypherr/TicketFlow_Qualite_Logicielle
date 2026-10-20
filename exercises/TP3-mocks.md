# TP3 — La fausse API et les doubles (70 min)

**Contexte.** `getOpenTickets(api)` utilise `api.getTickets()`. La dépendance injectée permet de décrire succès, liste vide et panne sans réseau ni backend. Le transport actuel est local ; le mock porte sur une méthode JavaScript.

## Mission essentielle — 25 min

Créer `tests/open-tickets.test.js`. Tester : réponse avec deux ouverts et un fermé (résultat exact et ordre conservé), liste vide, rejet `Error('Service indisponible')`. Attendre **chaque** promesse. Dans le cas normal, vérifier que `getTickets` a été appelé une fois. Ne jamais mocker `getOpenTickets` elle-même.

## Investigation — 25 min

Écrire un test de `createTicket` injectant repository et API. Pour une sévérité 10, vérifier ticket sauvegardé, priorité `HIGH` et notification unique. Pour sévérité 3, aucune notification. Tester `postTicket` qui rejette : identifier si le ticket est déjà conservé et décrire honnêtement ce comportement actuel, sans inventer une garantie de transaction. Ajouter `afterEach(() => jest.restoreAllMocks())` si vous utilisez `jest.spyOn`.

## Défi — 20 min

Comparer deux tests : l'un ne vérifie que `save` appelé ; l'autre vérifie les données retournées et sauvegardées. Changer l'implémentation interne sans changer la règle métier : lequel casse à tort ? Proposer un choix explicite pour une panne de notification (`propager`, `marquer à relancer` ou `ignorer`) et le test correspondant. Aucune réponse unique tant que la règle n'est pas spécifiée.

**Livrable :** au moins 7 cas sur succès, vide, erreur et notification ; une note sur le périmètre réellement prouvé par les mocks.
