# Killian Mesnage & la SMX 300 🏍️

Petit jeu mobile en HTML/CSS/JS pur (zéro dépendance externe). Killian enchaîne les
trajets à moto pour gagner de l'argent, doit réparer sa SMX 300 quand elle tombe en
panne, et subit régulièrement les remarques de sa copine Laura.

## Jouer en local

Ouvre simplement `index.html` dans un navigateur (idéalement en mode mobile /
responsive dans les outils dev). Aucune installation nécessaire.

## Déployer sur GitHub Pages

1. Crée un nouveau dépôt sur GitHub (ex : `killian-mesnage-game`).
2. Ajoute les 3 fichiers `index.html`, `style.css` et `game.js` à la racine du dépôt
   (via l'interface web "Add file → Upload files", ou en local) :
   ```bash
   git init
   git add index.html style.css game.js README.md
   git commit -m "Killian Mesnage & la SMX 300 - v1"
   git branch -M main
   git remote add origin https://github.com/<ton-user>/killian-mesnage-game.git
   git push -u origin main
   ```
3. Sur GitHub, va dans **Settings → Pages**.
4. Dans "Build and deployment", choisis **Source : Deploy from a branch**, puis
   **Branch : main** / dossier **`/ (root)`**, et clique sur **Save**.
5. Après une minute ou deux, l'URL du jeu apparaît en haut de la page Pages, du
   type : `https://<ton-user>.github.io/killian-mesnage-game/`.
6. Ouvre ce lien sur ton téléphone, ajoute-le à l'écran d'accueil pour un rendu
   quasi natif.

## Comment ça marche (v1)

- **Garage** : écran central, affiche l'argent, l'état de la moto et le numéro du
  trajet en cours. Bouton "Partir en trajet".
- **Panne** : chance de panne calculée selon l'état de la moto (plus elle est usée,
  plus le risque est élevé). Le joueur choisit de **payer** la réparation ou de
  **bricoler** (mini-jeu de réflexe : taper au bon moment sur une barre animée,
  gratuit mais risqué et de plus en plus dur si ça rate).
- **Trajet** : mini-jeu chronométré où il faut taper sur "ACCÉLÈRE !" pour remplir
  la barre de distance avant la fin du chrono. Réussite = argent + trajet suivant.
- **Laura** : des messages apparaissent aléatoirement (au garage, pendant les
  pannes, pendant les trajets, après une réparation payante) sous forme de bulle
  en haut de l'écran.
- **Fin de partie** : si la moto est à 0% et qu'il n'y a plus assez d'argent pour la
  moindre réparation, c'est game over. Le nombre de trajets réussis fait office de
  score, avec un record sauvegardé localement (`localStorage`).

## Pistes pour une v2

- Plus de types de trajets / décors qui défilent.
- Un vrai système de relation avec Laura (jauge d'humeur, choix de réponse).
- Boutique pour upgrader la moto (moins de pannes, réservoir plus gros...).
- Sons et vibrations mobiles.
