---
name: montage-video-pipeline
description: Monter des rushs, discours, événements ou Reels avec Remotion, en contrôlant récit, cadrage, voix, musique, stabilisation et rendu avant livraison.
license: MIT
---

# Rushs → montage livré et contrôlé

Lire [references/conditions.md](references/conditions.md), puis les sections utiles du [registre des erreurs](references/erreurs.md). Les valeurs historiques sont des points de départ, pas des normes ni des propriétés universelles d'un outil.

## Observer et préparer
Identifier l'objectif, le format, la durée, les paroles à garder, les noms confirmés, les droits, les livrables et les choix déjà validés. Poser les questions bloquantes ensemble, avancer sur les autres tâches. Inventorier les sources avec durée, fps/rotation, audio et licence ; voir début/milieu/fin et écouter. Chercher les réactions utiles sans les déduire du seul volume sonore.

Construire un récit à partir de faits réellement filmés : situation → enjeu → action → résultat → conclusion. Une carte narrative est un repère, pas une obligation de douze scènes ni une permission d'inventer une transformation. Pour un spot : varier les plans, tenir les gestes émotionnels et réserver les cuts rapides aux phases qui le demandent. Un bookend volontaire peut être pertinent ; un doublon involontaire ne l'est pas.

## Produire
1. Définir storyboard et plages source avant l'habillage. Garder les originaux, versions et un journal des décisions. Un nom de personne vient d'une référence écrite confirmée ; pour une personnalité publique, vérifier sur une source officielle accessible, jamais deviner depuis l'audio.
2. Comparer voix d'origine et traitement. Isoler une voix seulement si cela améliore le résultat ; chœur, foule et chant de groupe peuvent être détruits par le débruitage. Garder leurs sons d'origine autorisés. Voir [references/son.md](references/son.md).
3. Couper sur les silences/attaques réellement vérifiés, pas sur un horodatage ASR seul. Débit continu : écouter le bord, préserver la syllabe et un fondu utile. Retirer un décompte de tournage seulement après l'avoir identifié. Retranscrire ou réécouter début et fin du montage.
4. Stabiliser seulement les plages retenues quand nécessaire. Sur une chaîne vidstab affectée par des glitchs, tester intermédiaire tout-intra et décodage mono-thread sur les deux passes ; ne pas reprendre aveuglément un lissage/zoom historique. Comparer brut/corrigé sur mouvements et lignes droites. Une réparation d'image parasite doit rester localisée, documentée, sans modifier le son.
5. Cadrer après stabilisation, par changement de plan y compris les fondus et écrans partagés. Ne pas suivre en permanence un visage avec un tracker qui tremble. Si le format est plein écran, vérifier que le bon sujet et le geste restent visibles.
6. Habillage léger : une information principale, noms 2–3 s au premier passage sauf brief contraire, sous-titres lisibles et fidèles, pas de texte sur un visage. Éviter de répéter titre, fonction et sous-titre dans la même zone. Pour un spot avec textes validés, respecter ce contrat plutôt que refaire le design.
7. Choisir une musique réellement autorisée pour l'usage prévu ; conserver la preuve de licence. Pour un livrable exigeant l'absence de Content ID, exclure les titres signalés. Une page anti-robot sans badge n'est pas une preuve. Ne pas ajouter un second morceau par-dessus un chant ou un clavier en direct sans décision de mixage.
8. Animation déterministe par frames ; charger les polices locales avant mesure, borner amplitude et largeur. Pour GSAP, rendre son état depuis la clock Remotion ; pour Three.js, utiliser le frame courant. L'existence d'un rendu technique 3D ne prouve ni la fidélité ni la qualité artistique.

## Contrôler puis livrer
Vérifier texte/noms/sous-titres, visages, gestes, coupures de mots, mix et transitions. Corriger un défaut constaté ; ne pas transformer un choix créatif en alerte automatique. Un rapport vert ou une critique IA n'est pas une écoute humaine. Si un contrôle n'est pas possible, déclarer cette limite sans dire qu'il a été fait.

Inspecter des frames natives autour des coupes, le dernier frame et le MP4 final. Utiliser [scripts/audit-video.mjs](scripts/audit-video.mjs) pour métadonnées, décodage et option de comparaison audio ; cet outil ne mesure pas lèvres/voix, stabilisation ni sens des sous-titres. La recette complète est dans [references/commandes.md](references/commandes.md).

Copier le MP4 et vérifier l'empreinte, livrer projet/médias autorisés ou instructions pour les récupérer. Un symlink local n'est pas une sauvegarde portable. Conserver les versions antérieures. Ne pas annoncer une finalisation après un rendu échoué, ni réutiliser silencieusement un vieux brut. Sauvegarder ses propres modifications sans secrets ; aucune publication sociale sans autorisation distincte.
