# TP 1 — Tests unitaires

## 1. Priorité, recherche et statistiques

On lance d'abord les tests déjà présents avec la commande suivante :

```bash
npm test -- --runInBand
```

Les 5 tests passent, mais le test « sévérité critique => HIGH » vérifie seulement la valeur 10. Il ne permet donc pas de repérer le problème sur la sévérité 8.

On ajoute des tests sur les valeurs 0, 3, 4, 7, 8 et 10. Pour la valeur 8, on obtient `MEDIUM` alors que le résultat attendu est `HIGH`. On remplace donc `severity > 8` par `severity >= 8`.

Pour la recherche, on teste une recherche vide, des espaces et plusieurs écritures de « vpn ». La recherche `vpn` ne retrouve pas « VPN inaccessible » car la comparaison tient compte des majuscules. On passe le titre et la recherche en minuscules, en retirant les espaces au début et à la fin de la recherche.

Pour les statistiques, on utilise une liste avec les statuts `OPEN`, `CLOSED` et `PENDING`. On attend 3 tickets au total, 1 ouvert et 1 fermé. Avant correction, on obtient 2 tickets fermés car tous les tickets qui ne sont pas ouverts sont comptés comme fermés. On compte maintenant uniquement les statuts `CLOSED`. On vérifie aussi le cas d'un statut inconnu et d'une liste vide.

## 2. Normalisation et création d'un ticket

On teste la normalisation avec `null`, un titre composé d'espaces et un titre contenant plusieurs espaces entre les mots. La fonction renvoie déjà les bons résultats, on n'a donc pas besoin de la modifier.

On essaie ensuite de créer un ticket avec le titre `'   '` et une sévérité de 3. Le ticket est accepté alors que son titre devient vide après normalisation.

On ajoute une vérification juste après la normalisation pour refuser un titre vide. On utilise `jest.fn()` pour remplacer le repository et l'API dans le test. On vérifie que la création est rejetée et que `save` et `postTicket` ne sont jamais appelés. On teste aussi qu'un ticket valide peut toujours être créé avec un titre normalisé.

## 3. Tri des tickets

On utilise les titres « zèbre », « Alpha » et « école ». Le résultat attendu est « Alpha », « école », « zèbre ».

Le tri modifie directement le tableau de départ. Quand on revient au mode `creation`, l'ordre d'origine est donc perdu. On trie une copie du tableau avec `[...tickets]` et on précise la langue française avec `localeCompare`. L'option `sensitivity: "base"` permet d'ignorer les différences de casse.

On vérifie l'ordre français, la conservation du tableau initial, le retour à l'ordre de création et le tri de titres avec des casses différentes.

Un test E2E n'est pas nécessaire pour le tri seul, car on peut vérifier son résultat avec un test unitaire. Il serait utile pour tester le changement de mode depuis l'interface.

## 4. Résultat

On a ajouté 25 cas aux 5 tests de départ, soit 30 tests dans 6 suites.

- Avant correction : 10 tests échouent et 20 passent.
- Après correction : les 30 tests passent.

Les résultats d'exécution sont disponibles ici : [tests de départ](resultats-tp1/01-tests-initiaux.txt), [avant correction](resultats-tp1/02-tests-rouges.txt) et [après correction](resultats-tp1/03-tests-verts.txt).

Les tests suivent les étapes Arrange / Act / Assert : on prépare les données, on appelle la fonction, puis on compare le résultat avec celui attendu. Ce TP montre surtout qu'il faut tester les valeurs limites : les tests de départ passaient alors que plusieurs erreurs étaient encore présentes.
