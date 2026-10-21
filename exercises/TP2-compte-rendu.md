# TP 2 — Couverture des tests

## Règles à tester

On attend 9,90 € de frais en dessous de 100 €, et 0 € à partir de 100 €. Pour un membre premium, les frais sont toujours offerts.

Pour les cas supplémentaires, on fixe les résultats attendus avant d'écrire les tests :

- Pour un total de 0 €, on attend 9,90 €, car on est en dessous de 100 €.
- Si l'objet commande est absent, on décide ici de le traiter comme un total de 0 € sans abonnement premium, donc 9,90 €. C'est une hypothèse ajoutée pour cet exercice, car la consigne ne précise pas ce cas.

## 1. Tests et corrections

On crée `tests/shipping.test.js` pour tester les montants 99, 100 et 101 €, ainsi qu'un membre premium avec un total de 20 €. On ajoute aussi les cas 0 € et commande absente.

Avant correction, 2 tests échouent : à 100 € et pour le membre premium, on obtient 9,90 € au lieu de 0 €.

On remplace `total > 100` par `total >= 100`. Pour le premium, on renvoie directement 0. Après correction, les 36 tests passent, dont les 30 tests du TP 1.

On lance ensuite la commande suivante pour relever la couverture :

```bash
npm run test:coverage -- --runInBand
```

Pour `ticket-utils.js`, on obtient **100 % des lignes et 84 % des branches**. Le rapport global affiche 47,94 % des lignes et 48,07 % des branches : l'API et le repository sont encore peu testés.

## 2. Deux cas faciles et mutation

Avant de corriger le code, on remplace temporairement les tests de livraison par seulement deux cas : 99 € donne 9,90 € et 101 € donne 0 €. On garde les tests du TP 1.

Les 32 tests passent alors que les deux défauts sont encore présents. Le module affiche même 100 % des lignes, mais seulement 76 % des branches. On ne teste ni exactement 100 €, ni le membre premium. On remet ensuite les 6 tests de livraison et on corrige le code.

Pour la mutation, on remplace temporairement `>= 100` par `> 100`. Le test à 100 € devient rouge : il attend 0 €, mais reçoit 9,90 €. Les 5 autres tests de livraison passent. On remet immédiatement `>= 100`, puis on relance toute la suite : les 36 tests passent.

## 3. Cas supplémentaires

Les tests à 0 € et avec une commande absente passent avec les règles annoncées au début. Pour le tri, le TP 1 vérifie déjà que le tableau initial n'est pas modifié et que l'ordre de création est conservé.

Un test doit vérifier la règle attendue. Par exemple, attendre 9,90 € pour un membre premium ferait passer le code de départ, mais ce serait recopier son erreur dans le test.

## 4. Note sur la couverture et la mutation

La couverture indique quelles lignes et quelles branches sont exécutées par les tests.
Elle ne garantit pas que les résultats attendus respectent les règles du sujet.
Avec seulement 99 € et 101 €, le seuil 100 et le premium ne sont pas vérifiés.
La mutation de `>=` en `>` fait échouer le test à 100 €, ce qui montre qu'il repère ce défaut.
On restaure le code après l'expérience : les 36 tests passent à nouveau.

Les résultats sont conservés dans les fichiers suivants : [avant correction](resultats-tp2/01-avant-correction.txt), [deux cas faciles](resultats-tp2/02-deux-cas-faciles.txt), [après correction](resultats-tp2/03-apres-correction.txt), [mutation](resultats-tp2/04-mutation-seuil.txt) et [code restauré](resultats-tp2/05-code-restaure.txt).
