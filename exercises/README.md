# Parcours étudiant — TicketFlow

Ces fiches se suivent dans **le même projet**. Elles sont conçues pour deux journées de 7 h, dont environ 8 h de pratique. Les durées comprennent l'enquête, l'écriture des tests, la correction et la restitution ; elles ne sont pas des temps de frappe.

| Jour | Séquence | Durée de pratique | Livrable observable |
|---|---|---:|---|
| 1 | [TP0](TP0-exploration.md) | 30 min | Trois anomalies reproductibles et classées |
| 1 | [TP1](TP1-unitaires.md) | 60 min | Tests qui font apparaître au moins deux défauts |
| 1 | [TP2](TP2-couverture.md) | 60 min | Cas limites, mutation manuelle et conclusion sur la couverture |
| 1 | [TP3](TP3-mocks.md) | 70 min | Service asynchrone testé avec succès, vide et erreur |
| 2 | [TP4](TP4-integration.md) | 55 min | Contrat `title` vérifié à la frontière du transport |
| 2 | [TP5](TP5-cypress.md) | 60 min | Parcours navigateur création → fermeture → retour |
| 2 | [TP6](TP6-flaky.md) | 50 min | Scénarios isolés sans attente fixe ni sélecteur structurel |
| 2 | [TP7](TP7-strategie.md) | 35 min | Budget de 15 tests justifié par les risques |
| 2 | [TP8](TP8-ci.md) | 30 min | Diagnostic écrit de deux échecs et vérification de CI |
| 2 | [Final](FINAL-evolution.md) | 30 min | Règle critique protégée aux niveaux choisis |

**Total pratique : 480 min.** Les 6 h restantes sont consacrées aux explications, démonstrations et débriefs du support de cours. Les groupes rapides passent aux défis, les autres valident d'abord les critères essentiels.

## Avant de commencer

```bash
npm ci
npm run dev
# autre terminal
npm test -- --runInBand
```

Ouvrir `http://localhost:3000`. Pour Cypress : `npm run cypress:open` ; pour la CI locale : `npm run e2e` avec le serveur démarré. La « fausse API » est un objet JavaScript local : il n'y a **aucun véritable échange HTTP** ni backend à lancer. `cy.intercept('/api/tickets')` ne peut pas intercepter ses méthodes.

Le dossier `enseignant/` contient la correction. Gardez-le fermé pendant les exercices. Chaque exercice précise les fichiers autorisés. Un test rouge attendu fait partie du travail : expliquez ce qu'il prouve avant de corriger le code.

## Règles communes

1. Un test doit avoir une règle attendue indépendante de l'implémentation actuelle.
2. Vérifier le rouge sur le starter, puis le vert après la correction, quand un défaut est annoncé.
3. Ne pas corriger un défaut hors du TP qui l'introduit, sauf demande de l'enseignant.
4. Protéger le comportement observable. Utiliser un spy seulement si l'appel fait partie du contrat à vérifier.
5. À la fin du TP, pouvoir dire ce que les tests **ne prouvent pas**.

**Fonction secondaire à disposition :** le tri « Titre A–Z » de la liste. L'ordre de création est le mode par défaut. Le tri devrait ignorer la casse et les accents français, sans modifier la liste source. Son défaut est volontaire : sa faible gravité rend la décision de test intéressante au TP7.
