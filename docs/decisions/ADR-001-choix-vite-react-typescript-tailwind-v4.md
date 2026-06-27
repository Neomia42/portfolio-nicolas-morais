# ADR-001 - Choix de Vite, React, TypeScript et Tailwind CSS v4 pour le portfolio

## Statut

Acceptée

## Contexte

Le projet est un portfolio personnel moderne, clair et publiable en V1.
Il doit rester simple, statique, responsive et facile à maintenir.

Le projet sert aussi de support d’apprentissage avec un workflow IA : les décisions techniques doivent donc être explicites pour éviter que les agents dérivent vers une architecture plus complexe que nécessaire.

## Décision

Utiliser Vite, React, TypeScript et Tailwind CSS v4 comme base technique du portfolio.

Ce choix est fait pour privilégier la simplicité, la rapidité de développement, la lisibilité du code, le typage des données locales et une gestion claire du style directement dans le frontend.

## Options envisagées

### Option 1 - Vite + React + TypeScript + Tailwind CSS v4

Stack frontend légère, adaptée à un portfolio statique, simple à lancer, à comprendre et à faire évoluer progressivement.

### Option 2 - Next.js

Solution plus complète, mais plus lourde pour le besoin actuel, notamment car la V1 ne prévoit pas de backend, de rendu serveur, de blog ou de contenu dynamique complexe.

### Option 3 - HTML / CSS / JavaScript sans framework

Solution très simple, mais moins adaptée à une structuration progressive en composants réutilisables, typés et stylés de façon cohérente.

## Raisons du choix

- Le besoin principal est un portfolio statique, pas une application complexe.
- Vite offre une configuration simple et un environnement de développement rapide.
- React permet de découper l’interface en composants compréhensibles.
- TypeScript aide à sécuriser les données locales, notamment les projets et compétences.
- Tailwind CSS v4 permet de construire rapidement une interface responsive et cohérente.
- La stack reste cohérente avec l’objectif d’apprentissage progressif.
- Le choix évite d’introduire une complexité backend inutile pour la V1.

## Conséquences

### Conséquences positives

- Projet simple à comprendre, lancer et maintenir.
- Bon équilibre entre simplicité, structure et productivité.
- Données locales typables en TypeScript.
- Interface facilement responsive avec Tailwind CSS v4.
- Style cohérent avec les variables CSS existantes du projet.
- Moins de risques de sur-ingénierie pour la V1.

### Conséquences négatives ou limites acceptées

- Pas de fonctionnalités serveur natives.
- Pas de génération dynamique avancée de contenu.
- Pas de CMS ou back-office intégré.
- Certaines optimisations SEO avancées seront limitées par le choix d’un site principalement statique côté frontend.
- Tailwind CSS demande de maintenir une discipline dans les classes pour éviter des composants trop chargés ou difficiles à lire.

## Règles à respecter par les agents IA

- Ne pas proposer de backend pour la V1 sans validation explicite.
- Ne pas remplacer Vite, React, TypeScript ou Tailwind CSS v4 sans nouvelle ADR validée.
- Ne pas introduire Next.js, un CMS, une base de données ou une API dédiée pour contourner cette décision.
- Garder les données du portfolio locales et typées tant que le plan V1 ne change pas.
- Utiliser Tailwind CSS v4 en cohérence avec les variables CSS existantes du projet.
- Ne pas imposer une nouvelle identité visuelle via une librairie UI.
- Préférer des composants simples et lisibles à une architecture abstraite ou générique.
- Toute dépendance ajoutée doit être justifiée par un besoin concret du portfolio.

## Points à revoir plus tard

- Réévaluer le besoin d’un framework plus complet si le portfolio évolue vers un blog, du contenu dynamique, du multilingue avancé ou un CMS.
- Réévaluer l’architecture si les données ne peuvent plus rester locales.
- Réévaluer l’organisation du style si les classes Tailwind deviennent difficiles à maintenir.
