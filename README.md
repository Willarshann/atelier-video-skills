# Atelier vidéo — Skills pour Claude et Codex

Méthodes de montage testées et erreurs capitalisées jusqu'au **9 octobre 2026**, anonymisées et portables. **Un vrai SKILL.md à installer**, six modules avec leurs références, deux helpers Node et un registre de **76 cas**. Ce pack transmet le savoir-faire ; il ne fournit pas les logiciels de montage ni des médias sous licence.

## Télécharger
- [Skill complet prêt à importer dans Claude](https://github.com/Willarshann/atelier-video-skills/releases/latest/download/atelier-video-complet.zip)
- [Pack de dossiers pour Claude Code/Codex](https://github.com/Willarshann/atelier-video-skills/releases/latest/download/atelier-video-skills-pack.zip)
- [Tous les téléchargements et empreintes](https://github.com/Willarshann/atelier-video-skills/releases/latest)

**Claude dans le navigateur** : importer le premier ZIP dans **Customize → Skills**, l'activer. Il contient un dossier atelier-video-complet avec SKILL.md et toutes les ressources ; le ZIP des sources du dépôt n'est pas un ZIP d'import de skill. [Guide officiel](https://support.claude.com/en/articles/12512180-use-skills-in-claude).

**Claude Code** : lire [INSTALLATION.md](INSTALLATION.md), puis copier le dossier complet dans ~/.claude/skills/ ou utiliser l'installateur local inspectable. Invocation : /atelier-video-complet. [Documentation officielle](https://code.claude.com/docs/en/skills).

## À l'intérieur
| Module | Résultat |
|---|---|
| montage-video-pipeline | Rushs → récit → voix/musique → coupes → stabilisation → MP4 contrôlé. |
| video-sous-titres-synchronises | Texte fidèle, temps mesurés, français/créole, contrôle après recoupage. |
| video-analyse-reference | Mesures aux frames, mouvements continus, comparaison sans inventer le code original. |
| remotion-revision-medias | Rushs uniques, gestes/casting cohérents, graphismes validés figés. |
| remotion-vertical-plein | 9:16 plein écran, cadrages par plan, marges et visages, deux livrables séparés. |
| remotion-transposer-presets | Procédés typographiques reconstruits indépendamment, licences et largeur maîtrisées. |

[Message prêt à donner à Claude](MESSAGE-POUR-CLAUDE.md) · [Ce qui est inclus et vérifié](VALIDATION.md) · [Conditions](skills/atelier-video-complet/references/conditions.md) · [Registre des erreurs](skills/atelier-video-complet/references/erreurs.md).

Ne pas publier le film ni envoyer des rushs à un service tiers sans accord. Aucun fichier client, nom privé, secret, preset tiers ou police commerciale dans ce dépôt. Les réglages locaux ne sont pas des normes universelles ; les outils de contrôle ne remplacent pas l'œil et l'oreille.

## Contribuer
Décrire symptôme/timecode, cause démontrée ou hypothèse, correctif et contrôle avant/après ; ajouter un cas utile. Modifier sur une branche, scanner les secrets et ouvrir une PR. Ne pas déposer un rush client pour illustrer une erreur : utiliser un exemple synthétique ou autorisé. Licence MIT pour le contenu original de ce pack, sans droits transférés sur les médias d'un projet.
