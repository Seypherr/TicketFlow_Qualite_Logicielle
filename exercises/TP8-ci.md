# TP8 — Diagnostiquer une CI, pas la faire taire (30 min)

## Mission essentielle — 12 min

Lire `exercises/ci/contract.log` et `exercises/ci/flaky.log` : pour chaque échec, relever job, scénario, assertion, hypothèse de cause, preuve à chercher et action **sans supprimer le test**. Le log « contrat » simule un backend strict absent de l'application locale ; ne pas prétendre le reproduire avec le serveur statique.

## Investigation — 12 min

Examiner `.github/workflows/tests.yml` et `exercises/ci/broken-workflow.yml`. Repérer l'absence d'attente du serveur dans l'exemple cassé, proposer l'ordre `npm ci → unitaires → build → serveur prêt → E2E`. Lancer localement `npm test -- --runInBand`, `npm run build` et `npm run e2e` avec le serveur actif. En cas d'échec, noter le navigateur et la cause observée.

## Défi — 6 min

Proposer une amélioration de diagnostic (capture Cypress ou séparation jobs) sans ralentir tous les commits. Expliquer pourquoi remplacer un timeout de 4 s par 30 s ne corrigerait pas un `400 title is required`.

**Livrable :** deux fiches diagnostic et un patch argumenté du workflow d'exemple, hors `.github/workflows/`.
