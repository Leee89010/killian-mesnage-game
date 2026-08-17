# Killian Mesnage & la SMX 300 — v2 🏍️

Petit jeu mobile en HTML/CSS/JS pur (zéro dépendance externe).  
Killian enchaîne les trajets à moto pour gagner de l'argent, upgrade sa SMX 300, doit la réparer quand elle tombe en panne, et gère l'humeur de sa copine Laura.

## Nouveautés v2

- **Jauge d'humeur de Laura** : ses répliques changent selon son humeur. Certaines actions (réparations chères, échecs) la font baisser.
- **Cajoler Laura** : dépense 12€ pour remonter son humeur.
- **Boutique d'upgrades** :
  - Kit chaîne renforcée → -25 % d'usure
  - Batterie + démarreur pro → beaucoup moins de pannes électriques
  - Réservoir agrandi → beaucoup moins de pannes d'essence
  - Casque aéré + gants → +20 % d'argent par trajet réussi
- **3 types de trajets** : Ville / Campagne / Autoroute (nuit) avec usure, durée et gains différents.
- **Vibrations** sur mobile (panne, réussite, échec, achat…).
- Équilibrage un peu plus généreux au départ (35€ de départ).

## Jouer en local

Ouvre simplement `index.html` dans un navigateur (idéalement en mode mobile / responsive).

## Déployer sur GitHub Pages

Même procédure que la v1 : mets les 3 fichiers + ce README à la racine d'un dépôt, active Pages sur la branche `main`.

## Comment ça marche

- **Garage** : hub principal. Argent, état moto, humeur Laura, boutons Trajet / Boutique / Cajoler.
- **Panne** : chance calculée selon l'état de la moto + upgrades. Payer ou bricoler (mini-jeu de timing de plus en plus dur).
- **Trajet** : tape sur ACCÉLÈRE pour remplir la barre avant la fin du chrono. Le type de trajet influence usure et gains.
- **Laura** : messages contextuels et influencés par son humeur.
- **Game Over** : moto à 0 % et plus assez d'argent pour la moindre réparation. Score = nombre de trajets réussis (record en localStorage).

Amuse-toi bien, et n'oublie pas Laura.
