/* ===========================================================
   Killian Mesnage & la SMX 300 — v2
   =========================================================== */

const BIKE_SVG = `
<svg viewBox="0 0 300 170" xmlns="http://www.w3.org/2000/svg">
  <ellipse cx="150" cy="152" rx="120" ry="10" fill="rgba(0,0,0,0.4)"/>
  <path d="M118 108 C 100 112, 92 118, 88 130 L 88 138 C 88 142 92 145 98 145 L 116 145 C 120 145 122 142 122 138 L 122 122 L 150 100 L 140 96 Z"
        fill="#c7cad1" stroke="#8a8f98" stroke-width="1.5"/>
  <rect x="86" y="126" width="8" height="20" rx="3" fill="#3a3a3a"/>
  <path d="M62 122 L 118 108 L 150 96" stroke="#161616" stroke-width="7" fill="none" stroke-linecap="round"/>
  <rect x="118" y="98" width="34" height="30" rx="4" fill="#2c2c30" stroke="#161616" stroke-width="2"/>
  <circle cx="135" cy="113" r="7" fill="#161616"/>
  <path d="M228 96 L 205 60" stroke="#c7cad1" stroke-width="9" stroke-linecap="round"/>
  <path d="M228 96 L 205 60" stroke="#8a8f98" stroke-width="3" stroke-linecap="round"/>
  <path d="M206 92 Q 228 78 250 96" fill="none" stroke="#e2321e" stroke-width="7" stroke-linecap="round"/>
  <path d="M205 60 L 188 52 M205 60 L 214 46" stroke="#161616" stroke-width="5" stroke-linecap="round"/>
  <path d="M118 98 C 118 78, 130 56, 158 52 C 182 49, 200 58, 205 68 L 196 84 C 182 78, 150 78, 138 92 Z"
        fill="#e2321e" stroke="#161616" stroke-width="2"/>
  <path d="M126 90 C 148 78, 176 72, 196 78" fill="none" stroke="#2ad6d1" stroke-width="5" stroke-linecap="round"/>
  <rect x="150" y="66" width="30" height="20" rx="3" fill="#f4efe2" stroke="#161616" stroke-width="2"/>
  <text x="165" y="81" font-size="15" font-weight="900" text-anchor="middle" fill="#161616" font-family="Arial, sans-serif">1</text>
  <path d="M118 98 C 108 92, 92 90, 78 96 L 78 104 C 92 100, 108 100, 118 106 Z" fill="#161616"/>
  <path d="M40 108 Q 62 90 90 100" fill="none" stroke="#e2321e" stroke-width="7" stroke-linecap="round"/>
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
  <g>
    <path d="M100 106 L 118 128 L 108 138" stroke="#161616" stroke-width="7" fill="none" stroke-linecap="round"/>
    <path d="M95 100 C 88 84, 92 66, 108 54" stroke="#232326" stroke-width="13" fill="none" stroke-linecap="round"/>
    <path d="M100 68 L 180 56" stroke="#232326" stroke-width="8" fill="none" stroke-linecap="round"/>
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
   Données
   ----------------------------------------------------------- */
const PANNES = [
  { nom: "Panne d'essence", desc: "Le réservoir est à sec, encore.", cout: 15, type: "essence" },
  { nom: "Bougie cramée", desc: "Le moteur tousse et refuse de partir.", cout: 25, type: "moteur" },
  { nom: "Batterie à plat", desc: "Pas un bruit quand Killian tourne la clé.", cout: 30, type: "elec" },
  { nom: "Carburateur encrassé", desc: "Ça crachote, ça hoquette, ça n'avance pas.", cout: 35, type: "moteur" },
  { nom: "Démarreur grillé", desc: "Le démarreur fume presque. Grave.", cout: 60, type: "elec" },
  { nom: "Chaîne déraillée", desc: "La chaîne pend lamentablement sur le côté.", cout: 12, type: "chaine" },
];

const RIDE_TYPES = [
  { id: "ville", name: "Ville", icon: "🏙️", duration: 5.2, wearMult: 0.7, cashMult: 0.85, panneMult: 0.8 },
  { id: "campagne", name: "Campagne", icon: "🛣️", duration: 6.0, wearMult: 1.0, cashMult: 1.0, panneMult: 1.0 },
  { id: "autoroute", name: "Autoroute", icon: "🌃", duration: 6.8, wearMult: 1.35, cashMult: 1.45, panneMult: 1.25 },
];

const UPGRADES = [
  {
    id: "chaine",
    name: "Kit chaîne renforcée",
    desc: "Usure de la moto réduite de 25 % à chaque trajet.",
    price: 45,
    effect: (s) => { s.wearReduction = 0.25; }
  },
  {
    id: "batterie",
    name: "Batterie + démarreur pro",
    desc: "Chance de panne électrique fortement réduite.",
    price: 70,
    effect: (s) => { s.elecReduction = 0.55; }
  },
  {
    id: "reservoir",
    name: "Réservoir agrandi",
    desc: "Beaucoup moins de pannes d'essence.",
    price: 55,
    effect: (s) => { s.essenceReduction = 0.7; }
  },
  {
    id: "casque",
    name: "Casque aéré + gants",
    desc: "+20 % d'argent sur chaque trajet réussi.",
    price: 40,
    effect: (s) => { s.cashBonus = 0.20; }
  },
];

const LAURA = {
  garage: {
    high: [
      "Elle brille aujourd'hui… presque autant que toi.",
      "Ok, je te laisse deux minutes avec ta chérie mécanique.",
      "Tu as l'air content. C'est rare, j'en profite.",
    ],
    mid: [
      "Encore en train de bichonner ce tas de boulons ?",
      "Tu sais qu'on a un loyer à payer, hein ?",
      "T'as vu l'heure ? Non, bien sûr, t'as les yeux sur ta moto.",
    ],
    low: [
      "Je commence sérieusement à en avoir marre de cette bécane.",
      "Un jour tu choisiras entre elle et moi. Réfléchis.",
      "Tu parles plus à ta moto qu'à moi ces derniers temps.",
    ]
  },
  argent: {
    high: ["Allez… si ça la fait tenir, ok."],
    mid: [
      "Encore de l'argent dans cette bécane ?! Sérieux Killian ?",
      "On devait pas plutôt économiser pour les vacances ?",
    ],
    low: [
      "Tu préfères clairement ta moto à notre couple.",
      "À ce rythme on va finir à la rue à cause de ta SMX.",
    ]
  },
  panne: {
    high: ["Ha… encore. Courage mon cœur."],
    mid: [
      "Ha ! Encore en panne ! Je le SAVAIS.",
      "Bon, elle refait sa crise. Comme d'habitude.",
    ],
    low: [
      "Je te l'avais dit mille fois. Tu ne m'écoutes jamais.",
      "C'est pas une moto, c'est un drame ambulant. Et toi aussi.",
    ]
  },
  random: {
    high: ["Je t'ai pris un café. Il est encore tiède, miracle."],
    mid: [
      "Killian ! T'as pensé à sortir la poubelle ?",
      "Ta mère a appelé. Encore.",
      "N'oublie pas, ce soir c'est repas chez mes parents !",
    ],
    low: [
      "Je me demande pourquoi je suis encore là parfois.",
      "Tu m'écoutes vraiment quand je te parle ?",
    ]
  },
};

function pick(arr) { return arr[Math.floor(Math.random() * arr.length)]; }

function lauraLevel() {
  if (state.mood >= 65) return "high";
  if (state.mood >= 35) return "mid";
  return "low";
}

let lauraTimeout = null;
function showLaura(category) {
  const toast = document.getElementById('laura-toast');
  const text = document.getElementById('laura-text');
  const pool = LAURA[category][lauraLevel()];
  text.textContent = pick(pool);
  toast.classList.remove('hidden');
  clearTimeout(lauraTimeout);
  lauraTimeout = setTimeout(() => toast.classList.add('hidden'), 2800);
}

function vibrate(pattern = 40) {
  if (navigator.vibrate) navigator.vibrate(pattern);
}

/* -----------------------------------------------------------
   État
   ----------------------------------------------------------- */
const HIGH_SCORE_KEY = 'killian_smx_v2_highscore';
const SAVE_KEY = 'killian_smx_v2_save';

const state = {
  cash: 35,
  condition: 100,
  day: 1,
  mood: 70,
  diyAttempts: 0,
  currentPanne: null,
  currentRideType: null,
  upgrades: {}, // id -> true
  wearReduction: 0,
  elecReduction: 0,
  essenceReduction: 0,
  cashBonus: 0,
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

function applyOwnedUpgrades() {
  state.wearReduction = 0;
  state.elecReduction = 0;
  state.essenceReduction = 0;
  state.cashBonus = 0;
  UPGRADES.forEach(u => {
    if (state.upgrades[u.id]) u.effect(state);
  });
}

/* -----------------------------------------------------------
   Navigation
   ----------------------------------------------------------- */
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.add('hidden'));
  document.getElementById(id).classList.remove('hidden');
}

/* -----------------------------------------------------------
   UI updates
   ----------------------------------------------------------- */
function updateMoodUI() {
  const pct = Math.max(0, Math.round(state.mood));
  document.getElementById('mood-percent').textContent = pct + '%';
  const fill = document.getElementById('mood-fill');
  fill.style.width = pct + '%';
  if (pct > 65) fill.style.background = 'linear-gradient(90deg, #e88, #e2321e)';
  else if (pct > 35) fill.style.background = 'linear-gradient(90deg, #f0a030, #e88)';
  else fill.style.background = 'linear-gradient(90deg, #888, #555)';
}

function updateGarageUI() {
  document.getElementById('stat-cash').textContent = state.cash + '€';
  document.getElementById('ride-cash').textContent = state.cash + '€';
  document.getElementById('shop-cash').textContent = state.cash + '€';
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

  updateMoodUI();

  const cajoleBtn = document.getElementById('btn-cajole');
  cajoleBtn.disabled = state.cash < 12 || state.mood >= 95;
  cajoleBtn.style.opacity = cajoleBtn.disabled ? '0.45' : '1';
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

  if (Math.random() < 0.35) {
    setTimeout(() => showLaura('garage'), 500);
  }
}

/* -----------------------------------------------------------
   Init & start
   ----------------------------------------------------------- */
function initTitleScreen() {
  const hs = getHighScore();
  document.getElementById('title-highscore').textContent =
    hs > 0 ? `🏆 Record : ${hs} trajets` : '';
}

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
  document.getElementById('btn-shop').addEventListener('click', openShop);
  document.getElementById('btn-back-garage').addEventListener('click', () => enterGarage());
  document.getElementById('btn-cajole').addEventListener('click', cajoleLaura);
});

function startGame() {
  state.cash = 35;
  state.condition = 100;
  state.day = 1;
  state.mood = 70;
  state.diyAttempts = 0;
  state.currentPanne = null;
  state.upgrades = {};
  applyOwnedUpgrades();
  enterGarage("Journée fraîche. La SMX 300 brille au garage.");
}

/* -----------------------------------------------------------
   Panne
   ----------------------------------------------------------- */
function panneChance() {
  const base = 0.07;
  const wearFactor = (100 - state.condition) / 100 * 0.60;
  return Math.min(0.88, base + wearFactor);
}

function attemptDeparture() {
  state.diyAttempts = 0;
  const forced = state.condition <= 12;
  if (forced || Math.random() < panneChance()) {
    triggerPanne();
  } else {
    startRide();
  }
}

function triggerPanne() {
  // Bias pannes according to upgrades
  let candidates = [...PANNES];
  if (state.essenceReduction > 0) {
    candidates = candidates.filter(p => p.type !== "essence" || Math.random() > state.essenceReduction);
  }
  if (state.elecReduction > 0) {
    candidates = candidates.filter(p => p.type !== "elec" || Math.random() > state.elecReduction);
  }
  if (candidates.length === 0) candidates = PANNES;

  const panne = pick(candidates);
  const costMult = 1 + state.diyAttempts * 0.22;
  state.currentPanne = { ...panne, cout: Math.round(panne.cout * costMult) };

  document.getElementById('panne-title').textContent = state.currentPanne.nom;
  document.getElementById('panne-desc').textContent = state.currentPanne.desc;
  document.getElementById('panne-cost').textContent = state.currentPanne.cout + '€';
  document.getElementById('panne-warning').textContent = '';

  const canPay = state.cash >= state.currentPanne.cout;
  document.getElementById('btn-pay').disabled = !canPay;
  document.getElementById('btn-pay').style.opacity = canPay ? '1' : '0.5';
  document.getElementById('btn-diy').classList.remove('hidden');

  openModal('modal-panne');
  vibrate([30, 40, 30]);

  if (Math.random() < 0.65) setTimeout(() => showLaura('panne'), 400);
}

function openModal(id) { document.getElementById(id).classList.remove('hidden'); }
function closeModal(id) { document.getElementById(id).classList.add('hidden'); }

function payRepair() {
  const cost = state.currentPanne.cout;
  if (state.cash < cost) return;
  state.cash -= cost;
  state.condition = Math.min(100, state.condition + 22);
  state.mood = Math.max(0, state.mood - (cost > 40 ? 8 : 4));
  state.currentPanne = null;
  closeModal('modal-panne');
  updateGarageUI();
  if (Math.random() < 0.75) showLaura('argent');
  setTimeout(startRide, 550);
}

/* -----------------------------------------------------------
   DIY
   ----------------------------------------------------------- */
let diyRAF = null;
let diyStartTime = null;
let diyZoneStart = 0;
let diyZoneWidth = 0;

function startDiy() {
  closeModal('modal-panne');
  state.diyAttempts++;

  diyZoneWidth = Math.max(9, 23 - state.diyAttempts * 3.8);
  diyZoneStart = 18 + Math.random() * (80 - diyZoneWidth - 18);
  document.getElementById('diy-zone').style.left = diyZoneStart + '%';
  document.getElementById('diy-zone').style.width = diyZoneWidth + '%';

  openModal('modal-bricolage');
  diyStartTime = performance.now();
  cancelAnimationFrame(diyRAF);
  diyRAF = requestAnimationFrame(animateDiy);
}

function animateDiy(t) {
  const elapsed = (t - diyStartTime) / 1000;
  const period = 1.35;
  const phase = (elapsed % period) / period;
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
    state.condition = Math.min(100, state.condition + 10);
    state.mood = Math.min(100, state.mood + 3);
    state.currentPanne = null;
    updateGarageUI();
    document.getElementById('garage-msg').textContent = "Killian s'essuie les mains, fier de lui.";
    vibrate(25);
    setTimeout(startRide, 450);
  } else {
    state.condition = Math.max(0, state.condition - 12);
    state.mood = Math.max(0, state.mood - 6);
    updateGarageUI();
    vibrate([50, 30, 50]);
    if (state.condition <= 0 && state.cash < cheapestRepairCost()) {
      setTimeout(() => gameOver(), 300);
      return;
    }
    triggerPanne();
    document.getElementById('panne-warning').textContent = "Raté ! Le bricolage sera plus dur (et plus cher) la prochaine fois.";
  }
}

/* -----------------------------------------------------------
   Trajet
   ----------------------------------------------------------- */
let rideTimer = null;
let rideTimeLeft = 0;
let rideProgress = 0;
const RIDE_TICK = 100;

function startRide() {
  // Choisir un type de trajet (plus de variété après quelques jours)
  let pool = RIDE_TYPES;
  if (state.day < 4) pool = RIDE_TYPES.slice(0, 2);
  state.currentRideType = pick(pool);

  const rt = state.currentRideType;
  rideProgress = 0;
  rideTimeLeft = rt.duration;

  document.getElementById('progress-fill').style.width = '0%';
  document.getElementById('timer-fill').style.width = '100%';
  document.getElementById('ride-cash').textContent = state.cash + '€';
  document.getElementById('ride-type-icon').textContent = rt.icon;
  document.getElementById('ride-type-name').textContent = rt.name;
  document.getElementById('ride-title').textContent =
    rt.id === "autoroute" ? "Autoroute de nuit — gagne du temps !" :
    rt.id === "ville" ? "Trafic en ville — reste concentré !" :
    "Fonce avant la fin du chrono !";

  showScreen('screen-ride');
  document.getElementById('bike-showcase-ride').classList.add('riding');

  clearInterval(rideTimer);
  rideTimer = setInterval(() => {
    rideTimeLeft -= RIDE_TICK / 1000;
    const pct = Math.max(0, (rideTimeLeft / rt.duration) * 100);
    document.getElementById('timer-fill').style.width = pct + '%';
    if (rideTimeLeft <= 0) {
      clearInterval(rideTimer);
      endRide(rideProgress >= 100);
    }
  }, RIDE_TICK);

  if (Math.random() < 0.28) setTimeout(() => showLaura('random'), 1100);
}

function onAccelerate() {
  rideProgress = Math.min(100, rideProgress + 8.5 + Math.random() * 4.5);
  document.getElementById('progress-fill').style.width = rideProgress + '%';
  if (rideProgress >= 100) {
    clearInterval(rideTimer);
    endRide(true);
  }
}

function endRide(success) {
  document.getElementById('bike-showcase-ride').classList.remove('riding');
  const rt = state.currentRideType || RIDE_TYPES[1];

  let wear = (6 + Math.random() * 9) * rt.wearMult;
  wear *= (1 - state.wearReduction);
  state.condition = Math.max(0, state.condition - wear);

  let earned = 0;
  if (success) {
    earned = Math.round((15 + state.day * 1.5 + Math.random() * 11) * rt.cashMult);
    earned = Math.round(earned * (1 + state.cashBonus));
    state.cash += earned;
    state.day += 1;
    state.mood = Math.min(100, state.mood + 2);
    vibrate(30);
  } else {
    earned = Math.round(rideProgress / 100 * 9 * rt.cashMult);
    state.cash += earned;
    state.mood = Math.max(0, state.mood - 5);
    vibrate([40, 30, 40]);
  }

  if (state.condition <= 0 && state.cash < cheapestRepairCost()) {
    setTimeout(() => gameOver(), 400);
    return;
  }

  const msg = success
    ? `Trajet ${rt.name} réussi ! +${earned}€`
    : `Trajet raté... seulement ${Math.round(rideProgress)}%. +${earned}€ quand même.`;

  setTimeout(() => enterGarage(msg), 280);
}

function cheapestRepairCost() {
  return Math.min(...PANNES.map(p => p.cout));
}

/* -----------------------------------------------------------
   Boutique & Cajoler
   ----------------------------------------------------------- */
function openShop() {
  renderShop();
  showScreen('screen-shop');
}

function renderShop() {
  const list = document.getElementById('shop-list');
  list.innerHTML = '';
  document.getElementById('shop-cash').textContent = state.cash + '€';

  UPGRADES.forEach(u => {
    const owned = !!state.upgrades[u.id];
    const item = document.createElement('div');
    item.className = 'shop-item' + (owned ? ' owned' : '');
    item.innerHTML = `
      <div class="shop-item-header">
        <span class="shop-item-name">${u.name}</span>
        <span class="shop-item-price">${owned ? 'Possédé' : u.price + '€'}</span>
      </div>
      <div class="shop-item-desc">${u.desc}</div>
      ${owned ? '' : `<button class="btn btn-primary shop-item-btn" data-id="${u.id}">Acheter</button>`}
    `;
    list.appendChild(item);
  });

  list.querySelectorAll('.shop-item-btn').forEach(btn => {
    btn.addEventListener('click', () => buyUpgrade(btn.dataset.id));
  });
}

function buyUpgrade(id) {
  const u = UPGRADES.find(x => x.id === id);
  if (!u || state.upgrades[id] || state.cash < u.price) return;
  state.cash -= u.price;
  state.upgrades[id] = true;
  applyOwnedUpgrades();
  vibrate(35);
  renderShop();
  updateGarageUI();
}

function cajoleLaura() {
  if (state.cash < 12 || state.mood >= 95) return;
  state.cash -= 12;
  state.mood = Math.min(100, state.mood + 18);
  updateGarageUI();
  showLaura('garage');
  document.getElementById('garage-msg').textContent = "Laura sourit (un peu). Ça valait le coup.";
  vibrate(20);
}

/* -----------------------------------------------------------
   Game Over
   ----------------------------------------------------------- */
function gameOver() {
  document.getElementById('final-day').textContent = state.day - 1;
  document.getElementById('final-cash').textContent = state.cash + '€';
  document.getElementById('final-mood').textContent = Math.round(state.mood) + '%';
  document.getElementById('gameover-msg').textContent = pick([
    "Killian pousse la moto jusqu'au garage, dépité.",
    "Laura ne dira pas 'je te l'avais dit'... mais elle le pense très fort.",
    "La SMX 300 fume une dernière fois avant de s'éteindre.",
    state.mood < 30 ? "Laura a déjà commencé à faire ses cartons." : "Au moins Laura est encore là… pour l'instant.",
  ]);

  const isNew = saveHighScoreIfBetter(state.day - 1);
  document.getElementById('new-highscore-line').style.display = isNew ? 'block' : 'none';

  showScreen('screen-gameover');
  vibrate([80, 40, 80, 40, 120]);
}
