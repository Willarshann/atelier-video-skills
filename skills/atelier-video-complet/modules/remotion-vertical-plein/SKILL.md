---
name: remotion-vertical-plein
description: Adapter une vidéo Remotion horizontale au 9:16 avec des plans plein écran, cadrages par plan et textes dans les zones sûres, notamment au style plein des Reels les Reels de référence demandé par l'utilisateur.
license: MIT
---

# Verticale plein écran

Lire [references/conditions.md](references/conditions.md) avant de commencer.

Créer un plan de travail indépendant du master horizontal. Si l'utilisateur demande deux livrables dans l'ordre horizontal puis vertical, terminer et livrer le premier avant de commencer le second. Conserver médias, timeline, textes, voix et animations sauf demande de changement.

## Choisir le cadrage demandé
- « Plein écran comme les Reels les Reels de référence » signifie une image nette qui couvre le 9:16, petit branding en coin ; pas un film réduit dans un conteneur central sur fond flouté.
- Ne pas appliquer automatiquement ce style à tous les futurs briefs : c'est une préférence de l'utilisateur pour ce type de Reel, à confronter à sa demande actuelle.
- Une vidéo en objectFit cover a besoin d'un cadrage par plan. Ne pas dupliquer le centrage à 50 % : il a coupé le premier visage le spot. Ajuster objectPosition pour conserver yeux, nez, menton et marge utile, ou choisir un autre passage autorisé.
- Examiner début/milieu/fin et déplacements. Un cadrage serré intentionnel peut couper le décor ou le haut du crâne ; distinguer cela d'un tronquage accidentel du visage. Pour un groupe, choisir le groupe utile ou un mouvement justifié, pas un suivi brut qui tremble.
- Si le plein cadre cache le geste ou perd le diplôme, adapter le cadrage ou proposer une exception ponctuelle lorsque le brief dit « de préférence ». Ne pas revendiquer une préservation intégrale de tout un groupe si le recadrage en exclut une partie.

## Habillage et lisibilité
Conserver l'identité de marque. Repositionner les éléments pour le 9:16 ; ne pas simplement découper le composite horizontal. Prévoir les zones d'interface : ordre de grandeur haut 12–14 %, bas 18–20 %, côtés 6–8 %, à adapter au support.

Mettre un dégradé léger ou une ombre pour les textes : un aplat quasi opaque sur toute la moitié basse annule visuellement le plein écran. Inspecter le contraste sur les rushs clairs. Vérifier aussi l'espace entre titre, filet et sous-titres longs : l'audit des marges peut passer malgré leur collision.

Dans l'outro, redisposer logo, nom, slogan, session, adresse et téléphones sans changer les textes ni le timing validés. Cacher le petit watermark au début de l'outro si c'est le contrat du master. Garder un temps de lecture après la dernière entrée.

## Vérification
- Polices réellement chargées avant les mesures. Aucun titre ne doit s'agrandir au-delà de sa largeur disponible pendant l'entrée.
- Comparer les données de timeline, captions et cues avec le master ; documenter seulement les recadrages et déplacements nécessaires.
- Inspecter des frames du début/milieu/fin des plans, la transition vers l'ending et la dernière frame. Faire un audit des marges ET une inspection des visages/gestes/chevauchements.
- Rendre le MP4, décoder entièrement, contrôler 9:16/durée/fps/audio et l'empreinte de la copie livrée. Vérifier l'audio PCM identique quand seul le format visuel doit changer ; ne pas confondre cette preuve avec une écoute du mix.
- Livrer un fichier distinct et un projet restaurable ; les symlinks locaux ne remplacent pas les médias dans le dossier de livraison.

Lire [references/cas-portrait.md](references/cas-portrait.md) pour les valeurs réellement testées et leurs limites. Les règles de cadrage et de qualité éditoriale sont dans les références jointes ; aucun autre skill propriétaire requis.
