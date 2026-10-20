# TP7 — Budget de 15 tests (35 min)

**Situation.** Une équipe reprend TicketFlow. Elle dispose d'un budget de **15 tests supplémentaires**. Tout automatiser n'est pas un objectif.

## Mission essentielle — 15 min

Par groupe, classer ces fonctionnalités par probabilité × impact : création, titre vide, seuil de priorité, notification, contrat `title`, fermeture/persistance, recherche, statistiques avec statut nouveau, tri A–Z, couleur du badge. Écrire une stratégie d'une page : cas retenu, niveau (unitaire/intégration/E2E), oracle, coût approximatif. Le total doit faire exactement 15.

## Investigation — 10 min

Deux groupes échangent leurs plans. Chacun conteste deux choix de l'autre : doublon entre couches ? zone critique non couverte ? test trop couplé à l'implémentation ? Assumer explicitement au moins une chose non automatisée. Défendre le choix « tri A–Z : zéro, un ou deux tests » en fonction de son faible impact et du coût.

## Défi — 10 min

Un changement survient : 40 % des utilisateurs trient les tickets avant de les traiter. Refaire seulement trois arbitrages, sans dépasser 15 tests. Distinguer fréquence d'utilisation et gravité en cas d'erreur.

**Livrable :** matrice de 15 tests, deux choix controversés argumentés, un compromis assumé.
