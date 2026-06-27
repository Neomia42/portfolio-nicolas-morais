# Architecture du projet

## Objectif

Ce document décrit l'architecture cible du portfolio V1.

Il sert de référence avant toute modification importante du code. Il ne remplace pas `Plan.md`, les specs de features ni les ADR.

## Vue d'ensemble

Le projet est un portfolio statique en page unique, développé avec Vite, React, TypeScript et Tailwind CSS v4.

La V1 ne contient pas de backend, pas de base de données, pas d'API dédiée et pas de CMS. Les contenus nécessaires à l'affichage restent locaux au projet.

## Stack validée

- Vite pour l'environnement de développement et le build.
- React pour construire l'interface en composants.
- TypeScript pour typer les données et les props.
- Tailwind CSS v4 pour le style et le responsive.
- Variables CSS existantes comme base de l'identité visuelle.

Décision liée : `docs/decisions/ADR-001-choix-vite-react-typescript-tailwind-v4.md`.

## Organisation générale

- `src/main.tsx` : point d'entrée React.
- `src/App.tsx` : composition principale de la page.
- `src/components/` : composants d'interface réutilisables.
- `src/data/` : données locales typées, notamment les projets.
- `src/assets/` : assets importés dans le code React.
- `public/` : fichiers servis directement par URL publique.
- `docs/specs/` : specs fonctionnelles.
- `docs/decisions/` : ADR et décisions techniques validées.

## Principes d'architecture

- Garder une architecture simple et lisible.
- Construire la page par sections indépendantes.
- Séparer les données de leur affichage.
- Éviter les abstractions tant qu'elles ne résolvent pas un vrai problème.
- Ne pas ajouter de dépendance sans justification.
- Ne pas introduire de backend pour la V1.
- Ne pas refactorer hors périmètre d'une spec ou d'un point validé.

## Données

Les données du portfolio restent locales et typées en TypeScript.

Les projets doivent être stockés dans `src/data`, puis affichés par des composants React. Les composants ne doivent pas contenir directement toute la donnée métier si cette donnée est destinée à évoluer.

## Style et thèmes

Le style repose sur Tailwind CSS v4 et les variables CSS existantes.

Le thème dark est le thème par défaut. Le thème light est une variante complète, pas une simple inversion automatique.

shadcn/ui peut être utilisé uniquement de façon ponctuelle, composant par composant, après validation. Il ne doit pas imposer l'identité visuelle globale du portfolio.

## Accessibilité et responsive

Chaque section doit rester utilisable sur mobile, tablette et desktop.

Les éléments interactifs doivent avoir des états hover, focus et active lisibles. La navigation clavier et les libellés accessibles doivent être vérifiés dans les points de finition.

## Règles pour les agents IA

Avant toute modification importante, lire :

1. `Plan.md`
2. `docs/architecture.md`
3. la spec concernée dans `docs/specs/`
4. les ADR pertinentes dans `docs/decisions/`

Un agent IA ne doit pas :

- implémenter une feature entière d'un coup ;
- modifier l'architecture sans validation ;
- ajouter un backend, une API, une base de données ou un CMS pour la V1 ;
- remplacer la stack validée sans nouvelle ADR ;
- ajouter une dépendance sans justification ;
- refactorer du code hors périmètre.

## Hors périmètre architectural V1

- Backend.
- Base de données.
- API dédiée.
- CMS.
- Authentification.
- Blog.
- Multilingue.
- Synchronisation automatique avec GitHub.

## Points à revoir plus tard

- Organisation du contenu si le nombre de projets augmente fortement.
- Besoin éventuel d'un CMS ou d'une source de données externe.
- Besoin éventuel d'un framework plus complet si le portfolio évolue vers un site plus dynamique.
