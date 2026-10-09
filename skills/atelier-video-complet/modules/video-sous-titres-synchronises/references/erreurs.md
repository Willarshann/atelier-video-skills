# Registre des erreurs — synthèse anonymisée au 9 octobre 2026

64 incidents historiques reformulés et 12 acquis de la révision publicitaire. Les causes non démontrées restent incertaines ; valeurs et solutions locales ne doivent pas devenir des corrections universelles. Aucune vidéo, citation privée ou identité client n'est jointe.

| ID | Symptôme | Cause observée ou suspectée | Prévention/correction | Contrôle nécessaire |
|---|---|---|---|---|
| E01 | Images étrangères périodiques | Décodage multi-thread dans une chaîne vidstab | Tester mono-thread avant entrée sur les deux passes | Comparer source/corrigé à cadence native |
| E02 | Effet gelée | Compression inter-images traitée comme mouvement | Tester intermédiaire tout-intra et correction modérée | Voir lignes droites et séquence native |
| E03 | Instabilité restante | Lissage insuffisant ou ancien fichier mal traité | Repartir de la source, adapter lissage/zoom au plan | Mesurer résiduel et regarder avant/après |
| E04 | Petit panoramique tremblant | Tracker qui poursuit chaque mouvement | Cadre stable par segment, suivi amorti si nécessaire | Vérifier mouvement en continu |
| E05 | Stabilisation sans sortie longtemps | Lissage d'un fichier trop long | Ne traiter que les plages retenues | Suivre progression et durée de sortie |
| E06 | Déclaré stable à tort | Mouvement sujet confondu avec caméra | Mesurer le résiduel, comparer sources | Inspection et mesure indépendante |
| E07 | Visage tronqué | Position unique malgré déplacement | Cadrage par plan et par déplacement | Début/milieu/fin et poses extrêmes |
| E08 | Nom sur le front | Habillage placé sans tenir compte du visage | Zone libre, sous menton ou apparition décalée | Maquette sur image réelle |
| E09 | Premier/dernier mot coupé | Bornes sur timestamps ASR seuls | Silence/attaque mesurés et écoute locale | Réécouter ou retranscrire les bords |
| E10 | Voix faible coupée | Seuil relatif au bruit pris pour silence | Tester seuil absolu adapté, écouter la syllabe | Énergie et écoute avant/après |
| E11 | Fin de phrase précédente incluse | Débit continu sans pause nette | Tester le creux avec contexte puis borne fixe | Écouter entrée du fichier monté |
| E12 | Coupe trop brute | Dernière syllabe rognée, fondu trop court | Conserver la fin réelle et petit fondu adapté | Écoute sans musique |
| E13 | Décalage global voisin de 43 ms | Amorce AAC sur une ancienne chaîne | Mesurer le rendu avant toute correction | Décalage son/image sur cette chaîne |
| E14 | Lèvres et voix d'instants différents | Image et audio pris sur des plages distinctes | Même source et même temps pour le locuteur visible | Contrôle par segment |
| E15 | Deux musiques simultanées | Musique ajoutée plus musique du lieu | Décider quoi garder, ne pas empiler par défaut | Écoute des pistes et du mix |
| E16 | Voix peu nette | Bruit ou son caméra | Comparer traitement modéré et original | Écoute A/B, pas sonie seule |
| E17 | Saturation | Somme voix/SFX sans marge | Gains/marge/limiteur adaptés | Mesurer crêtes du fichier final |
| E18 | Reel mis en sourdine | Titre sous Content ID malgré téléchargement gratuit | Vérifier droits et badge sur une vraie page | Preuve de licence et règle du projet |
| E19 | Musique mal équilibrée | Gains au jugé sans écouter | Mesurer passages et écouter A/B | Voix compréhensible, musique utile |
| E20 | DTW demandé mais inactif | Option incompatible dans whisper.cpp | Inspecter options et journal, vérifier DTW actif | Ne pas déduire du seul flag demandé |
| E21 | ASR long fichier plante | GPU/Metal ou version affectée | Tester CPU ou fenêtres, lire logs | Sortie complète et journal sans erreur |
| E22 | Lexique recopié ou mots sautés | Prompt ASR trop suggestif | Transcription neutre, correction des noms avec preuves | Comparer au son réel |
| E23 | Boucles ou générique halluciné | Silence, musique ou passage difficile | Retranscrire localement avec contexte | Ne pas jeter le passage sans réécoute |
| E24 | Horaires ASR décalés | Minutage grossier | Alignement/ancres mesurées, ne pas couper dessus seul | Audio local et juge différent |
| E25 | Filtres FFmpeg absents | Binaire limité du moteur de rendu | Vérifier la build et les filtres disponibles | ffmpeg -version et -filters |
| E26 | Travail dit fini sans sortie | Processus mort avec la session | Vérifier existence, date et durée des sorties | État réel du processus et fichier |
| E27 | Fichiers d'une autre session commités | Dépôt partagé sans revue | Stage explicite de ses fichiers | Diff et statut avant commit |
| E28 | Plans/sous-titres glissent après coupe | Ancres attachées à l'ancienne timeline | Mapping source vers montage et empreinte | Invalider les dérivés modifiés |
| E29 | Faux glitch de stabilisation sur live | Doublons déjà présents dans le flux | Comparer source et rendu même plage | Attribuer correctement le défaut |
| E30 | Cadrage vide après changement caméra | Segment unique couvrant plusieurs plans/fondus | Détecter ou saisir les sous-plans | Plusieurs instants par plan et fondu |
| E31 | Outro trop basse/forte selon le film | Normalisation globale masque écarts internes | Mesurer corps et outro séparément | Sonie par plage, écoute de transition |
| E32 | Attente ne se termine pas | Recherche de processus trouve sa propre commande | Attendre une session/un journal/sortie unique | Pas de boucle pgrep sur son motif |
| E33 | Crash ou motif périodique vidstabtransform | Build/version affectée, cause exacte incertaine | Tester autre chaîne ou correction par trajectoire | Brut/corrigé/signe inverse, décodage |
| E34 | Effet voulu pris pour glitch | Flash/rewind/rampe non déclaré | Lier l'alerte au calendrier des effets | Exclure seulement les fenêtres prouvées |
| E35 | Nom faux publié | Nom deviné depuis audio | Référence écrite confirmée et source officielle utile | Nom dans la maquette ET le fichier final |
| E36 | Sensation de son coupé | Silence numérique entre mots d'une voix isolée | Ambiance autorisée ou mix moins sec si utile | Écoute et mesure des trous, pas règle musique forcée |
| E37 | Critique IA rate défaut ou en invente | Modèle/brief insuffisant | Contexte des choix, références écrites, vérification | Confirmer chaque alerte par preuve |
| E38 | Upload API refusé | Granularité ou limites de fichiers | Lire exigences actuelles du service | Contrôler HTTP, ne pas inventer un résultat |
| E39 | Applaudissements mal détectés | Niveau sonore seul ambigu | Analyse contextuelle et écoute/classification | Ne pas confondre clavier et foule |
| E40 | Sous-titre multilingue change le sens | Correction phonétique sans comprendre | Relire idée et contexte, faire confirmer le doute | Audio et humain compétent |
| E41 | Négation inversant le sens | Tournure orale transcrite sans contexte | Relecture du discours complet | Fidélité au propos, pas réécriture libre |
| E42 | Doute publié sans être levé | Doute resté dans les notes | Résoudre avant version finale validée | Liste des doutes ouverts avant livraison |
| E43 | Mots d'une ligne dans sa voisine | Plusieurs extraits disjoints dans une requête IA | Une requête par extrait si ambiguïté | Comparaison au son de la ligne |
| E44 | Langue ou mots inventés | Exemple suggestif dans la consigne | Contexte neutre, ne pas imposer le mot attendu | Réécoute et transcription alternative |
| E45 | Erreur Chrome de fermeture avec sortie 0 | Course à la fermeture du navigateur | Ni rerendu aveugle ni confiance au code seul | Durée/frames attendues et décodage intégral |
| E46 | Boucle traite zéro clip | Découpage de chaîne différent entre bash et zsh | Tableaux shell ou liste lue par le programme | Codes de chaque opération, pas message final |
| E47 | Texte supprimé remis au montage | Référence ASR incluant les parties coupées | Son/référence de chaque segment réel | Comparer à la liste des passages exclus |
| E48 | Bords faux en débit continu | Prorata de mots pris pour alignement | Audio local, attaque et repère confirmé | Écouter ±contexte autour de la coupe |
| E49 | Image parasite crée fausse coupe | Caméra étrangère 1–3 frames dans un live | Détecter/analyser puis réparation ciblée documentée | Voisines et source, conserver original/audio |
| E50 | Mauvaise personne chante en ouverture | Régie laisse une autre caméra pendant la voix hors champ | Choisir début visuellement cohérent | Voir qui parle au premier plan |
| E51 | Doublons/selfie et coupe interne | VFR et images dupliquées du fichier source | Tester suppression doublons et cadence régulière | Pas interpolation de mouvement aveugle sur visages |
| E52 | Karaoké dérive ou mots dans silences | Temps distribués aux lettres, juge identique | Texte/temps séparés, ancres, empreinte | Juge indépendant et écoute par morceaux |
| E53 | Clic quand musique remonte | Volume en marches d'une frame | Rampes de niveau adaptées | Distinguer clic du gain et attaque du morceau |
| E54 | Micro-coupures sans montage | Débruitage agressif sur réverbération | Comparer original/traité, mélange aligné si utile | Écoute A/B et absence de coupes vérifiée |
| E55 | Moteurs contredisent un mot | Accent et modèle qui corrige le sens à tort | Croiser original, reprises et termes confirmés | Humain tranche les doutes restants |
| E56 | Décompte de plateau dans le début | Première plage de voix prise pour phrase utile | Identifier vrai premier mot | Réécouter premières secondes exportées |
| E57 | ASR court plante sous charge | GPU saturé pendant rendu/traitements | Limiter concurrence, CPU si approprié | Logs et couverture complète |
| E58 | delayRender timeout sur gros rush | Accès loin dans source et traitements concurrents | Préparer plages locales, alléger charge, timeout justifié | Un rendu à la fois sur machine limitée |
| E59 | Polices réseau absentes | Coupure pendant chargement distant | Polices locales autorisées et attente avant mesure | Voir la police réellement rendue |
| E60 | Vieux rendu livré après échec | Code/log ignorés, ancien brut encore présent | Sorties versionnées uniques, vérifier fraîcheur | Pas finaliser si rendu échoue |
| E61 | Chœur effacé | Isolation voix traite le groupe comme bruit | Conserver original autorisé pour foule/chant | Comparer intelligibilité A/B |
| E62 | Bandeaux live restent en plein écran | Écran partagé non reconnu | Mesurer chaque case et recadrer son contenu | Planche par sous-plan, pas rapport vert seul |
| E63 | Vide sur fondu de caméra | Détecteur de cuts francs rate les fondus | Analyser évolution temporelle, bornes manuelles | Frames pendant transition et après |
| E64 | Parasite reste après réparation | Heuristique échoue près d'une coupe/geste | Inspecter voisins, correction ciblée si prouvée | Ne pas supprimer un vrai geste |
| N01 | Rush doublon sous deux noms | Même ID/source renommé | Comparer provenance/empreinte | Images et source réelle |
| N02 | Casting considéré local à tort | Apparence prise pour nationalité | Preuve de provenance ou illustration déclarée | Contrat de casting |
| N03 | Action illustre autre intention | Fermer laptop satisfait, sortir du sport | Voir geste complet et contexte | Début/milieu/fin |
| N04 | Mise en page modifiée malgré gel | Correction médias passée par composants | Baseline, données autorisées seules | Helper gel et diff des fichiers protégés |
| N05 | Titre hors cadre à l'entrée | Scale/espacement non bornés | Mesurer vraie police et amplitude maximale | Entrée/overshoot/pose |
| N06 | Filet touche sous-titre mais marges vertes | Audit de bornes sans chevauchement | Vérifier empilement visuel | Frame du texte le plus long |
| N07 | 9:16 réduit dans un cadre non souhaité | Adaptation littérale du master paysage | Demander/reprendre préférence plein écran | Revue à taille téléphone |
| N08 | Visage coupé par cover à 50 % | Centrage automatique horizontal | ObjectPosition propre au plan | Début/milieu/fin et déplacement |
| N09 | Faux partage du pack de presets | Export des composants malgré licence restrictive | Réalisation indépendante, lire chaque licence | Inventaire des fichiers livrés |
| N10 | XML valide mais import mauvais | Typo/masques/échelles non conservés entre moteurs | Comparer dans application cible réellement | Syntaxe seule ne prouve pas fidélité |
| N11 | JSON d'analyse présenté comme source exacte | Observation confondue avec récupération de code | Mesure/estimation/inconnu explicites | Comparaison aux frames |
| N12 | Emballage skills inutilisable | Références à chemins/dépôts privés | Ressources relatives et aides incluses | Installation en dossier vierge |

Chaque nouveau défaut : conserver symptôme/timecode, cause prouvée ou hypothèse, correction, comparaison avant/après et test de non-régression pertinent. Une alerte automatique ne certifie pas la cause ; les scripts inclus ne couvrent pas tout ce registre.
