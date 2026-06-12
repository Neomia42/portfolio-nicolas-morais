# Plan du projet

## 1. Cadrage projet

### Objectif du projet

Créer un portfolio personnel moderne, clair et crédible qui présente rapidement le profil, les compétences, les liens professionnels, le CV et une sélection de projets concrets.

Le portfolio sert également de projet d'apprentissage guidé par IA. Le développeur garde le contrôle sur les décisions, comprend les composants utilisés et valide les étapes importantes avant leur mise en œuvre.

### Utilisateur cible

L'utilisateur principal est un recruteur, une entreprise, un client potentiel ou un développeur qui souhaite comprendre rapidement le profil présenté, identifier les compétences maîtrisées et consulter des preuves concrètes du travail réalisé.

L'utilisateur secondaire est le développeur lui-même, qui utilise le projet comme support d'apprentissage, de progression et de démonstration de compétences.

### Problème résolu

Le portfolio rassemble dans un point d'entrée unique les informations actuellement dispersées entre les réseaux professionnels, le CV, les dépôts de code et les projets publiés.

Il doit permettre au visiteur de répondre rapidement à trois questions :

- Qui est la personne présentée ?
- Quelles compétences maîtrise-t-elle ?
- Où peut-on consulter son travail, son CV ou ses profils professionnels ?

### Version initiale attendue

La V1 est une page unique, scrollable, responsive et suffisamment complète pour être publiée et partagée.

Elle comprend :

- une section de présentation avec photo, titre professionnel et description courte ;
- un thème dark moderne par défaut et un thème light moderne activable ;
- des liens vers LinkedIn, X et GitHub ;
- un CV téléchargeable ;
- une section compétences organisée par catégories, notamment les stacks maîtrisées et les compétences liées à l'IA ;
- une section projets contenant au moins un projet ;
- une vidéo YouTube intégrée ou représentée visuellement pour chaque projet concerné ;
- des liens d'action vers le dépôt GitHub, la démonstration ou le site public du projet ;
- une expérience fluide sur mobile, tablette et ordinateur.

### Hors périmètre pour le moment

- section contact distincte et formulaire de contact ;
- blog, commentaires et témoignages ;
- back-office ou CMS ;
- authentification ;
- base de données ou API dédiée ;
- multilingue pour la V1 ;
- statistiques de visite ;
- synchronisation automatique des projets depuis GitHub ;
- animations avancées ou omniprésentes ;
- optimisation SEO poussée au-delà des éléments essentiels.

### Contraintes importantes

- Conserver une V1 courte, lisible et publiable.
- Utiliser React, TypeScript, Vite et Tailwind CSS v4.
- Ne pas ajouter de backend pour la V1.
- Stocker les données des projets localement dans le dossier `src/data`.
- Conserver les variables CSS existantes comme base de l'identité visuelle.
- Concevoir deux thèmes cohérents : dark par défaut et light activable.
- Privilégier la crédibilité et la lisibilité aux effets visuels.
- Garder le contenu simple à modifier.
- Assurer un fonctionnement correct sur mobile.
- Utiliser shadcn/ui uniquement de façon ponctuelle lorsqu'un composant apporte une valeur réelle.
- Comprendre, adapter aux variables CSS et valider chaque composant shadcn/ui avant son utilisation.
- Ne pas laisser shadcn/ui imposer l'identité visuelle globale du portfolio.

## 2. Hypothèses validées

- Le portfolio est destiné en priorité aux recruteurs, entreprises et clients potentiels.
- La navigation principale repose sur une page unique scrollable.
- Le thème dark est le thème par défaut.
- Le thème light est une expérience complète et non une simple inversion de couleurs.
- La V1 contient une section de présentation, une section compétences et une section projets.
- La section compétences présente des catégories lisibles comme les stacks maîtrisées, les outils et l'IA.
- Les liens professionnels et le CV téléchargeable suffisent pour la prise de contact en V1.
- La V1 contient au moins un projet réel.
- Les données restent statiques, locales et typées en TypeScript.
- shadcn/ui reste facultatif et limité à des besoins ciblés.
- Le développement est progressif et les décisions importantes restent soumises à validation humaine.

## 3. Plan de construction

### Phase 1 - Base projet

Objectif : stabiliser l'identité visuelle et la structure générale avant l'ajout du contenu principal.

- Organiser la page avec une structure HTML sémantique.
- Définir le conteneur principal, les largeurs et les espacements responsive.
- Finaliser le fonctionnement du sélecteur dark/light.
- Consolider l'usage des variables CSS pour les fonds, surfaces, textes, bordures et interactions.
- Définir les styles communs des titres, liens, boutons et surfaces.
- Préserver une identité visuelle personnalisée indépendante de shadcn/ui.
- Établir le processus d'évaluation des éventuels composants shadcn/ui.

### Phase 2 - Fonction principale

Objectif : construire le parcours principal permettant de découvrir le profil, vérifier les compétences et consulter les réalisations.

- Créer la section de présentation avec photo, titre professionnel et description courte.
- Ajouter les liens vers LinkedIn, X et GitHub.
- Ajouter le téléchargement du CV.
- Créer la section compétences.
- Organiser les compétences en catégories lisibles, notamment frontend, outils et IA.
- Créer la section projets avec au moins un projet réel.
- Présenter le contexte, les technologies et les résultats de chaque projet.
- Ajouter une vidéo YouTube ou une miniature associée.
- Ajouter les liens vers GitHub, la démonstration ou le site public.

### Phase 3 - Données / persistance

Objectif : rendre le contenu simple à maintenir sans ajouter de complexité technique inutile.

- Définir un modèle TypeScript pour les projets.
- Stocker les projets dans `src/data/projects.ts`.
- Séparer les données des composants chargés de leur affichage.
- Définir localement les catégories et les éléments de compétences.
- Centraliser les liens professionnels et le chemin du CV si cela facilite leur maintenance.
- Conserver des données statiques pour toute la V1.
- Ne pas ajouter d'API, de CMS ou de base de données.

### Phase 4 - Finition MVP

Objectif : obtenir un portfolio fiable, accessible et prêt à être publié.

- Finaliser l'affichage sur mobile, tablette et ordinateur.
- Vérifier les contrastes des thèmes dark et light.
- Ajouter des états hover, focus et active cohérents.
- Vérifier la navigation au clavier et les libellés accessibles.
- Optimiser les images et l'affichage des vidéos.
- Ajouter les métadonnées SEO essentielles.
- Remplacer tous les contenus temporaires par les contenus définitifs.
- Valider le lint et le build de production.

## 4. Features prévues

- F001 - Structure sémantique et layout responsive.
- F002 - Thèmes dark et light modernes.
- F003 - Section de présentation personnelle.
- F004 - Liens professionnels et CV téléchargeable.
- F005 - Section des compétences organisée par catégories.
- F006 - Modèle de données local et typé des projets.
- F007 - Section de présentation des projets.
- F008 - Vidéo et liens d'action des projets.
- F009 - Accessibilité et finitions responsive.
- F010 - Métadonnées essentielles et validation du MVP.

## 5. Décisions reportées

- Définir le positionnement professionnel exact avant la spécification de F003.
- Définir les catégories et la liste précise des compétences avant la spécification de F005.
- Fixer le nombre final de projets avant la spécification de F007.
- Choisir entre une iframe YouTube et une miniature cliquable avant la spécification de F008.
- Évaluer individuellement les composants shadcn/ui lors de la spécification de la feature concernée.
- Définir l'action visuelle principale de la section de présentation avant sa finition.
- Confirmer la langue initiale du contenu avant la rédaction définitive.
