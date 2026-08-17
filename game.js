/* ===========================================================
   Killian Mesnage & la SMX 300 — logique de jeu
   =========================================================== */

/* -----------------------------------------------------------
   1. Le SVG de la moto (injecté partout où on a .bike-showcase)
   ----------------------------------------------------------- */
const BIKE_SVG = `
<svg viewBox="0 0 300 170" xmlns="http://www.w3.org/2000/svg">
  <!-- ombre -->
  <ellipse cx="150" cy="152" rx="120" ry="10" fill="rgba(0,0,0,0.4)"/>

  <!-- échappement chromé -->
  <path d="M118 108 C 100 112, 92 118, 88 130 L 88 138 C 88 142 92 145 98 145 L 116 145 C 120 145 122 142 122 138 L 122 122 L 150 100 L 140 96 Z"
        fill="#c7cad1" stroke="#8a8f98" stroke-width="1.5"/>
  <rect x="86" y="126" width="8" height="20" rx="3" fill="#3a3a3a"/>

  <!-- bras oscillant / cadre arrière -->
  <path d="M62 122 L 118 108 L 150 96" stroke="#161616" stroke-width="7" fill="none" stroke-linecap="round"/>

  <!-- moteur -->
  <rect x="118" y="98" width="34" height="30" rx="4" fill="#2c2c30" stroke="#161616" stroke-width="2"/>
  <circle cx="135" cy="113" r="7" fill="#161616"/>

  <!-- fourche avant -->
  <path d="M228 96 L 205 60" stroke="#c7cad1" stroke-width="9" stroke-linecap="round"/>
  <path d="M228 96 L 205 60" stroke="#8a8f98" stroke-width="3" stroke-linecap="round"/>

  <!-- garde-boue avant -->
  <path d="M206 92 Q 228 78 250 96" fill="none" stroke="#e2321e" stroke-width="7" stroke-linecap="round"/>

  <!-- guidon -->
  <path d="M205 60 L 188 52 M205 60 L 214 46" stroke="#161616" stroke-width="5" stroke-linecap="round"/>

  <!-- carénage / réservoir (rouge) -->
  <path d="M118 98 C 118 78, 130 56, 158 52 C 182 49, 200 58, 205 68 L 196 84 C 182 78, 150 78, 138 92 Z"
        fill="#e2321e" stroke="#161616" stroke-width="2"/>
  <!-- bande turquoise -->
  <path d="M126 90 C 148 78, 176 72, 196 78" fill="none" stroke="#2ad6d1" stroke-width="5" stroke-linecap="round"/>
  <!-- plaque numéro -->
  <rect x="150" y="66" width="30" height="20" rx="3" fill="#f4efe2" stroke="#161616" stroke-width="2"/>
  <text x="165" y="81" font-size="15" font-weight="900" text-anchor="middle" fill="#161616" font-family="Arial, sans-serif">1</text>

  <!-- selle -->
  <path d="M118 98 C 108 92, 92 90, 78 96 L 78 104 C 92 100, 108 100, 118 106 Z" fill="#161616"/>

  <!-- garde-boue arrière -->
  <path d="M40 108 Q 62 90 90 100" fill="none" stroke="#e2321e" stroke-width="7" stroke-linecap="round"/>

  <!-- roue arrière (translation isolée dans un groupe parent pour ne pas
       entrer en conflit avec l'animation CSS de rotation appliquée à l'enfant) -->
  <g transform="translate(62,124)">
    <g id="wheel-rear">
      <circle r="30" fill="#141414"/>
      <circle r="30" fill="none" stroke="#3a3a3a" stroke-width="4"/>
      <circle r="19" fill="none" stroke="#8a8f98" stroke-width="2"/>
      <circle r="5" fill="#c7cad1"/>
      <line x1="0" y1="0" x2="0" y2="-19" stroke="#8a8f98" stroke-width="1.4" transform="rotate(0)"/>
      <line x1="0" y1="0" x2="0" y2="-19" stroke="#8a8f98" stroke-width="1.4" transform="rotate(45)"/>
      <line x1="0" y1="0" x2="0" y2="-19" stroke="#8a8f98" stroke-width="1.4" transform="rotate(90)"/>
      <line x1="0" y1="0" x2="0" y2="-19" stroke="#8a8f98" stroke-width="1.4" transform="rotate(135)"/>
      <line x1="0" y1="0" x2="0" y2="-19" stroke="#8a8f98" stroke-width="1.4" transform="rotate(180)"/>
      <line x1="0" y1="0" x2="0" y2="-19" stroke="#8a8f98" stroke-width="1.4" transform="rotate(225)"/>
      <line x1="0" y1="0" x2="0" y2="-19" stroke="#8a8f98" stroke-width="1.4" transform="rotate(270)"/>
      <line x1="0" y1="0" x2="0" y2="-19" stroke="#8a8f98" stroke-width="1.4" transform="rotate(315)"/>
    </g>
  </g>

  <!-- roue avant + disque de frein (même principe) -->
  <g transform="translate(228,124)">
    <g id="wheel-front">
      <circle r="30" fill="#141414"/>
      <circle r="30" fill="none" stroke="#3a3a3a" stroke-width="4"/>
      <circle r="19" fill="none" stroke="#8a8f98" stroke-width="2"/>
      <circle r="21" fill="none" stroke="#c7cad1" stroke-width="1.5" stroke-dasharray="2 4"/>
      <circle r="5" fill="#c7cad1"/>
      <line x1="0" y1="0" x2="0" y2="-19" stroke="#8a8f98" stroke-width="1.4" transform="rotate(0)"/>
      <line x1="0" y1="0" x2="0" y2="-19" stroke="#8a8f98" stroke-width="1.4" transform="rotate(45)"/>
      <line x1="0" y1="0" x2="0" y2="-19" stroke="#8a8f98" stroke-width="1.4" transform="rotate(90)"/>
      <line x1="0" y1="0" x2="0" y2="-19" stroke="#8a8f98" stroke-width="1.4" transform="rotate(135)"/>
      <line x1="0" y1="0" x2="0" y2="-19" stroke="#8a8f98" stroke-width="1.4" transform="rotate(180)"/>
      <line x1="0" y1="0" x2="0" y2="-19" stroke="#8a8f98" stroke-width="1.4" transform="rotate(225)"/>
      <line x1="0" y1="0" x2="0" y2="-19" stroke="#8a8f98" stroke-width="1.4" transform="rotate(270)"/>
      <line x1="0" y1="0" x2="0" y2="-19" stroke="#8a8f98" stroke-width="1.4" transform="rotate(315)"/>
    </g>
  </g>

  <!-- Killian (silhouette) -->
  <g>
    <!-- jambe -->
    <path d="M100 106 L 118 128 L 108 138" stroke="#161616" stroke-width="7" fill="none" stroke-linecap="round"/>
    <!-- torse -->
    <path d="M95 100 C 88 84, 92 66, 108 54" stroke="#232326" stroke-width="13" fill="none" stroke-linecap="round"/>
    <!-- bras -->
    <path d="M100 68 L 180 56" stroke="#232326" stroke-width="8" fill="none" stroke-linecap="round"/>
    <!-- casque -->
    <circle cx="112" cy="46" r="15" fill="#e2321e" stroke="#161616" stroke-width="2"/>
    <path d="M100 46 a 12 12 0 0 1 24 0" fill="none" stroke="#2ad6d1" stroke-width="3"/>
    <path d="M98 50 L 116 50 L 112 58 Z" fill="#161616"/>
  </g>
</svg>`;

function injectBikes() {
  document.querySelectorAll('.bike-showcase').forEach(el => {
    el.innerHTML = BIKE_SVG;
  });
}

/* -----------------------------------------------------------
   2. Données : pannes & répliques de Laura
   ----------------------------------------------------------- */
const PANNES = [
  { nom: "Panne d'essence", desc: "Le réservoir est à sec, encore.", cout: 15 },
  { nom: "Bougie cramée", desc: "Le moteur tousse et refuse de partir.", cout: 25 },
  { nom: "Batterie à plat", desc: "Pas un bruit quand Killian tourne la clé.", cout: 30 },
  { nom: "Carburateur encrassé", desc: "Ça crachote, ça hoquette, ça n'avance pas.", cout: 35 },
  { nom: "Démarreur grillé", desc: "Le démarreur fume presque. Grave.", cout: 60 },
  { nom: "Chaîne déraillée", desc: "La chaîne pend lamentablement sur le côté.", cout: 12 },
];

const LAURA = {
  garage: [
    "Encore en train de bichonner ce tas de boulons ?",
    "Tu sais qu'on a un loyer à payer, hein ?",
    "Je te préviens, si tu es en retard À CAUSE de la moto...",
    "T'as vu l'heure ? Non, bien sûr, t'as les yeux sur ta moto.",
    "Un jour tu l'aimeras plus que moi, cette bécane.",
    "Franchement elle est belle... mais je le dirai qu'une fois.",
  ],
  argent: [
    "Encore de l'argent dans cette bécane ?! Sérieux Killian ?",
    "On devait pas plutôt économiser pour les vacances ?",
    "À ce rythme la SMX vivra mieux que nous deux.",
    "Je vais finir par la détester, cette moto, tu le sais ?",
    "Tu comptes la réparer avec quoi, ton charme ?",
  ],
  panne: [
    "Ha ! Encore en panne ! Je le SAVAIS.",
    "Bon, elle refait sa crise. Comme d'habitude.",
    "Tu devrais lui parler plus gentiment, peut-être qu'elle démarrerait.",
    "Je te l'avais dit de la faire réviser !",
    "C'est pas une moto, c'est un drame ambulant.",
  ],
  random: [
    "Killian ! T'as pensé à sortir la poubelle ?",
    "Ta mère a appelé. Encore.",
    "N'oublie pas, ce soir c'est repas chez mes parents !",
    "Tu m'écoutes ou tu regardes encore ton compteur ?",
    "Je t'ai pris un café. Il est froid maintenant, tant pis.",
    "Rappelle-moi pourquoi je sors avec un mécano du dimanche ?",
  ],
};

function pick(arr) { return arr[Math.floor(Math.random() * arr.length)]; }

let lauraTimeout = null;
function showLaura(category) {
  const toast = document.getElementById('laura-toast');
  const text = document.getElementById('laura-text');
  text.textContent = pick(LAURA[category]);
  toast.classList.remove('hidden');
  clearTimeout(lauraTimeout);
  lauraTimeout = setTimeout(() => toast.classList.add('hidden'), 2600);
}

/* -----------------------------------------------------------
   3. État du jeu
   ----------------------------------------------------------- */
const HIGH_SCORE_KEY = 'killian_smx_highscore';

const state = {
  cash: 20,
  condition: 100,
  day: 1,
  diyAttempts: 0,
  currentPanne: null,
};

function getHighScore() {
  return parseInt(localStorage.getItem(HIGH_SCORE_KEY) || '0', 10);
}
function saveHighScoreIfBetter(score) {
  const hs = getHighScore();
  if (score > hs) {
    localStorage.setItem(HIGH_SCORE_KEY, String(score));
    return true;
  }
  return false;
}

/* -----------------------------------------------------------
   4. Navigation entre écrans
   ----------------------------------------------------------- */
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.add('hidden'));
  document.getElementById(id).classList.remove('hidden');
}

/* -----------------------------------------------------------
   5. Écran titre
   ----------------------------------------------------------- */
function initTitleScreen() {
  const hs = getHighScore();
  document.getElementById('title-highscore').textContent =
    hs > 0 ? `🏆 Record : ${hs} trajets` : '';
}

/* -----------------------------------------------------------
   6. Garage (hub)
   ----------------------------------------------------------- */
function updateGarageUI() {
  document.getElementById('stat-cash').textContent = state.cash + '€';
  document.getElementById('ride-cash').textContent = state.cash + '€';
  document.getElementById('stat-day').textContent = state.day;

  const pct = Math.max(0, Math.round(state.condition));
  document.getElementById('condition-percent').textContent = pct + '%';
  const fill = document.getElementById('condition-fill');
  fill.style.width = pct + '%';
  fill.style.background =
    pct > 60 ? 'var(--green)' : pct > 30 ? 'var(--amber)' : 'var(--red)';

  const showcase = document.getElementById('bike-showcase-garage');
  showcase.classList.toggle('worn', pct <= 60 && pct > 25);
  showcase.classList.toggle('broken', pct <= 25);
}

function enterGarage(message) {
  updateGarageUI();
  document.getElementById('garage-msg').textContent =
    message || pick([
      "Killian tapote le réservoir avec espoir.",
      "La SMX 300 attend sagement dans le garage.",
      "Une petite révision et elle repartira comme neuve... ou pas.",
      "Killian enfile son casque, prêt à repartir.",
    ]);
  showScreen('screen-garage');

  if (Math.random() < 0.3) {
    setTimeout(() => showLaura('garage'), 500);
  }
}

/* -----------------------------------------------------------
   7. Déclenchement de trajet : chance de panne
   ----------------------------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
  injectBikes();
  initTitleScreen();

  document.getElementById('btn-start').addEventListener('click', startGame);
  document.getElementById('btn-restart').addEventListener('click', startGame);
  document.getElementById('btn-ride').addEventListener('click', attemptDeparture);
  document.getElementById('btn-accelerate').addEventListener('click', onAccelerate);
  document.getElementById('btn-pay').addEventListener('click', payRepair);
  document.getElementById('btn-diy').addEventListener('click', startDiy);
  document.getElementById('btn-cancel-ride').addEventListener('click', () => {
    closeModal('modal-panne');
    enterGarage("Killian remet la moto sous la bâche pour l'instant.");
  });
  document.getElementById('btn-diy-tap').addEventListener('click', onDiyTap);
});

function startGame() {
  state.cash = 20;
  state.condition = 100;
  state.day = 1;
  state.diyAttempts = 0;
  state.currentPanne = null;
  enterGarage("Journée fraîche. La SMX 300 brille au garage.");
}

function panneChance() {
  // Plus la moto est amochée, plus la panne est probable.
  const base = 0.08;
  const wearFactor = (100 - state.condition) / 100 * 0.65;
  return Math.min(0.9, base + wearFactor);
}

function attemptDeparture() {
  state.diyAttempts = 0;
  const forced = state.condition <= 15;
  if (forced || Math.random() < panneChance()) {
    triggerPanne();
  } else {
    startRide();
  }
}

/* -----------------------------------------------------------
   8. Panne + modale
   ----------------------------------------------------------- */
function triggerPanne() {
  const panne = pick(PANNES);
  state.currentPanne = { ...panne, cout: Math.round(panne.cout * (1 + state.diyAttempts * 0.2)) };
  document.getElementById('panne-title').textContent = state.currentPanne.nom;
  document.getElementById('panne-desc').textContent = state.currentPanne.desc;
  document.getElementById('panne-cost').textContent = state.currentPanne.cout + '€';
  document.getElementById('panne-warning').textContent = '';

  const canPay = state.cash >= state.currentPanne.cout;
  document.getElementById('btn-pay').disabled = !canPay;
  document.getElementById('btn-pay').style.opacity = canPay ? '1' : '0.5';
  document.getElementById('btn-diy').classList.remove('hidden');

  openModal('modal-panne');

  if (Math.random() < 0.6) setTimeout(() => showLaura('panne'), 400);
}

function openModal(id) { document.getElementById(id).classList.remove('hidden'); }
function closeModal(id) { document.getElementById(id).classList.add('hidden'); }

function payRepair() {
  const cost = state.currentPanne.cout;
  if (state.cash < cost) return;
  state.cash -= cost;
  state.condition = Math.min(100, state.condition + 20);
  state.currentPanne = null;
  closeModal('modal-panne');
  updateGarageUI();
  if (Math.random() < 0.7) showLaura('argent');
  setTimeout(startRide, 600);
}

/* -----------------------------------------------------------
   9. Mini-jeu bricolage (réflexe)
   ----------------------------------------------------------- */
let diyRAF = null;
let diyStartTime = null;
let diyZoneStart = 0;
let diyZoneWidth = 0;

function startDiy() {
  closeModal('modal-panne');
  state.diyAttempts++;

  diyZoneWidth = Math.max(10, 22 - state.diyAttempts * 4); // plus dur à chaque essai
  diyZoneStart = 20 + Math.random() * (80 - diyZoneWidth - 20);
  document.getElementById('diy-zone').style.left = diyZoneStart + '%';
  document.getElementById('diy-zone').style.width = diyZoneWidth + '%';

  openModal('modal-bricolage');
  diyStartTime = performance.now();
  cancelAnimationFrame(diyRAF);
  diyRAF = requestAnimationFrame(animateDiy);
}

function animateDiy(t) {
  const elapsed = (t - diyStartTime) / 1000;
  const period = 1.4; // secondes pour un aller-retour complet
  const phase = (elapsed % period) / period;
  // triangle wave 0 -> 100 -> 0
  const pos = phase < 0.5 ? phase * 2 * 100 : (1 - phase) * 2 * 100;
  document.getElementById('diy-cursor').style.left = pos + '%';
  diyRAF = requestAnimationFrame(animateDiy);
}

function onDiyTap() {
  const cursor = document.getElementById('diy-cursor');
  const cursorPos = parseFloat(cursor.style.left) || 0;
  const inZone = cursorPos >= diyZoneStart && cursorPos <= diyZoneStart + diyZoneWidth;

  cancelAnimationFrame(diyRAF);
  closeModal('modal-bricolage');

  if (inZone) {
    state.condition = Math.min(100, state.condition + 8);
    state.currentPanne = null;
    updateGarageUI();
    document.getElementById('garage-msg').textContent = "Killian s'essuie les mains, fier de lui.";
    setTimeout(startRide, 500);
  } else {
    state.condition = Math.max(0, state.condition - 10);
    updateGarageUI();
    if (state.condition <= 0 && state.cash < cheapestRepairCost()) {
      setTimeout(() => gameOver(), 300);
      return;
    }
    triggerPanne();
    document.getElementById('panne-warning').textContent = "Raté ! Le bricolage sera plus dur (et plus cher) la prochaine fois.";
  }
}

/* -----------------------------------------------------------
   10. Mini-jeu trajet (accélération chronométrée)
   ----------------------------------------------------------- */
let rideTimer = null;
let rideTimeLeft = 0;
let rideProgress = 0;
const RIDE_DURATION = 6; // secondes
const RIDE_TICK = 100; // ms

function startRide() {
  rideProgress = 0;
  rideTimeLeft = RIDE_DURATION;
  document.getElementById('progress-fill').style.width = '0%';
  document.getElementById('timer-fill').style.width = '100%';
  document.getElementById('ride-cash').textContent = state.cash + '€';
  showScreen('screen-ride');
  document.getElementById('bike-showcase-ride').classList.add('riding');

  clearInterval(rideTimer);
  rideTimer = setInterval(() => {
    rideTimeLeft -= RIDE_TICK / 1000;
    const pct = Math.max(0, (rideTimeLeft / RIDE_DURATION) * 100);
    document.getElementById('timer-fill').style.width = pct + '%';
    if (rideTimeLeft <= 0) {
      clearInterval(rideTimer);
      endRide(rideProgress >= 100);
    }
  }, RIDE_TICK);

  if (Math.random() < 0.3) setTimeout(() => showLaura('random'), 1200);
}

function onAccelerate() {
  rideProgress = Math.min(100, rideProgress + 9 + Math.random() * 4);
  document.getElementById('progress-fill').style.width = rideProgress + '%';
  if (rideProgress >= 100) {
    clearInterval(rideTimer);
    endRide(true);
  }
}

function endRide(success) {
  document.getElementById('bike-showcase-ride').classList.remove('riding');

  const wear = 6 + Math.random() * 10;
  state.condition = Math.max(0, state.condition - wear);

  let earned = 0;
  if (success) {
    earned = Math.round(14 + state.day * 1.4 + Math.random() * 10);
    state.cash += earned;
    state.day += 1;
  } else {
    earned = Math.round(rideProgress / 100 * 10);
    state.cash += earned;
  }

  if (state.condition <= 0 && state.cash < cheapestRepairCost()) {
    setTimeout(() => gameOver(), 400);
    return;
  }

  const msg = success
    ? `Trajet réussi ! +${earned}€`
    : `Trajet raté... Killian n'est arrivé qu'à ${Math.round(rideProgress)}%. +${earned}€ quand même.`;

  setTimeout(() => enterGarage(msg), 300);
}

function cheapestRepairCost() {
  return Math.min(...PANNES.map(p => p.cout));
}

/* -----------------------------------------------------------
   11. Game Over
   ----------------------------------------------------------- */
function gameOver() {
  document.getElementById('final-day').textContent = state.day - 1;
  document.getElementById('final-cash').textContent = state.cash + '€';
  document.getElementById('gameover-msg').textContent = pick([
    "Killian pousse la moto jusqu'au garage, dépité.",
    "Laura ne dira pas 'je te l'avais dit'... mais elle le pense fort.",
    "La SMX 300 fume une dernière fois avant de s'éteindre.",
  ]);

  const isNew = saveHighScoreIfBetter(state.day - 1);
  document.getElementById('new-highscore-line').style.display = isNew ? 'block' : 'none';

  showScreen('screen-gameover');
}
