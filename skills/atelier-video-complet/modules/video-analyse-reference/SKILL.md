---
name: video-analyse-reference
description: Analyser une vidéo de référence avant une reconstruction ou une direction de montage, en mesurant les plans, trajectoires, typographies et écarts du rendu.
license: MIT
---

# Référence → règles observées → reconstruction

Lire [references/conditions.md](references/conditions.md). Utiliser la référence fournie ou accessible avec ses droits ; ne pas prétendre avoir examiné un film absent. Montrer les références effectivement utilisées si demandé.

## Mesurer
Sonder durée, résolution, fps, rotation, son et timecodes. Faire une planche d'ensemble, puis revenir aux frames natives des mouvements signature, transitions et ending. Une détection de coupes peut manquer un fondu ou compter une transition : compléter visuellement.

Pour chaque plan : bornes en frames, objet principal, position/échelle/rotation, masque, couche, entrée, pose, sortie, typo, couleur, son et émotion visée. Pour une trajectoire, relever départ, extrêmes, retournement et immobilité : deux poses ne définissent pas un mouvement. Éviter un drift permanent si la référence s'arrête.

Séparer preuve mesurée, estimation et inconnu. Un JSON analytique décrit ce que l'on voit ; ce n'est pas le code source original. Ne pas appeler cette lecture un entraînement du modèle.

## Appliquer
Distinguer l'observation du brief : un scénario rêve/frustration/déclic demandé par l'utilisateur peut être absent de la référence. Ne pas inventer une règle de cuts à 1 s pour un film de témoignages de plusieurs secondes. Une scène technologique peut accélérer, un geste émotionnel doit rester lisible.

Choisir une grammaire cohérente et l'outil qui peut la rendre : Remotion/DOM/SVG/3D, moteur de composition ou outil 3D seulement si utile et accessible. Les presets et les frameworks servent le brief ; ils ne remplacent pas la référence. Respecter les polices et droits, utiliser des équivalents autorisés lorsque nécessaire.

Tester un mouvement risqué sur un extrait avant le film entier. Animer par frame, appliquer une seule intention dominante par plan, borner amplitudes et temps de lecture. Comparer référence/candidat au même instant et avec le même cadrage, plus une lecture en mouvement. Corriger une différence démontrée à la fois, consigner avant/après et limite persistante.

Une vérification TypeScript, un package installé ou deux images 3D valides prouvent un parcours technique ; ne pas les présenter comme un benchmark artistique. Pour transposer un preset, lire le module remotion-transposer-presets s'il est installé ; ce module reste utilisable sans lui.

Référence publique de méthode étudiée : [film institutionnel Indiana University](https://brand.iu.edu/anthem-video.html). Aucun film, logo ou graphisme de cette institution n'est livré dans ce pack.
