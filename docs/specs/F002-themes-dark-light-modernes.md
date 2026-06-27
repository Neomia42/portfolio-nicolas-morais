# F002 - Themes dark et light modernes

## Objectif

Finaliser deux themes visuels coherents pour le portfolio : un theme dark moderne par defaut et un theme light moderne activable.

La feature doit consolider le fonctionnement du selecteur de theme et l'usage des variables CSS existantes pour que les fonds, surfaces, textes, bordures et interactions changent proprement selon le theme actif, sans remplacer l'identite visuelle actuelle.

## Utilisateur concerne

L'utilisateur principal est un recruteur, une entreprise, un client potentiel ou un developpeur qui consulte le portfolio et doit pouvoir lire confortablement le contenu dans les deux themes.

L'utilisateur secondaire est le developpeur, qui doit comprendre comment le theme est pilote et comment reutiliser les variables CSS dans les prochaines sections.

## Parcours utilisateur

1. Le visiteur ouvre le portfolio.
2. Le theme dark est applique par defaut.
3. Le visiteur peut activer le theme light avec le selecteur de theme.
4. Les couleurs principales de la page changent de maniere coherente.
5. Le visiteur peut revenir au theme dark.
6. Le rendu reste lisible sur les sections existantes et prepare les futures sections du portfolio.

## Criteres d'acceptation

- Le theme dark est le theme par defaut a chaque chargement de page.
- Le theme light peut etre active depuis l'interface pendant la session.
- Le theme dark peut etre reactive depuis l'interface pendant la session.
- Le changement de theme modifie les couleurs sans rechargement de page.
- Le choix du theme n'est pas persiste dans `localStorage` pour F002.
- Le theme systeme de l'utilisateur n'est pas gere automatiquement pour F002.
- Les variables CSS existantes restent la base du systeme visuel.
- Les couleurs de fond, surface, texte, texte secondaire, bordure, accent, lien et focus sont coherentes dans les deux themes.
- Les classes Tailwind utilisees s'appuient sur les tokens ou variables CSS du projet.
- Le selecteur de theme affiche un etat comprehensible pour l'utilisateur.
- Le bouton de theme possede un libelle accessible dans F002.
- Le selecteur de theme reste utilisable au clavier.
- Les contrastes restent lisibles dans les deux themes sur les contenus temporaires actuels.
- Le systeme de theme reste independant de shadcn/ui.
- La feature ne cree pas de nouvelle identite visuelle globale.

## Hors perimetre

- Refaire tout le design du portfolio.
- Creer les contenus definitifs des sections presentation, competences ou projets.
- Ajouter des animations avancees de transition de theme.
- Ajouter une persistance du theme dans `localStorage`.
- Ajouter un theme systeme automatique base sur `prefers-color-scheme`.
- Ajouter ou configurer shadcn/ui.
- Ajouter une dependance.
- Modifier l'architecture du projet.
- Optimiser finement le SEO ou les metadonnees.

## Cas d'erreur

- Si le portfolio s'ouvre en light par defaut, la feature n'est pas validee.
- Si le changement de theme necessite un rechargement de page, la feature n'est pas validee.
- Si le theme light reste actif apres rechargement de page via une persistance non demandee, le perimetre est depasse.
- Si le theme systeme du navigateur change automatiquement le theme du portfolio, le perimetre est depasse.
- Si certaines zones restent avec des couleurs incoherentes ou illisibles apres changement de theme, la feature doit etre revue.
- Si le selecteur de theme n'est pas comprehensible ou pas utilisable au clavier, la feature doit etre revue.
- Si le bouton de theme n'a pas de libelle accessible, la feature doit etre revue.
- Si l'implementation contourne les variables CSS existantes avec des couleurs isolees non reutilisables, la feature doit etre revue.
- Si shadcn/ui impose les couleurs globales du portfolio, le perimetre est depasse.

## Niveau d'apprentissage

Maitrise obligatoire

Cette feature est structurante pour tout le portfolio : les futures sections devront reutiliser le meme systeme de theme. Le developpeur doit comprendre le role de `:root`, de `:root[data-theme="light"]`, des variables CSS et des tokens Tailwind v4.

## Points d'implementation

- [x] Point 1 - Verifier et consolider les variables CSS des themes dark et light
- [ ] Point 2 - Appliquer les tokens de theme aux zones visibles existantes
- [ ] Point 3 - Corriger le fonctionnement du selecteur dark/light
- [ ] Point 4 - Ajouter un libelle accessible au bouton de theme
- [ ] Point 5 - Verifier que le theme dark revient par defaut au rechargement
- [ ] Point 6 - Verifier le rendu visuel et les contrastes de base dans les deux themes

## Etat d'avancement

Date :
- 2026-06-27

Points termines :
- Point 1 - Verifier et consolider les variables CSS des themes dark et light

Prochain point :
- Point 2 - Appliquer les tokens de theme aux zones visibles existantes

Etat actuel :
- La spec F002 est creee et decoupee.
- Le point 1 est implemente et valide.
- Les variables CSS de theme sont consolidees.
- Les references invalides de `Header.css` aux anciennes variables de texte ont ete corrigees.
- Le build de verification du point 1 est passe.

Limites a respecter a la reprise :
- Reprendre au point 2 uniquement.
- Ne pas modifier le fonctionnement du selecteur dark/light avant le point 3.
- Ne pas ajouter de persistance dans `localStorage`.
- Ne pas ajouter de gestion automatique du theme systeme.
- Ne pas ajouter de dependance.
- Ne pas utiliser shadcn/ui pour imposer l'identite visuelle globale.
- Ne pas traiter les contenus definitifs des sections presentation, competences ou projets.

Points flous ou risques :
- Le point 2 doit rester limite a l'application des tokens de theme aux zones visibles existantes.
- Le libelle accessible du bouton de theme est prevu au point 4, pas au point 2.
- Les contrastes complets seront verifies au point 6.

Notes :
- Spec fonctionnelle creee.
- Decoupage technique valide.
- Point 1 implemente et valide.
- Pas de persistance du theme dans `localStorage` pour F002.
- Pas de gestion automatique du theme systeme pour F002.
- Le bouton de theme doit avoir un libelle accessible dans F002.
