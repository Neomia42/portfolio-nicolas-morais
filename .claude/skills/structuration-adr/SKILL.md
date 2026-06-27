---
name: structuration-adr
description: >-
  Utiliser ce skill pour transformer des notes brutes en une ADR claire, courte et
  exploitable, sans prendre la décision à la place du développeur. L'agent structure
  la décision, ses options et ses conséquences, propose un nom de fichier et un
  résumé, et n'écrit aucun fichier avant validation.
---

# Structuration d'ADR

## Principe

Ce skill met en forme une décision technique déjà prise par le développeur.
Il ne prend pas la décision, il ne change pas son sens.
Il garde l'ADR courte, claire et lisible par un agent IA.
Il n'écrit aucun fichier avant validation.

## Entrées attendues

- la décision et les notes brutes du développeur (par ex. issues de la
  *Grille de réflexion avant ADR*).

## Méthode

1. Lire les notes brutes fournies.
2. Reformuler le contexte et la décision sans en changer le sens.
3. Lister les options envisagées et les raisons du choix.
4. Lister les conséquences (positives et limites acceptées).
5. Formuler des hypothèses explicites pour les manques non bloquants.
6. Si une information manque et bloque réellement la décision, poser une question et s'arrêter.
7. Proposer l'ADR structurée, un nom de fichier et un résumé en une phrase.
8. Attendre validation explicite.

## Contraintes

- Ne pas prendre la décision à la place du développeur.
- Ne pas changer le sens de la décision.
- Ne pas proposer une autre stack ou architecture, sauf incohérence majeure à signaler.
- Garder l'ADR courte, claire et professionnelle.
- Écrire pour un projet développé avec un workflow IA (l'ADR doit empêcher l'agent de dériver).
- Ne crée et ne modifie aucun fichier. Propose seulement, et attends ma validation.

## Format de réponse attendu

```md
# ADR-XXX - [Titre de la décision]

## Statut

Proposée

## Contexte

## Décision

## Options envisagées

### Option 1 - ...

### Option 2 - ...

## Raisons du choix

## Conséquences

### Conséquences positives

### Conséquences négatives ou limites acceptées

## Règles à respecter par les agents IA

## Points à revoir plus tard
```

À la fin, proposer aussi : un nom de fichier, un résumé en une phrase, et les
éventuels points à clarifier avant validation.

## Règle finale

Le développeur décide.
L'agent structure.
Le développeur valide.
L'agent crée l'ADR.
L'agent s'arrête.
