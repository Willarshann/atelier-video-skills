# Validation de la version 1.0.0

Snapshot des acquis : **9 octobre 2026**. Méthodes issues de productions réelles ; publication anonymisée et indépendante des médias/dépôts privés.

| Élément | Contrôle de publication |
|---|---|
| Dossiers de skills | Nom = dossier, frontmatter name/description, références relatives existantes, six modules dans le skill complet. |
| Installation Node | Test dans un répertoire temporaire vierge ; second passage identique ; modification personnelle refusée sans écrasement ; six modules installables séparément. |
| Gel du storyboard | Six changements médias réels acceptés ; trois changements de positions rejetés quand gelés, acceptés explicitement quand autorisés. |
| Audit vidéo | Film synthétique 1 s / 24 frames décodé ; dimensions/fps/frames corrects et audio identique acceptés ; mauvaise largeur et audio différent détectés. |
| Exemple FrameText.tsx | Compilation TypeScript avec React/Remotion ; aucune fidélité artistique à un preset propriétaire revendiquée. |
| Archives | Racine du ZIP complet = atelier-video-complet/SKILL.md ; ressources et scripts inclus ; ZIP sources séparé ; empreintes SHA-256. |
| Confidentialité | Publication sans chemins personnels, secrets, fichiers clients ou composants de presets/polices tiers. |

Ces contrôles de structure et tests locaux ne sont pas une session de montage exécutée chez chaque destinataire. L'import dans son compte Claude dépend de ses capacités et autorisations. Les outils externes de montage restent à vérifier sur sa machine.

## Limites du helper audit-video.mjs
Il vérifie les métadonnées, le nombre de frames demandé, le décodage complet et optionnellement l'égalité d'une piste audio décodée en PCM 48 kHz stéréo. Il ne mesure pas les lèvres, le karaoké, les mots coupés, les images noires/figées, les glitchs, le tremblement, la licence, les noms, le contraste ni le sens. Ne pas présenter son succès comme un contrôle global du film.

## Conditions de test des méthodes historiques
Les comportements d'AAC, GPU/Whisper, vidstab, concurrence et polices viennent de versions et machines spécifiques. Les seuils historiques ne sont pas des garanties universelles ; vérifier l'environnement courant. Les comparaisons d'images et d'audio strictement identiques s'appliquent à une chaîne déterministe, pas à des exports provenant de moteurs différents.
