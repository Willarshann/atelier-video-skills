# Recettes portables et limites

Utiliser les binaires disponibles dans l'environnement ; contrôler leurs versions et filtres, pas un chemin du Mac de l'auteur. Le pack ne les installe pas.

```sh
ffmpeg -version
ffmpeg -filters
ffprobe -v error -show_streams -show_format -of json film.mp4
ffmpeg -v error -i film.mp4 -f null -
ffmpeg -i film.mp4 -vf "fps=1/3,scale=320:-1,tile=6x6" -frames:v 1 planche.jpg
```

Ce dernier exemple produit une seule planche limitée à 36 images ; pour un film long, produire plusieurs planches. La planche ne remplace pas l'examen aux frames autour des coupes. Respecter les fichiers existants, choisir de nouveaux noms plutôt qu'ajouter un écrasement automatique.

Remotion : packages à versions cohérentes ; créer/utiliser un projet selon le brief et les dépendances déjà autorisées. Charger les médias/polices localement lorsque leurs droits le permettent, attendre les fonts avant mesure. Conserver fps attendu ; passer de ~30 i/s à 50 i/s sans raison peut créer des duplications. Une rotation manquante dans les métadonnées exige une inspection de l'image, pas une confiance au tag seul.

```sh
node scripts/audit-video.mjs film.mp4 --width 720 --height 1280 --fps 30 --frames 2193 --rapport rapport.json
node scripts/audit-video.mjs film.mp4 --audio-reference version-precedente.mp4
```

Le script est relatif au dossier de ce skill. FFMPEG et FFPROBE peuvent désigner des exécutables déjà installés. Il vérifie ce qu'il annonce, pas les contrôles artistiques ni toutes les erreurs. La comparaison audio est utile pour une adaptation visuelle qui doit conserver le mix.

Stabilisation : préparer une plage avec marge, tester tout-intra si nécessaire, examiner la qualité et les coûts. Une build vidstab qui segfault ou introduit un motif reste à remplacer/contourner après preuve ; des translations Remotion à partir d'une trajectoire mesurée sont une option, pas un script privé supposé disponible. Zoom « 8 % » et smoothing « 100 frames » ne sont pas interchangeables avec un curseur d'un autre logiciel.

Export vers DaVinci/CapCut : générer XML/FCPXML correct ne garantit ni import, ni typo, ni masks. Vérifier dans l'app cible avec un parcours accessible. Métadonnées de timecode, rotation, visibilité des dossiers sandbox et chemins peuvent empêcher la reliaison. Si aucun import fidèle n'est démontré, fournir le MP4 Remotion et déclarer la limite au lieu d'empiler des XML non validés.
