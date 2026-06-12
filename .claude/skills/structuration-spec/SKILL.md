---
name: structuration-spec
description: >-
  Utiliser ce skill pour transformer une feature prévue dans Plan.md en spec  
  fonctionnelle claire, exploitable et limitée. L’agent doit aider à préciser  
  l’objectif, le parcours utilisateur, les critères d’acceptation, le hors  
  périmètre, les cas d’erreur et le niveau d’apprentissage, sans écrire de code  
  ni découper encore l’implémentation technique.
---
# Structuration de spec

## Principe

Ce skill sert à créer une spec fonctionnelle avant toute implémentation.
Une spec décrit ce que la feature doit faire.
Elle ne décrit pas encore le découpage technique détaillé.
L’agent aide à structurer la spec, mais le développeur valide le contenu.

## Objectif

Transformer une feature prévue en document clair dans `docs/specs/`.

La spec doit permettre ensuite :

- de valider le besoin ;
- d’éviter les ambiguïtés ;
- de limiter le périmètre ;
- de préparer le découpage technique ; 
- de guider l’agent pendant l’implémentation.

## Entrées attendues

L’agent doit partir d’au moins un des éléments suivants :

- une feature listée dans `Plan.md` ;
- une description fournie par le développeur ;
- une ancienne spec à compléter ; 
- une discussion produit déjà validée.

Si la feature est trop floue, l’agent doit poser uniquement les questions nécessaires pour produire une spec exploitable.

## Méthode

1. Lire `Plan.md` si disponible.
2. Identifier la feature concernée.
3. Identifier l’objectif fonctionnel.
4. Identifier l’utilisateur concerné.
5. Décrire le parcours utilisateur attendu. 
6. Définir les critères d’acceptation.
7. Définir le hors périmètre.
8. Définir les cas d’erreur.
9. Définir le niveau d’apprentissage. 
10. Proposer une spec fonctionnelle.
11. Attendre validation explicite avant de créer ou modifier le fichier.
12. Après validation, créer ou mettre à jour uniquement la spec concernée dans `docs/specs/`.

## Niveau d’apprentissage

Chaque spec doit indiquer un niveau :

- `Livraison rapide` : feature simple, surtout UI ou contenu.
- `Apprentissage accompagné` : feature utile pour consolider les bases.
- `Maîtrise obligatoire` : feature critique à comprendre sérieusement.

## Format attendu avant validation

```md
## Spec proposée

### Fichier proposé

`docs/specs/FXXX-nom-feature.md`

### Objectif

### Utilisateur concerné

### Parcours utilisateur

1. ...
2. ...
3. ...

### Critères d’acceptation

- ...

### Hors périmètre

- ...

### Cas d’erreur

- ...

### Niveau d’apprentissage

### Points flous à confirmer

J’attends ta validation avant de créer ou modifier la spec.
```

## Format de spec à créer après validation

```md
# FXXX - Nom de la feature

## Objectif

## Utilisateur concerné

## Parcours utilisateur

1. ...

## Critères d’acceptation

- ...

## Hors périmètre

- ...

## Cas d’erreur

- ...

## Niveau d’apprentissage

Livraison rapide / Apprentissage accompagné / Maîtrise obligatoire

## Points d’implémentation

À définir avec le skill `decoupage-spec`.

## État d’avancement

Points terminés :
- Aucun pour le moment.

Prochain point :
- À définir après découpage technique.

Notes :
- Spec fonctionnelle créée.
- Découpage technique non commencé.
```

## Interdictions

- Ne pas écrire de code.
- Ne pas créer les points d’implémentation détaillés.
- Ne pas modifier plusieurs specs à la fois.
- Ne pas modifier `Plan.md` sans demande explicite.
- Ne pas modifier `docs/architecture.md`.
- Ne pas choisir ou changer la stack.
- Ne pas élargir le périmètre sans validation.
- Ne pas créer une spec vague de type “faire le dashboard complet”.
- Ne pas créer le fichier avant validation explicite.

## Règle finale

L’agent clarifie.
L’agent propose.
Le développeur valide.
L’agent crée ou met à jour la spec.
L’agent s’arrête.