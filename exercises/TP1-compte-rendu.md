# TP1 — Compte rendu

## Résultat vérifié

25 cas ajoutés aux 5 tests livrés : **30 tests réussis dans 6 suites**.

| Étape | Résultat | Preuve d'exécution |
| --- | --- | --- |
| Suite livrée, code initial | 5 réussis | [Tests initiaux](resultats-tp1/01-tests-initiaux.txt) |
| Nouveaux tests, avant correction | 10 échecs, 20 réussis | [Phase rouge](resultats-tp1/02-tests-rouges.txt) |
| Mêmes tests, après correction | 30 réussis | [Phase verte](resultats-tp1/03-tests-verts.txt) |

Pour relancer : `npm test -- --runInBand`.

Le contrôle `npm run build` réussit. Le formatage des 7 fichiers JavaScript créés ou modifiés est vérifié. Le contrôle global `npm run format:check` signale encore 8 fichiers préexistants, inchangés dans ce TP : `src/app.js`, `src/ticket-api.js`, `src/ticket-repository.js`, `tests/ticket-utils.test.js`, `cypress/e2e/06-flaky.starter.cy.js`, `cypress/e2e/smoke.cy.js`, `cypress/support/e2e.js` et `scripts/build-check.js`.

## Défauts et corrections

| Comportement | Défaut observé par les tests | Correction |
| --- | --- | --- |
| Priorité | La sévérité 8 donne `MEDIUM` | `severity >= 8` donne `HIGH` |
| Recherche | `vpn` et `  vPn  ` ne retrouvent pas `VPN inaccessible` | Retirer les espaces extérieurs de la requête et comparer en minuscules |
| Statistiques | `PENDING` et `UNKNOWN` sont comptés comme fermés | Compter explicitement les statuts `CLOSED` |
| Création | Un titre composé d'espaces est accepté | Rejeter le titre vide après normalisation, avant toute sauvegarde ou appel API |
| Tri | Le tri modifie le tableau initial et distingue la casse | Trier une copie avec la locale française et `sensitivity: "base"` |

La normalisation de `null`, des titres blancs et des espaces internes fonctionnait déjà : les nouveaux tests la protègent. L'API réservée au TP4 n'a pas été modifiée.

## Quel test passe « à tort » ?

Pour l'incident principal, **« sévérité critique => HIGH »** passe parce qu'il teste seulement **10**, jamais **8**. Son assertion est correcte, mais sa couverture laisse échapper le défaut de seuil. De même, **« stats total »** vérifie uniquement le total, sans vérifier le nombre de tickets fermés.

## Cas ajoutés

- `priority.test.js` : 6 cas, aux valeurs 0, 3, 4, 7, 8 et 10.
- `search-stats.test.js` : 9 cas, recherches vide/blanche, casse, espaces, absence de résultat et statistiques avec statuts mixtes/inconnu ou liste vide.
- `normalization.test.js` : 3 cas, `null`, titre blanc et espaces internes.
- `ticket-service.test.js` : 2 cas ajoutés, rejet sans effet de bord et création valide avec titre normalisé.
- `sort.test.js` : 5 cas, ordre français, absence de mutation, retour à la création avec mode explicite/par défaut et insensibilité à la casse.

## À retenir

- **Arrange / Act / Assert** : préparer les données, appeler la fonction, vérifier le résultat.
- **Valeurs limites** : tester les frontières des règles métier ; 7 et 8 distinguent `MEDIUM` de `HIGH`.
- **Oracle** : résultat attendu défini par la règle métier, par exemple `8 → HIGH`, sans recopier l'algorithme testé.
- **Mocks injectés** : `jest.fn()` remplace le repository et l'API ; on vérifie que `save` et `postTicket` ont zéro appel après le rejet attendu avec `await expect(...).rejects`.
- **Rouge → vert** : un test échoue sur le défaut, puis réussit après correction. Des tests verts ne prouvent pas l'absence de bugs.
- **Immutabilité** : `sort()` modifie le tableau ; `[...tickets].sort(...)` préserve son ordre initial.

**Le tri justifie-t-il un E2E à lui seul ?** Non : ces règles sont couvertes rapidement et précisément par les tests unitaires. Un E2E devient utile pour vérifier le parcours complet dans l'interface, par exemple le sélecteur A–Z puis le retour à l'ordre de création.
