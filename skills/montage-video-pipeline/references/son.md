# Voix, musique, réactions et synchro

Choisir le traitement à l'écoute A/B, pas uniquement au LUFS. Une voix caméra propre peut être préférable à une isolation qui découpe les réverbérations. Chœur/foule/chant : l'original autorisé reste la référence ; conserver applaudissements utiles du son original lorsque l'isolation les efface.

Mesurer corps/outro séparément : une normalisation globale peut laisser 6 dB d'écart. Exemples historiques de master voix sociale : autour de -14 LUFS, crête avec marge vers -1 dB ; ce ne sont pas des cibles pour tout support. Sous parole, une musique environ 15–18 dB sous la voix était un point de départ, à écouter. Ducking ≠ niveau absolu : mesurer les passages et utiliser des rampes (exemple ~0,25 s), pas un saut de +10 dB en une frame.

Ne pas additionner un piano de salle et une autre musique sans choix. Une coupure voulue de musique reste possible ; sous voix isolée elle peut créer un trou numérique, à juger plutôt qu'appliquer « toujours musique dès la première seconde ». Un fond présent n'est pas une exigence pour un film volontairement silencieux.

Aligner avant de mélanger original et voix traitée. Vérifier la phase et les bords ; pour soustraire deux pistes, employer un vrai mapping L-R ou outil de différence, pas une commande de mix supposée faire une soustraction. Un test A/B sans différence audible ne justifie pas de complexifier la chaîne.

Ancien export AAC décalé ~42,7 ms : observation sur un pipeline, pas défaut garanti de Remotion. Mesurer PTS/alignement et lèvres/attaques avant un remux ; ne jamais appliquer cet offset sans preuve. Un gain React >1 n'est pas garanti par toutes les API audio ; préférer un fichier préparé si nécessaire et vérifier le résultat final.

Les scripts du pack contrôlent décodage/métadonnées et égalité PCM, pas la synchronisation des lèvres ni la qualité perceptive. Les outils de critique externes ne sont pas requis et nécessitent l'autorisation d'envoi, les droits et la capacité de lire la vidéo.
