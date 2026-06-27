---
name: cadrage-projet
description: >-
  Utiliser ce skill pour cadrer un nouveau projet avant toute décision technique,
  au niveau produit et usage, à partir d'une idée brute. L'agent clarifie le
  problème, l'utilisateur, le périmètre, les fonctionnalités et les points flous,
  sans proposer de stack, d'architecture ni de specs, et sans écrire de fichier
  avant validation.
---

# Cadrage projet

## Principe

Ce skill cadre un projet neuf au niveau produit, pas au niveau technique.
Il part de l'idée brute du développeur.
Il ne propose ni stack, ni architecture, ni spec, ni découpage technique.
Il n'écrit aucun fichier avant validation.

## Entrées attendues

- l'idée brute du projet, décrite par le développeur.

## Méthode

1. Lire l'idée brute fournie.
2. Clarifier le problème exact que le projet résout.
3. Clarifier l'utilisateur cible et le cas d'usage principal.
4. Définir la version initiale utile.
5. Distinguer fonctionnalités indispensables et secondaires à repousser.
6. Définir le hors périmètre de départ.
7. Relever les contraintes importantes.
8. Repérer les risques de dérive ou de surcomplexité.
9. Formuler des hypothèses explicites pour les manques non bloquants.
10. Lister les points flous à confirmer avant Plan.md.
11. Proposer la synthèse structurée.
12. Attendre validation explicite.

## Contraintes

- Ne pas proposer de stack technique.
- Ne pas proposer d'architecture.
- Ne pas créer de specs de features.
- Ne pas découper en tâches techniques.
- Rester au niveau produit et usage.
- Ne crée et ne modifie aucun fichier. Propose seulement, et attends ma validation.

## Format de réponse attendu

```md
# Cadrage projet

## Version active

## Objectif du projet

## Utilisateur cible

## Problème résolu

## Cas d'usage principal

## Version initiale attendue

## Fonctionnalités indispensables

## Hors périmètre pour le moment

## Contraintes importantes

## Points flous à confirmer avant Plan.md

## Résumé en une phrase
```

## Règle finale

L'agent part de l'idée brute.
L'agent propose.
Le développeur valide.
Le cadrage validé alimente Plan.md.
L'agent s'arrête.
