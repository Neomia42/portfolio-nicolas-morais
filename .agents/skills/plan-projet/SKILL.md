---
name: plan-projet
description: >-
  Utiliser ce skill pour transformer un cadrage projet validé en plan de  
  construction structuré. L’agent doit proposer les phases de développement,  
  les premières features, identifier les points bloquants à résoudre avant  
  création du plan, puis distinguer les hypothèses validées et les décisions  
  reportées, sans écrire de code ni créer de specs détaillées avant validation  
  humaine.
---
# Plan projet

## Principe

Ce skill sert à transformer un cadrage projet en plan de construction.
Il intervient après le cadrage initial du projet et avant la création des specs de features.
L’agent ne doit pas coder.
L’agent ne doit pas créer de specs détaillées.
L’agent propose un plan.
Le développeur valide ou modifie.
Après validation explicite, l’agent peut écrire ou mettre à jour `Plan.md`.

## Entrées attendues

L’agent doit partir de l’un des éléments suivants :

- un cadrage projet fourni dans le prompt ;
- un `Plan.md` déjà partiellement rempli ;
- une idée de projet explicitement décrite par le développeur.

Si le cadrage est trop flou, l’agent doit poser les questions minimales nécessaires avant de proposer les phases.


## Règle sur les incertitudes
- `Plan.md` ne doit pas contenir de section `Points flous à confirmer`.
- Si un point flou bloque la création du plan, l’agent doit poser une question et s’arrêter.
- Si une décision est nécessaire pour définir le périmètre, les phases ou les premières features, elle doit être tranchée avant l’écriture de `Plan.md`.
- Seules les décisions non bloquantes peuvent être placées dans `Décisions reportées`.


```

## Méthode

1. Lire le cadrage projet fourni.
2. Identifier l’objectif du projet.
3. Identifier l’utilisateur cible.
4. Identifier la version initiale attendue.
5. Identifier le hors périmètre.
6. Identifier les points flous éventuels.
7. Classer les points flous en deux catégories :
    - bloquants ;
    - non bloquants.
8. Identifier les décisions éventuelles.
9. Classer les décisions en deux catégories :
    - décisions bloquantes à trancher avant `Plan.md` ;
    - décisions reportables à traiter plus tard.
10. Si un point flou ou une décision bloquante existe, s’arrêter et poser uniquement les questions nécessaires.
11. Si aucun point bloquant n’existe, proposer des phases de développement progressives.
12. Proposer les premières features associées aux phases.
13. Proposer les hypothèses validées à inscrire dans `Plan.md`.
14. Proposer les décisions reportées à inscrire dans `Plan.md`.
15. Attendre validation explicite avant toute modification de fichier.
16. Après validation, écrire ou mettre à jour uniquement `Plan.md`.

## Format de réponse attendu avant validation

```md


Si le cadrage contient des points flous ou décisions bloquantes, répondre avec ce format :

## Points à résoudre avant création de Plan.md

### Résumé du cadrage

### Points flous bloquants

- ...

### Décisions bloquantes à trancher

- ...

### Pourquoi ces points bloquent le plan

- ...

### Questions à trancher

1. ...

Je m’arrête ici. Je ne modifierai pas `Plan.md` tant que ces points ne sont pas résolus.


## Cas 2 - Aucun point bloquant

Si le cadrage est suffisant pour construire le plan, répondre avec ce format :


## Plan de construction proposé

### version active

### Résumé du cadrage validé

### Hypothèses validées

- ...

### Phase 1 - Base projet

### Phase 2 - Fonction principale

### Phase 3 - Données / persistance

### Phase 4 - Finition MVP

### Features proposées

- F001 - ...
- F002 - ...
- F003 - ...

### Hors périmètre confirmé

- ...

### Décisions reportées

- ...


J’attends ta validation avant de modifier `Plan.md`.
```


## Format recommandé pour Plan.md

```Markdown
## Format recommandé pour Plan.md

# Plan du projet

## Version active 

## 1. Cadrage projet

### Objectif du projet

### Utilisateur cible

### Problème résolu

### Version initiale attendue

### Hors périmètre pour le moment

### Contraintes importantes

## 2. Hypothèses validées

- ...

## 3. Plan de construction

### Phase 1 - Base projet

### Phase 2 - Fonction principale

### Phase 3 - Données / persistance

### Phase 4 - Finition MVP

## 4. Features prévues

- F001 - ...
- F002 - ...
- F003 - ...

## 5. Décisions reportées

- ...
```

## ## Règle sur les points flous et décisions

`Plan.md` ne doit pas contenir de section `Points flous à confirmer`.

`Plan.md` ne doit pas contenir de section vague `Décisions à prendre`.

Les points flous bloquants doivent être résolus avant l’écriture de `Plan.md`.

Les décisions bloquantes doivent être tranchées avant l’écriture de `Plan.md`.

Les éléments non bloquants peuvent être inscrits uniquement sous forme :

- d’hypothèses validées ;
- de décisions reportées ;
- de décisions à traiter plus tard dans une ADR, une spec ou une phase dédiée.


```

## Interdictions

- Ne pas écrire de code.
- Ne pas créer de spec détaillée.
- Ne pas initialiser le projet.
- Ne pas choisir définitivement la stack sans validation.
- Ne pas modifier `AGENTS.md`, `CLAUDE.md`, `docs/architecture.md` ou `docs/decisions/`.
- Ne pas ajouter des features hors périmètre.
- Ne pas transformer un MVP simple en application trop large.
- Ne pas modifier `Plan.md` avant validation explicite.
- Ne pas répondre uniquement avec une liste de titres de sections pour `Plan.md`.
- Toujours proposer le contenu concret qui sera écrit dans chaque section.
```

## Règle finale

L’agent analyse.
L’agent propose.
Le développeur valide.
L’agent met à jour `Plan.md`.
L’agent s’arrête.