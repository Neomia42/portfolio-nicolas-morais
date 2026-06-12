---
name: checkpoint-session
description: >-
  Utiliser ce skill pour arrêter proprement une session de développement,  
  mettre à jour l’état d’avancement d’une spec, identifier le prochain point  
  à traiter, documenter les limites à respecter à la reprise, puis proposer  
  un message de commit. L’agent ne doit pas écrire de code pendant ce checkpoint.
---
# Checkpoint de session

## Principe

Ce skill sert à arrêter une session de travail sans perdre le contexte.
Il prépare une reprise propre au prochain lancement.
L’agent ne doit pas coder pendant ce checkpoint.
Si l’utilisateur ne fournit pas explicitement le chemin de la spec à mettre à jour, demander ce chemin avant toute modification.
L’agent peut utiliser des commandes de lecture seule comme `git status`, `git diff --stat` ou lire les fichiers nécessaires pour comprendre l’état actuel, sans modifier autre chose que la spec demandée.

## Objectif

Mettre à jour uniquement la spec active avec :

- les points terminés ;
- le prochain point à traiter ; 
- l’état actuel de la feature ;
- les limites à respecter à la reprise ;
- les éventuels points flous ou risques constatés.

## Méthode

1. Lire la spec demandée. 
2. Identifier la section `Points d’implémentation`.
3. Identifier les points déjà cochés `[x]`.
4. Identifier le premier point non terminé `[ ]`.
5. Lire la section `État d’avancement` si elle existe.
6. Mettre à jour ou créer la section `État d’avancement`.
7. Ne modifier aucun fichier de code. 
8. Ne modifier aucun fichier hors de la spec demandée.
9. Proposer un message de commit adapté.
10. S’arrêter.

## Format à ajouter ou mettre à jour dans la spec

```md
## État d’avancement

Date :

Points terminés :
- ...

Prochain point :
- ...

État actuel :
- ...

Limites à respecter à la reprise :
- ...

Points flous ou risques :
- ...
```

## Format de réponse attendu

Après mise à jour de la spec, répondre avec :

```md
## Checkpoint terminé

### Spec mise à jour

### Points terminés

### Prochain point

### État actuel

### Limites à respecter à la reprise

### Message de commit proposé

Je m’arrête ici. La prochaine session devra reprendre au premier point non terminé.
```

## Interdictions

- Ne pas écrire de code.
- Ne pas lancer une nouvelle implémentation.
- Ne pas passer au point suivant.
- Ne pas modifier plusieurs specs à la fois.
- Ne pas modifier `Plan.md`, `AGENTS.md`, `CLAUDE.md` ou `docs/architecture.md`.
- Ne pas cocher un point comme terminé si le développeur ne l’a pas validé.
- Ne pas créer de commit automatiquement sauf demande explicite du développeur.

## Règle sur les commits

L’agent peut proposer un message de commit.

Le développeur exécute lui-même le commit, sauf demande explicite contraire.

Exemples :

```bash
git add .
git commit -m "docs: update F001 progress checkpoint"
```

ou, si du code a été validé pendant la session :

```bash
git add .
git commit -m "feat: add customer form state"
```

## Règle finale

L’agent constate.
L’agent met à jour la spec.
L’agent propose un commit.
Le développeur contrôle.
L’agent s’arrête.