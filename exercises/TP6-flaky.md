# TP6 — Quatre tests qui inspirent peu confiance (50 min)

**Incident.** Un collègue a ajouté `cypress/e2e/06-flaky.starter.cy.js`. Ses quatre scénarios sont `skip` pour préserver le démarrage du cours. Activez-les **un à la fois** pour observer le problème, puis stabilisez-les.

## Mission essentielle — 20 min

Réparer le scénario « attente fixe » : remplacer `cy.wait(100)` par une assertion sur le statut attendu ; sélectionner la carte par son titre et `data-cy`, jamais par `nth-child`. Relancer plusieurs fois. Un test encore rouge parce que le comportement métier est faux doit rester rouge.

## Investigation — 20 min

Réparer les scénarios « ordre », « état partagé » et « sélecteur structurel » : préparer les tickets avec `cy.seedTickets` ou `cy.resetDb` dans chaque test ; utiliser un identifiant stable ; vérifier un effet visible. Exécuter toute la spec, puis inverser l'ordre des deux derniers tests : aucun ne doit dépendre du précédent. Expliquer la différence entre une panne du produit et une panne du test.

## Défi — 10 min

Mesurer le temps perdu avec un `cy.wait(5000)` artificiel et le supprimer. Si le délai aléatoire de `src/app.js` nuit aussi à l'expérience utilisateur, le retirer et indiquer en quoi le test reste robuste lorsque l'opération est asynchrone pour de bonnes raisons.

**Livrable :** quatre scénarios autonomes, sans `.skip`, sans attente fixe, et un court diagnostic par source de fragilité.
