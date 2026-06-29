# F003 - Section de presentation personnelle

## Objectif

Creer la section de presentation personnelle du portfolio.

Cette section doit permettre au visiteur de comprendre rapidement qui est la personne presentee, son positionnement professionnel general, et pourquoi continuer a parcourir le portfolio.

La section doit rester courte, credible et lisible. Elle sert d'introduction au reste de la page, sans remplacer les futures sections liens/CV, competences ou projets.

## Utilisateur concerne

L'utilisateur principal est un recruteur, une entreprise, un client potentiel ou un developpeur qui arrive sur le portfolio et veut identifier rapidement :

- qui est la personne ;
- quel type de profil elle presente ;
- quelle impression professionnelle generale se degage ;
- ou continuer ensuite dans la page.

L'utilisateur secondaire est le developpeur du portfolio, qui doit pouvoir modifier facilement le contenu de presentation sans toucher a une logique complexe.

## Parcours utilisateur

1. Le visiteur ouvre le portfolio.
2. Il voit rapidement la section de presentation en haut ou proche du haut de la page.
3. Il identifie le nom ou l'identite presentee.
4. Il lit un titre professionnel court.
5. Il lit une description courte du profil.
6. Il voit une photo ou un visuel personnel si l'asset est disponible.
7. Il comprend qu'il peut continuer vers les competences, les projets, les liens professionnels ou le CV dans les sections suivantes.

## Criteres d'acceptation

- La section de presentation existe dans la page principale.
- La section contient un titre principal ou une identite clairement visible.
- La section contient un titre professionnel court.
- La section contient une description courte du profil.
- La section peut afficher une photo ou un visuel personnel si l'asset est disponible.
- La section reste lisible en theme dark et en theme light.
- La section reutilise les tokens de theme existants.
- La section s'integre dans le layout responsive existant.
- La section reste utilisable sur mobile, tablette et desktop.
- Le contenu temporaire est acceptable si le contenu definitif n'est pas encore valide.
- Le texte doit rester simple a remplacer plus tard.
- La section ne doit pas contenir encore les liens sociaux definitifs si ceux-ci sont traites par F004.
- La section ne doit pas contenir encore le bouton de telechargement du CV si celui-ci est traite par F004.
- La section ne doit pas introduire de nouvelle dependance.
- La section ne doit pas modifier le systeme de theme F002.

## Hors perimetre

- Ajouter les liens LinkedIn, X ou GitHub.
- Ajouter le telechargement du CV.
- Creer la section competences.
- Creer la section projets.
- Definir les donnees locales des projets.
- Ajouter une animation avancee.
- Ajouter un formulaire de contact.
- Ajouter une logique de navigation complexe.
- Ajouter une nouvelle dependance.
- Modifier l'architecture du projet.
- Refaire le design global du portfolio.
- Finaliser le texte professionnel definitif si le positionnement exact n'est pas encore valide.

## Cas d'erreur

- Si la section ne permet pas d'identifier rapidement le profil, la feature n'est pas validee.
- Si la section melange presentation personnelle, liens sociaux, CV, competences et projets, le perimetre est depasse.
- Si la section devient trop longue ou trop marketing, elle doit etre simplifiee.
- Si la section est illisible dans un des deux themes, elle doit etre corrigee.
- Si la section casse le responsive mobile, elle doit etre corrigee.
- Si le contenu est difficile a remplacer, la feature doit etre revue.
- Si la section introduit une nouvelle identite visuelle incompatible avec F002, la feature doit etre revue.

## Niveau d'apprentissage

Apprentissage accompagne

Cette feature est importante pour apprendre a construire une section React claire, responsive et reutilisable, mais elle ne change pas l'architecture globale du projet.

## Points d'implementation

- [x] Point 1 - Creer la structure de la section de presentation dans la page
- [x] Point 2 - Ajouter l'identite et le positionnement professionnel neutre oriente action
- [x] Point 3 - Ajouter une description courte coherente avec ce positionnement
- [x] Point 4 - Importer et afficher la photo personnelle `photo_profil_NM.webp`
- [x] Point 5 - Adapter le rendu de la photo sur mobile, tablette et desktop
- [x] Point 6 - Appliquer les styles responsive avec les tokens de theme existants
- [ ] Point 7 - Verifier la lisibilite en dark et light
- [ ] Point 8 - Verifier le rendu global mobile, tablette et desktop

## Etat d'avancement

Date :
- 2026-06-29

Points termines :
- Point 1 - Creer la structure de la section de presentation dans la page
- Point 2 - Ajouter l'identite et le positionnement professionnel neutre oriente action
- Point 3 - Ajouter une description courte coherente avec ce positionnement
- Point 4 - Importer et afficher la photo personnelle `photo_profil_NM.webp`
- Point 5 - Adapter le rendu de la photo sur mobile, tablette et desktop
- Point 6 - Appliquer les styles responsive avec les tokens de theme existants

Prochain point :
- Point 7 - Verifier la lisibilite en dark et light

Etat actuel :
- La section de presentation existe dans `src/App.tsx`.
- L'identite, le titre professionnel et la description courte sont en place.
- La photo personnelle est importee depuis `src/assets/img/photo_profil_NM.webp`.
- Le rendu photo a ete adapte en responsive avec une photo ronde, limitee en taille sur mobile.
- La section utilise une grille responsive : photo au-dessus sur mobile, photo a gauche et texte a droite sur tablette/desktop.
- Le build de production a ete verifie apres le point 6 avec `pnpm build`.

Limites a respecter a la reprise :
- Ne pas ajouter les liens LinkedIn, X ou GitHub dans F003 ; ils sont prevus pour F004.
- Ne pas ajouter le telechargement du CV dans F003 ; il est prevu pour F004.
- Ne pas modifier le systeme de theme F002.
- Ne pas ajouter de dependance.
- Ne pas refactorer la section en composant dedie sans validation explicite.
- Reprendre au point 7 uniquement : verifier la lisibilite en dark et light.

Points flous ou risques :
- Le fond `bg-surface` a ete retire manuellement de la section de presentation pour un rendu plus leger ; il faut verifier que ce choix reste lisible dans les deux themes.
- La bordure de la section et le fond `bg-surface-muted` autour de la photo doivent etre controles en dark et light.
- Le contenu textuel reste volontairement simple et pourra etre affine plus tard.

Notes :
- Spec fonctionnelle creee.
- Decoupage technique valide.
- Point 1 implemente et valide.
- Point 2 implemente et valide.
- Point 3 implemente et valide.
- Point 4 implemente et valide.
- Point 5 implemente et valide.
- Point 6 implemente et valide.
- Le positionnement valide est neutre et oriente action.
- Exemple de direction editoriale : "Je concois, developpe et optimise des interfaces web modernes, lisibles et maintenables."
- La photo personnelle est disponible dans `src/assets/img/photo_profil_NM.webp`.
- Le fond `bg-surface` a ete retire manuellement de la section de presentation pour un rendu plus leger, tout en conservant les tokens de theme sur les textes, bordures et le fond de la photo.
