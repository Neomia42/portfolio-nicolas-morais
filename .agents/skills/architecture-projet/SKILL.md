---
name: architecture-projet
description: >-
  Utiliser ce skill pour aider à créer ou mettre à jour docs/architecture.md
  à partir du Plan.md, des ADR validées et de la structure réelle du repo.
  L’agent doit décrire l’organisation technique du projet, les dossiers, les flux
  principaux et les règles de placement du code, sans choisir une nouvelle stack
  ni modifier le code.
---

# Architecture projet

## Principe

Ce skill sert à créer ou mettre à jour `docs/architecture.md`.

`Plan.md` décrit ce qu’on construit.

`docs/architecture.md` décrit comment le projet est organisé techniquement.

L’agent ne doit pas inventer une architecture différente des décisions déjà validées.

## Objectif

Produire un fichier `docs/architecture.md` clair, court et utile pour :

- comprendre la structure du repo ;
- savoir où placer le code ;
- expliquer le flux général des données ;
- guider les agents IA pendant les features ;
- éviter les modifications hors périmètre ;
- éviter que l’agent devine l’organisation technique.

## Entrées attendues

L’agent doit lire si disponible :

- `AGENTS.md` pour la structure attendue du projet et les règles générales ;
- `CLAUDE.md` si Claude Code est utilisé ;
- `Plan.md` pour comprendre ce qu’on construit ;
- `docs/decisions/ADR-001-stack.md` pour la stack validée ;
- `docs/decisions/ADR-002-monorepo.md` si le projet est en monorepo ;
- `package.json` ;
- `pnpm-workspace.yaml` ;
- la structure réelle du repo si elle existe déjà.

Si la structure réelle du repo diffère de celle décrite dans `AGENTS.md`, l’agent doit le signaler avant de proposer `docs/architecture.md`.
Si une décision technique essentielle manque, l’agent doit le signaler avant de proposer une architecture.

## Méthode

1. Lire `AGENTS.md`.
2. Lire `Plan.md`.
3. Lire les ADR disponibles.
4. Lire `package.json` et `pnpm-workspace.yaml` si disponibles.
5. Comparer la structure attendue dans `AGENTS.md` avec la structure réelle du repo.
6. Signaler les écarts éventuels.
7. Proposer un contenu court pour `docs/architecture.md`.
8. Attendre validation.
9. Après validation, créer ou mettre à jour uniquement `docs/architecture.md`.

## Format de réponse attendu avant validation

````md
## Architecture proposée

### Sources utilisées

- ...

### Points bloquants éventuels

- ...

### docs/architecture.md proposé

```md
# Architecture du projet

## Type de projet

## Structure du repo

## Rôle des dossiers

## Flux principal

## Règles de placement du code

## Règles pour les agents IA

## Limites actuelles

## Points à revoir plus tard
```
````

J’attends ta validation avant de modifier `docs/architecture.md`.

````

## Format recommandé pour docs/architecture.md

```md
# Architecture du projet

## Type de projet

Décrire brièvement le type de projet.

Exemples :
- Front-only React/Vite
- Fullstack monorepo pnpm
- Next.js app
- API Node séparée

## Structure du repo

```txt
mon-projet/
├─ apps/
├─ packages/
├─ docs/
├─ .agents/
└─ .claude/
````

## Rôle des dossiers

- `apps/web` :
- `apps/api` :
- `packages/shared` :
- `docs/specs` :
- `docs/decisions` :
- `.agents/skills` :
- `.claude/skills` :

## Flux principal

1. L’utilisateur interagit avec le front.
2. Le front valide les données simples.
3. Le front appelle l’API si nécessaire.
4. L’API valide les données côté serveur.
5. L’API lit ou écrit les données.
6. L’API retourne une réponse.
7. Le front affiche le résultat ou une erreur.

## Règles de placement du code

- Les composants UI vont dans le front.
- La logique métier partagée va dans `packages/shared` si nécessaire.
- Les routes API vont dans `apps/api`.
- Les specs de features vont dans `docs/specs`.
- Les décisions techniques vont dans `docs/decisions`.

## Règles pour les agents IA

- Lire ce fichier avant une modification structurelle.
- Ne pas créer de nouveau dossier majeur sans validation.
- Ne pas déplacer du code sans justification.
- Ne pas modifier l’architecture pour une simple feature.
- Respecter les ADR existantes.

## Limites actuelles

- ...

## Points à revoir plus tard

- ...

```

## Interdictions

- Ne pas écrire de code.
- Ne pas initialiser le projet.
- Ne pas modifier `Plan.md`.
- Ne pas modifier les ADR.
- Ne pas choisir une nouvelle stack.
- Ne pas créer de nouvelle spec.
- Ne pas ajouter de dépendance.
- Ne pas inventer une structure différente du repo réel.
- Ne pas transformer `architecture.md` en documentation longue ou théorique.

## Règle finale

L’agent observe.

L’agent structure.

Le développeur valide.

L’agent écrit `docs/architecture.md`.

L’agent s’arrête.
```
