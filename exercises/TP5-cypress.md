# TP5 — Un vrai parcours dans le navigateur (60 min)

**Précondition :** les corrections du seuil 8 et du champ `title` ont été apportées. Garder `npm run dev` ouvert dans un terminal.

## Mission essentielle — 25 min

Créer `cypress/e2e/05-parcours.cy.js`. Réinitialiser les tickets au début du scénario ; créer « Production indisponible » en sévérité **8** ; vérifier « Ticket créé. » et le badge `HIGH` dans **sa carte** ; ouvrir Détails, constater `OPEN`, clore, constater `CLOSED`, revenir à la liste et retrouver `CLOSED` sur la même carte. Recharger la page et vérifier la persistance.

## Investigation — 20 min

Ajouter un scénario indépendant pour un titre constitué d'espaces (erreur visible, aucun ticket conservé) et un scénario de recherche insensible à la casse. Expliquer pourquoi `cy.contains('HIGH')` dans toute la page serait une assertion moins précise que la recherche dans la carte nommée. Éviter tout `cy.wait(2000)`.

## Défi — 15 min

Tester le tri « Titre A–Z » avec trois tickets créés dans un ordre différent ; retourner à l'ordre de création. Décider si ce E2E apporte assez de valeur compte tenu du risque faible et du test unitaire du tri. Écrire la raison de votre choix, même si vous supprimez ce scénario.

**Livrable :** un parcours critique complet, autonome et relançable. Il valide navigateur + code local, pas l'acceptation d'une requête par un serveur distant.
