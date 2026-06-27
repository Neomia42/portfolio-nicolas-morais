# ADR-002 - Convention de variables CSS pour les couleurs du portfolio

## Statut

Acceptée

## Contexte

Le portfolio doit conserver une identité visuelle cohérente en mode dark et en mode light.

Le projet utilise Vite, React, TypeScript et Tailwind CSS v4. Les couleurs sont basées sur Radix UI, mais le projet doit garder son propre système de nommage afin de ne pas dépendre directement d'une librairie UI ni entrer en collision avec les tokens Tailwind.

## Décision

Créer une convention de nommage pour les couleurs du portfolio avec deux niveaux :

- les variables CSS source du projet utilisent le préfixe `--site-*` ;
- les tokens Tailwind CSS v4 utilisent le namespace `--color-*` dans `@theme inline`.

Les variables `--site-*` sont la source de vérité pour les couleurs. Les tokens `--color-*` ne font que les exposer au système Tailwind.

## Options envisagées

### Option 1 - Variables source `--site-*` + tokens Tailwind `--color-*`

Séparer clairement les variables internes du portfolio et les tokens consommés par Tailwind CSS v4.

### Option 2 - Variables génériques sans préfixe

Utiliser des noms comme `--background`, `--foreground` ou `--border`.

Cette option est plus courte, mais plus ambiguë et plus proche des conventions d'autres outils.

### Option 3 - Couleurs uniquement dans Tailwind

Définir uniquement des tokens Tailwind sans variables CSS source propres au projet.

Cette option fonctionne, mais rend moins claire la source de vérité du thème.

## Raisons du choix

- Éviter les collisions de nommage avec Tailwind, shadcn/ui ou d'autres conventions.
- Rendre lisible la différence entre les variables du projet et les tokens Tailwind.
- Garder le dark mode comme base dans `:root`.
- Garder le light mode comme override dans `:root[data-theme="light"]`.
- Centraliser les couleurs pour faciliter les ajustements futurs.
- Permettre à Tailwind CSS v4 de réutiliser les variables via `@theme inline`.

## Conséquences

### Conséquences positives

- Le système de thème est plus clair.
- Les composants utilisent des classes Tailwind lisibles comme `text-text`, `bg-background` ou `border-border`.
- Les valeurs réelles restent centralisées dans `--site-*`.
- Les agents IA disposent d'une convention explicite à respecter.

### Conséquences négatives ou limites acceptées

- Le nommage demande une discipline stricte.
- Toute ancienne classe basée sur un ancien token doit être renommée.
- Il faut éviter d'ajouter trop de variables globales sans besoin concret.

## Règles à respecter par les agents IA

- Utiliser `--site-*` pour les variables CSS source du portfolio.
- Utiliser `--color-*` uniquement dans `@theme inline` pour exposer les couleurs à Tailwind CSS v4.
- Ne pas réintroduire de variables génériques comme `--background`, `--foreground` ou `--text-color`.
- Ne pas hardcoder une couleur dans un composant si un token existe déjà.
- Ne pas remplacer cette convention sans nouvelle ADR validée.
- Garder `:root` comme thème dark par défaut.
- Garder `:root[data-theme="light"]` comme override du thème light.

## Points à revoir plus tard

- Vérifier les contrastes dark/light.
- Ajouter seulement les tokens réellement nécessaires.
- Réévaluer les noms si le design system devient plus complet.
