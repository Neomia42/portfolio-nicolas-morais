---
name: implementation-controlee
description: >-
  Utiliser ce skill pour implémenter une spec de feature de manière progressive,  
  point par point, avec validation humaine avant chaque modification de code.  
  L'agent doit lire la spec demandée, repérer le premier point non terminé,  
  proposer un plan limité à ce point, attendre validation, implémenter uniquement  
  ce point, résumer le diff, puis s'arrêter.
---

# Implémentation contrôlée

## Principe

Une spec ne s’implémente jamais d’un bloc.

L’agent travaille point par point, sous validation humaine.

La spec est la source de vérité pour :

- l’objectif de la feature ;
- les critères d’acceptation ;
- le hors périmètre ;
- les cas d’erreur ;
- les points d’implémentation ;
- l’état d’avancement.

## Méthode

1. Lire la spec demandée.
2. Identifier la section `Points d’implémentation`.
3. Repérer le premier point non terminé.
4. Proposer le plan uniquement pour ce point.
5. Attendre validation explicite avant toute modification.
6. Implémenter uniquement le point validé.
7. Ne pas traiter le point suivant.
8. Résumer les fichiers modifiés.
9. Expliquer ce que le développeur doit comprendre.
10. S’arrêter.
11. Attendre l’ordre explicite pour passer au point suivant.

## Format attendu avant implémentation

Avant de modifier le code, répondre avec ce format :

```md
## Point en cours

### Point traité

### Objectif du point

### Fichiers probablement concernés

### Plan d’action

### Risques ou points à valider

J’attends ta validation avant d’implémenter ce point.
```

## Format attendu après implémentation

Après modification, répondre avec ce format :

```md
## Point terminé

### Fichiers modifiés

### Ce qui a été fait

### Vérifications effectuées

### Ce que tu dois comprendre

### Prochain point

Je m’arrête ici. Dis-moi quand tu veux passer au point suivant.
```

## Interdictions

- Ne pas implémenter toute la spec d’un bloc.
- Ne pas passer au point suivant sans validation explicite.
- Ne pas traiter plusieurs points à la fois.
- Ne pas modifier des fichiers hors périmètre.
- Ne pas ajouter de dépendance sans validation.
- Ne pas refactorer du code non concerné.
- Ne pas modifier l’architecture sans validation.
- Ne pas masquer les hypothèses ou zones floues.
- Ne pas cocher un point comme terminé sans validation explicite du développeur.

## Règles de reprise

Si une spec contient déjà des points cochés :

- considérer les points `[x]` comme terminés ;
- reprendre au premier point `[ ]` non terminé ;
- ne pas revenir sur les points terminés sauf demande explicite ;
- lire la section `État d’avancement` si elle existe ;
- signaler toute incohérence entre le code et la spec avant de continuer.

Si la spec ne contient pas encore de section `Points d’implémentation` :

- ne pas coder ;
- proposer un découpage progressif ;
- attendre validation ;
- ajouter les points dans la spec seulement après validation explicite.

## Références optionnelles

Si le dossier `references/` existe dans ce skill, lire uniquement les fichiers nécessaires :

- `references/spec-format.md` pour vérifier le format d’une spec ;
- `references/point-format.md` pour vérifier le découpage en points ;
- `references/checkpoint-format.md` pour vérifier la reprise de session.

Ne pas charger tous les fichiers de référence si ce n’est pas nécessaire.

## Règle finale

L’agent propose.
Le développeur valide.
L’agent implémente.
Le développeur contrôle.
L’agent s’arrête.
