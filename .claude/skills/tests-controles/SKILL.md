---
name: tests-controles
description: >-
  Utiliser ce skill pour écrire les tests d'un point déjà implémenté, de manière
  progressive et sous validation humaine. L'agent doit lire la spec, dériver les
  tests des critères d'acceptation et des cas d'erreur du point concerné, proposer
  la liste des tests, attendre validation, implémenter uniquement ces tests sans
  toucher au code de production, lancer la suite, puis s'arrêter.
---

# Tests contrôlés

## Principe

Les tests d'un point se dérivent de la spec, pas du code.

L'agent travaille point par point, sous validation humaine, après l'implémentation
et la relecture du point (test-après).

La spec est la source de vérité pour :

- les critères d'acceptation ;
- les cas d'erreur.

Chaque test trace un critère d'acceptation ou un cas d'erreur de la spec.

## Méthode

1. Lire la spec demandée.
2. Repérer le point déjà implémenté à tester.
3. Lister les critères d'acceptation et cas d'erreur concernés par ce point.
4. Proposer un test par critère d'acceptation concerné.
5. Proposer un test par cas d'erreur concerné.
6. Nommer chaque test d'après le comportement qu'il vérifie.
7. Attendre validation explicite avant d'écrire le moindre test.
8. Implémenter uniquement les tests validés, sans modifier le code de production.
9. Lancer la suite (`pnpm test`) et montrer le résultat.
10. S'arrêter.

## Choix de l'outil

- Jest si le framework l'impose (ex. NestJS).
- Vitest partout ailleurs (Next, Express/TS, Vite/React).
- Front (composants React) : Vitest + Testing Library.

Voir la Doctrine des outils.

## Format attendu avant écriture

Avant d'écrire les tests, répondre avec ce format :

```md
## Tests proposés pour le point

### Point testé

### Critères d'acceptation couverts

- ...

### Cas d'erreur couverts

- ...

### Liste des tests (nom + ce que chacun vérifie)

- ...

J'attends ta validation avant d'écrire les tests.
```

## Format attendu après écriture

Après écriture et exécution, répondre avec ce format :

```md
## Tests terminés

### Fichiers de test ajoutés

### Résultat de pnpm test

### Ce que chaque test garantit

Je m'arrête ici. Dis-moi quand tu veux passer au point suivant.
```

## Interdictions

- Ne pas modifier le code de production pendant l'écriture des tests.
- Ne pas écrire de test « creux » : un test doit échouer si le comportement casse.
- Ne pas tester un comportement absent de la spec.
- Ne pas passer au point suivant sans validation explicite.
- Ne pas ajouter de dépendance sans validation.
- Ne pas viser un pourcentage de couverture : couvrir les critères et les cas d'erreur.

## Règle finale

L'agent dérive les tests de la spec.
L'agent propose.
Le développeur valide.
L'agent écrit les tests et lance la suite.
Le développeur contrôle.
L'agent s'arrête.
