# TP4 — Le contrat que les unitaires n'ont pas vu (55 min)

**Incident.** La création apparaît localement, mais un backend qui exige `title` rejetterait le POST : le service envoie `name`. Ici le « transport » est une façade locale permissive. Le test doit vérifier ce que notre code lui transmet ; il ne prétend pas appeler un vrai serveur.

## Mission essentielle — 25 min

Créer `tests/create-integration.test.js` dans l'environnement Jest `jsdom`. Nettoyer `localStorage` **avant chaque test** et restaurer les spies après chaque test. Utiliser le vrai `createTicket`, le vrai `ticketRepository` et la vraie `ticketApi`. Espionner uniquement `httpClient.post` pour vérifier l'appel `('/api/tickets', {title: 'Panne serveur', priority: 'HIGH'})`. Vérifier aussi qu'un ticket portant ce titre est conservé. Observer le rouge, puis corriger le mapping dans `src/ticket-service.js`.

## Investigation — 20 min

Inspecter le modèle stocké : il ne doit pas contenir deux alias concurrents `title` et `name`. Ajouter un test de persistance, corriger la duplication. Discuter la séquence actuelle `save → post → notify` : en cas de POST rejeté, le ticket local demeure. Sans changer cette politique, rédiger un scénario de synchronisation possible et sa limite.

## Défi — 10 min

Écrire une preuve négative : un mock de `ticketApi.postTicket` qui accepte n'importe quoi ferait passer le test même si le payload est faux. Dessiner la frontière exacte des morceaux réellement testés. Quel contrôle supplémentaire serait nécessaire pour prouver qu'un vrai backend accepte le contrat ?

**Livrable :** test d'intégration rouge puis vert sur `title`, vérification du stockage canonique, explication d'une limite du transport local.
