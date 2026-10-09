---
name: video-sous-titres-synchronises
description: Créer ou corriger des sous-titres parlés, notamment français/créole, en séparant texte fidèle et temps mesurés, puis contrôler leur synchronisation après chaque coupe.
license: MIT
---

# Texte fidèle, temps mesurés

Lire [references/conditions.md](references/conditions.md) et [references/erreurs.md](references/erreurs.md), sections transcription et synchronisation.

## Ce qu'il ne faut pas confondre
Le texte peut venir d'une transcription relue, les temps d'un alignement ou d'ancres audio mesurées. Un moteur peut franciser du créole et conserver certains repères temporels utiles : ne pas rejeter les temps uniquement parce que le texte est faux. Inversement, un texte correct ne prouve pas ses horaires.

Ne jamais répartir les mots au nombre de lettres comme minutage final. Une image fixe montre un mot allumé, pas sa concordance avec la voix. Ne pas déclarer une phrase doublonnée si l'orateur la répète réellement.

## Chaîne
1. Conserver le son exact, les coupes et le texte de référence. Pour une parole multilingue, confirmer la langue ; ne pas traduire sous prétexte de transcrire. Relire le sens en contexte et lever les doutes avec une personne compétente dans la langue.
2. Transcrire par fenêtres adaptées aux pauses et à la difficulté ; exemples testés : 6–11 s. Le son original peut être plus fiable pour l'ASR qu'une isolation agressive. Ne pas envoyer plusieurs extraits disjoints avec une référence couvrant aussi les phrases supprimées : le moteur peut les réintroduire.
3. Dans une chaîne whisper.cpp qui utilise DTW, inspecter les options et le journal de la version installée. Sur la configuration historique, -nfa était nécessaire pour DTW et -ng évitait les pannes Metal. Ce sont des observations locales, pas une commande obligatoire sur toute machine.
4. Apparier les mots dans leur fenêtre et leur occurrence réelle. Mots courts, répétitions, litanies et silences demandent une vérification locale. Conserver des ancres manuelles seulement si elles ont été entendues/confirmées, pas parce qu'une heuristique les appelle « mesurées ».
5. Construire un mapping explicite temps source → temps montage. Conserver une empreinte du texte et des coupes ; tout recoupage ou correction invalide les sous-titres dépendants, les cartes-questions et les effets calés sur la parole.
6. Contrôler le son du fichier exporté avec un juge différent ou une écoute par morceaux. Un même ASR utilisé comme producteur et juge peut reproduire son erreur. Vérifier mots allumés sans voix, phrases manquantes/rajoutées et bords de fenêtres. Un détecteur d'absence de voix n'est pas fiable sur cris, chant ou foule sans vérification.

## Livraison
Sous-titres par groupes de sens, deux lignes de préférence, taille lisible sur téléphone. Pour le mot à mot, déclarer la qualité d'alignement réellement mesurée, pas celle supposée. Les essais visaient ~0,1 s et signalaient les écarts >0,3 s ; ajuster au fps, au support et au contexte. Ne pas exporter une ligne ambiguë comme certaine : faire confirmer ou livrer une version explicitement sans cette transcription incertaine si autorisée.

Les modèles de texte, d'alignement forcé ou de critique sont optionnels ; les vérifier avant installation, surtout droits commerciaux, disponibilité de langue et coût. Ne pas présenter un alignement forcé non testé comme une solution éprouvée.
