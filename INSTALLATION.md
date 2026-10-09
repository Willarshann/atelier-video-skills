# Installer le pack

## Claude Code — installation locale
Prérequis de l'installateur : Node.js déjà disponible. Aucune installation de logiciel, aucune clé API et aucun paiement. Inspecter scripts/install-skills.mjs si besoin, puis depuis la copie du dépôt :

```sh
git clone https://github.com/Willarshann/atelier-video-skills.git
cd atelier-video-skills
node scripts/install-skills.mjs --target claude
```

L'installateur copie **atelier-video-complet** et toutes ses ressources dans ~/.claude/skills/. Si un contenu différent existe déjà, il s'arrête sans l'écraser. Il ne change pas CLAUDE.md ni les permissions. Pour choisir seulement les modules séparés : ajouter --modules. Pour Codex : --target codex. Pour un test ou dossier custom : --dir chemin. Sans Node, copier manuellement le dossier skills/atelier-video-complet entier.

Ouvrir une nouvelle session si le skill n'apparaît pas, puis demander **/atelier-video-complet** avec le brief. L'agent doit lire le SKILL.md et les références du module requis, pas seulement annoncer qu'il est installé. Emplacements vérifiés dans la [documentation Claude Code](https://code.claude.com/docs/en/skills).

## Claude dans le navigateur ou une app avec import de Skills
Télécharger **atelier-video-complet.zip** depuis la Release. Dans Claude : activer l'exécution de code si nécessaire, **Customize → Skills → + Create skill → Upload a skill**, importer ce ZIP et activer le skill. Les autorisations de l'organisation peuvent empêcher l'import ; demander à l'administrateur si l'option manque. [Instructions officielles](https://support.claude.com/en/articles/12512180-use-skills-in-claude).

Le ZIP contient exactement un dossier de skill à sa racine avec SKILL.md et ressources ; ne pas importer l'archive « Code → Download ZIP » comme skill. La [structure officielle](https://support.claude.com/en/articles/12512198-how-to-create-custom-skills) est contrôlée pendant le packaging.

Dans le navigateur, donner une URL à Claude ne lui permet pas nécessairement d'installer un skill dans les réglages ni d'accéder aux rushs sur le PC. L'import peut devoir être fait manuellement ; ensuite fournir les médias ou travailler dans Claude Code/local avec les outils nécessaires.

## Mise à jour
Télécharger la nouvelle Release ; comparer le contenu. Les copies déjà installées ne se mettent pas automatiquement à jour. Conserver vos modifications, puis remplacer seulement après votre décision. Les anciens réglages du projet ne sont jamais écrasés par le pack.

## Outils de production à vérifier selon le projet
Remotion/React et Node, FFmpeg/FFprobe avec les filtres nécessaires ; Whisper ou autre alignement et traitement audio seulement si utiles/autorisé. Sur Claude navigateur, la disponibilité d'un navigateur de rendu et des packages doit être vérifiée : ce skill n'en garantit pas la présence. Aucun script Python exécuté par l'installateur.
