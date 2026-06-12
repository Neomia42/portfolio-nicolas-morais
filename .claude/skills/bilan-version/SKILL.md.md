---
name: bilan-version  
description: >-
  Utiliser ce skill pour faire le bilan d’une version terminée d’un projet.  
  L’agent doit lire Plan.md, les specs concernées et éventuellement les commits  
  ou fichiers indiqués, puis produire un bilan structuré de ce qui a été livré,  
  de ce qui reste incomplet, des limites constatées et des décisions prises.  
  L’agent ne doit pas proposer la version suivante.
---

# Bilan de version

## Principe

Ce skill sert à clôturer proprement une version terminée.

Il regarde en arrière.

Il ne prépare pas la version suivante.

Il ne propose pas de nouvelles fonctionnalités.

Il ne modifie pas `Plan.md`.

Le bilan de version sert à garder une trace professionnelle de ce qui a été livré.

## Objectif

Créer un fichier de bilan dans :

```txt
docs/releases/vX-bilan.md
```

Exemples :

```txt
docs/releases/v1-bilan.md
docs/releases/v2-bilan.md
docs/releases/v3-bilan.md
```

Ce fichier doit permettre de comprendre :

- ce qui était prévu ;
- ce qui a été réellement livré ;
- ce qui est incomplet ;
- les limites connues ;
- les décisions prises pendant la version ;
- les éventuels bugs connus ;
- les points à surveiller plus tard.

## Entrées attendues

L’agent doit partir d’au moins un des éléments suivants :

- `Plan.md` ;
- les specs de la version concernée dans `docs/specs/` ;
- une liste de features terminées fournie par le développeur ;
- un résumé de commits fourni par le développeur ;
- un bilan manuel fourni dans le prompt.

Si la version concernée n’est pas claire, l’agent doit demander uniquement :

```txt
Quelle version dois-je clôturer ?
```

## Méthode

1. Identifier la version à clôturer.
2. Lire `Plan.md` si disponible.
3. Identifier les features prévues pour cette version.
4. Lire les specs concernées si elles sont disponibles.
5. Identifier les features terminées.
6. Identifier les features incomplètes ou reportées.
7. Identifier les limites connues.
8. Identifier les bugs connus ou comportements à surveiller.
9. Identifier les décisions prises pendant la version.
10. Proposer un bilan structuré.
11. Attendre validation explicite du développeur.
12. Après validation, créer ou mettre à jour uniquement le fichier `docs/releases/vX-bilan.md`.
13. Ne pas modifier `Plan.md`.
14. Ne pas proposer la version suivante.

## Format de réponse avant validation

Répondre avec ce format :

```md
## Bilan de version proposé

### Version concernée

### Sources utilisées

- ...

### Objectif initial de la version

### Features prévues

- ...

### Features livrées

- ...

### Features incomplètes ou reportées

- ...

### Limites connues

- ...

### Bugs connus ou points à surveiller

- ...

### Décisions prises pendant la version

- ...

### État final de la version

Terminée / Partiellement terminée / À clarifier

### Fichier proposé

`docs/releases/vX-bilan.md`

J’attends ta validation avant de créer ou modifier le fichier de bilan.
```

## Format du fichier de bilan

Après validation, créer ou mettre à jour le fichier avec ce format :

```md
# Bilan de version - VX

## Version concernée

VX

## Date du bilan

YYYY-MM-DD

## Objectif initial

## Sources utilisées

- `Plan.md`
- `docs/specs/...`

## Features prévues

- ...

## Features livrées

- ...

## Features incomplètes ou reportées

- ...

## Limites connues

- ...

## Bugs connus ou points à surveiller

- ...

## Décisions prises pendant la version

- ...

## État final

Terminée / Partiellement terminée / À clarifier

## Notes

- Ce bilan clôture la version.
- La version suivante doit faire l’objet d’un cadrage séparé si nécessaire.
```

## Interdictions

- Ne pas proposer la V2, V3 ou version suivante.
- Ne pas inventer de nouvelles fonctionnalités.
- Ne pas modifier `Plan.md`.
- Ne pas modifier les specs.
- Ne pas modifier le code. 
- Ne pas corriger les bugs pendant le bilan.
- Ne pas créer de nouvelles ADR.
- Ne pas créer de nouvelles specs.
- Ne pas transformer le bilan en roadmap.
- Ne pas inclure de journal d’apprentissage personnel dans le repo.
- Ne pas marquer une version comme terminée si des features critiques sont incomplètes sans le signaler.

## Règle sur les informations manquantes

Si certaines informations manquent mais ne bloquent pas le bilan, l’agent doit les signaler dans :

```md
## Informations manquantes ou non vérifiées

- ...
```

Si les informations manquantes empêchent de savoir quelle version est concernée ou quelles features étaient prévues, l’agent doit poser une question et s’arrêter.

## Règle finale

L’agent constate.
L’agent structure.
Le développeur valide.
L’agent crée ou met à jour le bilan.
L’agent s’arrête.