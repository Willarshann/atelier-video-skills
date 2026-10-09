# Procédés de presets : observations publiques et limites

Un pack commercial fourni par l'utilisateur a été inventorié (139 macros), cinq étudiées en détail. Les notices et licences ont été lues sans installation. Aucun fichier du pack ni police/icone/macro/vidéo client n'est fourni ici.

| Procédé | Observation | Réalisation indépendante testée |
|---|---|---|
| Compact | Espacement de caractères animé via courbe | Caractères qui se resserrent dans une largeur mesurée. |
| Letter By Letter | Follower, décalage et scale élastique | Stagger ~0,9 frame/lettre, entrée 14 frames, rebond réduit ; Elastic exact non reproduit. |
| Cinematic | Échelle et opacité | Scale 1,04→1 sur 28 frames. |
| Text Slice | Masques et copies complémentaires | Deux demi-textes horizontaux, translations ±28 px ; simplification du masque incliné. |
| Shine | Masque étroit incliné, bord doux, trajet et glow | Gradient clipsé aux glyphes, passage 36 frames ; glow original non reproduit. |

Le pack observé autorisait l'usage personnel/commercial et la modification, mais interdisait la redistribution des composants même modifiés. Ce n'est pas la licence de tous les packs : vérifier celui fourni. Ce dépôt publie des méthodes originales et un exemple original, pas les graphes ni le code des fournisseurs.

Pour implémenter : frame courant déterministe, police chargée puis largeur mesurée, espacement initial dans la borne, amplitudes adaptées au brief ; examiner overshoot/entrée/pose. Un procédé analysé n'est pas une reproduction fidèle du rendu sans comparaison vidéo. Lire [erreurs.md](erreurs.md), notamment overshoot, fonts et cadres.
