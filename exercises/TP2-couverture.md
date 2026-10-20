# TP2 — 100 % exécuté, règle fausse (60 min)

**Contexte.** `shippingCost` concerne la livraison d'un kit de remplacement, pas la création de tickets. Règle : en dessous de 100 €, frais de 9,90 € ; à partir de 100 €, frais offerts ; membre premium : frais offerts quel que soit le total.

## Mission essentielle — 20 min

Créer `tests/shipping.test.js`. Tester 99, 100, 101 et un membre premium à 20 €. Observer les échecs **avant** de corriger `src/ticket-utils.js`. Lancer `npm run test:coverage -- --runInBand` et relever lignes et branches du module, sans chercher à atteindre un quota arbitraire.

## Investigation — 20 min

Réduire provisoirement la suite à deux cas faciles qui exécutent les branches existantes sans tester 100 ni le premium correct. Expliquer pourquoi un pourcentage élevé laisserait passer la régression. Restaurer les tests pertinents. Faire une mutation manuelle `>= 100` → `> 100` et identifier le test qui doit devenir rouge. Restaurer le code immédiatement après l'expérience.

## Défi — 20 min

Tester l'absence de mutation du tri si ce n'est pas fait au TP1 ; choisir des partitions supplémentaires raisonnables pour `shippingCost` (ex. 0, objet absent) et écrire **la règle attendue avant** le test. Distinguer un test qui décrit la spécification d'un test qui fige un accident de code. Dans un paragraphe : que vous apprend le rapport coverage, et que ne peut-il pas garantir ?

**Livrable :** test rouge au seuil 100 et pour premium, correction, puis note de 5 lignes sur la couverture et la mutation. Ne pas mettre `/* istanbul ignore next */` pour faire monter le pourcentage.
