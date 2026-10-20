# Exercice final — Nouvelle exigence sous contrainte (30 min)

**Changement annoncé :** un ticket de sévérité 8, 9 ou 10 doit être `HIGH` et déclencher **une** notification support. Le ticket doit rester sauvegardé si la notification échoue. La politique retenue pour cet exercice est de **propager l'erreur** tout en gardant le ticket local.

## Mission essentielle — 20 min

Sans indication de niveau de test, choisir et écrire le minimum utile : seuil 7/8, notification unique à 8, absence de notification à 7, ticket persistant lorsque `notifySupport` rejette. Faire passer la suite. Noter quelles dépendances sont remplacées et pourquoi.

## Investigation — 5 min

Le service sauvegarde déjà avant la notification. Que se passe-t-il si `postTicket` échoue ? Quelle propriété votre test garantit-il vraiment ? Distinguer stockage local, réception serveur et livraison de notification.

## Défi — 5 min

Proposer un statut « notification à relancer » sans l'implémenter. Quel test d'intégration supplémentaire devient prioritaire ? Présenter en 60 secondes le choix des niveaux et les risques non couverts.

**Livrable :** tests justifiés, suite verte sur les règles demandées, et une explication de ce qu'elle ne prouve pas.
