---
name: decoupage-spec
description: >-
  Utiliser ce skill pour transformer une spec fonctionnelle en points  
  d’implémentation progressifs, petits, validables séparément, sans écrire de code.  
  L’agent doit lire la spec demandée, proposer un découpage technique, attendre  
  validation humaine, puis ajouter les points validés dans la spec uniquement  
  après validation explicite.
---
# Découpage de spec

## Principe

Une spec fonctionnelle décrit ce qu’il faut faire.
Avant d’implémenter, elle doit être transformée en points d’implémentation progressifs.
L’agent propose le découpage.
Le développeur valide ou modifie ce découpage.
La spec devient ensuite la source de vérité.

## Objectif du skill

Transformer une spec de feature en une checklist claire de points d’implémentation.

Chaque point doit être :

- petit ;
- compréhensible ;
- validable séparément ;
- implémentable sans traiter toute la feature ;
- cohérent avec les critères d’acceptation de la spec.

## Méthode

1. Lire la spec demandée.
2. Identifier l’objectif de la feature.
3. Lire les critères d’acceptation.
4. Lire le hors périmètre.
5. Lire les cas d’erreur.
6. Proposer un découpage en points d’implémentation.
7. Ne pas modifier de fichier.
8. Ne pas proposer de code.
9. Attendre la validation explicite du développeur.
10. Après validation, ajouter uniquement les points validés dans la spec. 
11. Ne rien modifier d’autre.

## Règles de découpage

Ne pas mélanger dans le même point :

- structure UI ;
- state local ;
- validation ;
- appel API ;
- gestion loading / success / error ;
- persistance ;
- refactor ;
- tests.

Préférer plusieurs petits points à un gros point ambigu.

## Format attendu avant validation

Répondre avec ce format :

```md
## Découpage proposé

### Spec analysée

### Résumé de la feature

### Points d’implémentation proposés

- [ ] Point 1 - ...
- [ ] Point 2 - ...
- [ ] Point 3 - ...

### Vérification par rapport aux critères d’acceptation

### Points flous ou décisions à confirmer

J’attends ta validation avant de modifier la spec.
```

## Format à ajouter dans la spec après validation

Ajouter une section comme celle-ci :

```md
## Points d’implémentation

- [ ] Point 1 - ...
- [ ] Point 2 - ...
- [ ] Point 3 - ...
```

Si nécessaire, ajouter aussi :

```md
## État d’avancement

Points terminés :
- Aucun pour le moment.

Prochain point :
- Point 1 - ...

Notes :
- Découpage validé.
- Implémentation non commencée.
```

## Interdictions

- Ne pas écrire de code.
- Ne pas modifier la spec avant validation.
- Ne pas ajouter de point hors périmètre.
- Ne pas transformer la feature en refactor global.
- Ne pas mélanger front, backend et persistance dans un seul point.
- Ne pas supprimer les critères d’acceptation existants.
- Ne pas modifier `Plan.md`, `AGENTS.md`, `CLAUDE.md` ou `docs/architecture.md`.

## Exemple de bon découpage

Pour une spec “Formulaire de création client” :

```md
## Points d’implémentation

- [ ] Point 1 - Créer la structure visuelle du formulaire
- [ ] Point 2 - Ajouter le state des champs
- [ ] Point 3 - Ajouter la validation des champs vides
- [ ] Point 4 - Ajouter la validation email
- [ ] Point 5 - Brancher l’appel API
- [ ] Point 6 - Gérer loading / success / error
```

## Règle finale

L’agent analyse.
L’agent propose.
Le développeur valide.
L’agent ajoute les points validés dans la spec.
L’agent s’arrête.