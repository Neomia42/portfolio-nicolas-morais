---
name: cadrage-version
description: >-
  Utiliser ce skill pour cadrer une nouvelle version d'un projet existant, au
  niveau produit et usage, en repartant du bilan de la version précédente et des
  idées brutes fournies. L'agent clarifie objectif, utilisateur, périmètre,
  fonctionnalités et points bloquants, sans proposer de stack, d'architecture ni
  de specs, et sans écrire de fichier avant validation.
---

# Cadrage nouvelle version

## Principe

Ce skill prépare la version suivante au niveau produit, pas au niveau technique.
Il repart du bilan de la version précédente et des idées brutes du développeur.
Il ne propose ni stack, ni architecture, ni spec, ni découpage technique.
Il n'écrit aucun fichier avant validation.

## Entrées attendues

- le bilan de la version précédente (ou un résumé de l'existant) ;
- les idées brutes du développeur pour la prochaine version.

Si la version à préparer n'est pas claire, demander uniquement laquelle.

## Méthode

1. Lire le bilan / contexte de l'existant fourni.
2. Lire les idées brutes fournies.
3. Clarifier la version active à préparer.
4. Clarifier l'objectif, l'utilisateur cible, le cas d'usage principal.
5. Distinguer fonctionnalités indispensables et secondaires à repousser.
6. Définir le hors périmètre de cette version.
7. Relever les contraintes liées à l'existant.
8. Formuler des hypothèses explicites pour les manques non bloquants.
9. Lister les points bloquants à confirmer avant Plan.md.
10. Proposer la synthèse structurée.
11. Attendre validation explicite.

## Contraintes

- Ne pas proposer de stack technique.
- Ne pas proposer d'architecture.
- Ne pas créer de specs de features.
- Ne pas découper en tâches techniques.
- Ne pas proposer de fonctionnalités non demandées, sauf comme suggestions optionnelles clairement signalées.
- Rester au niveau produit et usage.
- Ne crée et ne modifie aucun fichier. Propose seulement, et attends ma validation.

## Format de réponse attendu

```md
# Cadrage nouvelle version

## Version active

## Objectif de cette version

## Utilisateur cible

## Problème résolu par cette version

## Cas d'usage principal

## Fonctionnalités indispensables

## Fonctionnalités secondaires à repousser

## Hors périmètre pour cette version

## Contraintes liées à l'existant

## Hypothèses retenues

## Points bloquants à confirmer avant Plan.md

## Résumé en une phrase
```

## Règle finale

L'agent repart du bilan.
L'agent propose.
Le développeur valide.
Le cadrage validé alimente la mise à jour de Plan.md.
L'agent s'arrête.
