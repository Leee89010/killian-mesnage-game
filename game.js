/* ===========================================================
   Killian Mesnage & la SMX 300 — v3 MAX
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

/* ---------- Data ---------- */
const PANNES = [
  { nom: "Panne d'essence", desc: "Le réservoir est à sec, encore.", cout: 18, type: "essence" },
  { nom: "Bougie cramée", desc: "Le moteur tousse et refuse de partir.", cout: 28, type: "moteur" },
  { nom: "Batterie à plat", desc: "Pas un bruit quand Killian tourne la clé.", cout: 35, type: "elec" },
  { nom: "Carburateur encrassé", desc: "Ça crachote, ça hoquette, ça n'avance pas.", cout: 40, type: "moteur" },
  { nom: "Démarreur grillé", desc: "Le démarreur fume presque. Grave.", cout: 70, type: "elec" },
  { nom: "Chaîne déraillée", desc: "La chaîne pend lamentablement sur le côté.", cout: 15, type: "chaine" },
];

const RIDE_TYPES = [
  { id: "ville", name: "Ville", icon: "🏙️", duration: 7.5, wearMult: 0.75, cashMult: 0.9, panneMult: 0.85, obstacleRate: 0.55 },
  { id: "campagne", name: "Campagne", icon: "🛣️", duration: 8.5, wearMult: 1.0, cashMult: 1.05, panneMult: 1.0, obstacleRate: 0.7 },
  { id: "autoroute", name: "Autoroute", icon: "🌃", duration: 9.5, wearMult: 1.4, cashMult: 1.55, panneMult: 1.3, obstacleRate: 0.9 },
];

const UPGRADES = [
  {
    id: "chaine",
    name: "Kit chaîne renforcée",
    desc: "Usure de la moto réduite de 30 % à chaque trajet.",
    price: 95,
    unlockAt: 3,
    effect: (s) => { s.wearReduction = 0.30; }
  },
  {
    id: "batterie",
    name: "Batterie + démarreur pro",
    desc: "Chance de panne électrique fortement réduite.",
    price: 140,
    unlockAt: 6,
    effect: (s) => { s.elecReduction = 0.60; }
  },
  {
    id: "reservoir",
    name: "Réservoir agrandi",
    desc: "Beaucoup moins de pannes d'essence.",
    price: 120,
    unlockAt: 5,
    effect: (s) => { s.essenceReduction = 0.75; }
  },
  {
    id: "casque",
    name: "Casque aéré + gants",
    desc: "+25 % d'argent sur chaque trajet réussi.",
    price: 85,
    unlockAt: 2,
    effect: (s) => { s.cashBonus = 0.25; }
  },
  {
    id: "suspension",
    name: "Suspensions sport",
    desc: "Moins de dégâts en cas de collision avec un obstacle.",
    price: 160,
    unlockAt: 8,
    effect: (s) => { s.collisionReduction = 0.45; }
  },
  {
    id: "moteur",
    name: "Préparation moteur",
    desc: "Progression plus rapide pendant les trajets.",
    price: 180,
    unlockAt: 10,
    effect: (s) => { s.accelBonus = 0.35; }
  },
];

const LAURA = {
  garage: [
    "Elle brille aujourd'hui… presque autant que toi.",
    "Ok, je te laisse deux minutes avec ta chérie mécanique.",
    "Tu as l'air content. C'est rare, j'en profite.",
    "Encore en train de bichonner ce tas de boulons ?",
    "Franchement elle est belle... mais je le dirai qu'une fois.",
    "Tu sais qu'on a un loyer à payer, hein ?",
  ],
  argent: [
    "Allez… si ça la fait tenir, ok.",
    "Encore de l'argent dans cette bécane ?! Sérieux Killian ?",
    "On devait pas plutôt économiser pour les vacances ?",
    "À ce rythme la SMX vivra mieux que nous deux.",
  ],
  panne: [
    "Ha… encore. Courage mon cœur.",
    "Ha ! Encore en panne ! Je le SAVAIS.",
    "Bon, elle refait sa crise. Comme d'habitude.",
    "Tu devrais lui parler plus gentiment, peut-être qu'elle démarrerait.",
  ],
  random: [
    "Je t'ai pris un café. Il est encore tiède, miracle.",
    "Killian ! T'as pensé à sortir la poubelle ?",
    "Ta mère a appelé. Encore.",
    "N'oublie pas, ce soir c'est repas chez mes parents !",
    "Je t'aime même si tu es un mécano du dimanche.",
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
  lauraTimeout = setTimeout(() => toast.classList.add('hidden'), 2800);
}

function vibrate(pattern = 40) {
  if (navigator.vibrate) navigator.vibrate(pattern);
}

/* ---------- State ---------- */
const HIGH_SCORE_KEY = 'killian_smx_v3_highscore';

const state = {
  cash: 40,
  condition: 100,
  day: 1,
  mood: 75,
  diyAttempts: 0,
  currentPanne: null,
  currentRideType: null,
  upgrades: {},
  wearReduction: 0,
  elecReduction: 0,
  essenceReduction: 0,
  cashBonus: 0,
  collisionReduction: 0,
  accelBonus: 0,
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
  state.collisionReduction = 0;
  state.accelBonus = 0;
  UPGRADES.forEach(u => {
    if (state.upgrades[u.id]) u.effect(state);
  });
}

/* ---------- Navigation ---------- */
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.add('hidden'));
  document.getElementById(id).classList.remove('hidden');
}

/* ---------- UI ---------- */
function updateMoodUI() {
  const pct = Math.max(0, Math.round(state.mood));
  document.getElementById('mood-percent').textContent = pct + '%';
  const fill = document.getElementById('mood-fill');
  fill.style.width = pct + '%';
  fill.style.background = 'linear-gradient(90deg, #e88, #e2321e)';
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
  cajoleBtn.disabled = state.cash < 15 || state.mood >= 98;
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

/* ---------- Init ---------- */
function initTitleScreen() {
  const hs = getHighScore();
  document.getElementById('title-highscore').textContent =
    hs > 0 ? `🏆 Record : niveau ${hs}` : '';
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
  document.getElementById('btn-left').addEventListener('click', () => steer(-1));
  document.getElementById('btn-right').addEventListener('click', () => steer(1));

  // Swipe support on road
  const road = document.getElementById('road-container');
  let touchStartX = 0;
  road.addEventListener('touchstart', (e) => {
    touchStartX = e.touches[0].clientX;
  }, { passive: true });
  road.addEventListener('touchend', (e) => {
    const dx = e.changedTouches[0].clientX - touchStartX;
    if (Math.abs(dx) > 30) steer(dx > 0 ? 1 : -1);
  }, { passive: true });
});

function startGame() {
  state.cash = 40;
  state.condition = 100;
  state.day = 1;
  state.mood = 75;
  state.diyAttempts = 0;
  state.currentPanne = null;
  state.upgrades = {};
  applyOwnedUpgrades();
  enterGarage("Journée fraîche. La SMX 300 brille au garage.");
}

/* ---------- Panne ---------- */
function panneChance() {
  const base = 0.09;
  const wearFactor = (100 - state.condition) / 100 * 0.62;
  return Math.min(0.9, base + wearFactor);
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
  let candidates = [...PANNES];
  if (state.essenceReduction > 0) {
    candidates = candidates.filter(p => p.type !== "essence" || Math.random() > state.essenceReduction);
  }
  if (state.elecReduction > 0) {
    candidates = candidates.filter(p => p.type !== "elec" || Math.random() > state.elecReduction);
  }
  if (candidates.length === 0) candidates = PANNES;

  const panne = pick(candidates);
  const costMult = 1 + state.diyAttempts * 0.25;
  state.currentPanne = { ...panne, cout: Math.round(panne.cout * costMult) };

  document.getElementById('panne-title').textContent = state.currentPanne.nom;
  document.getElementById('panne-desc').textContent = state.currentPanne.desc;
  document.getElementById('panne-cost').textContent = state.currentPanne.cout + '€';
  document.getElementById('panne-warning').textContent = '';

  const canPay = state.cash >= state.currentPanne.cout;
  document.getElementById('btn-pay').disabled = !canPay;
  document.getElementById('btn-pay').style.opacity = canPay ? '1' : '0.5';

  openModal('modal-panne');
  vibrate([30, 40, 30]);

  if (Math.random() < 0.6) setTimeout(() => showLaura('panne'), 400);
}

function openModal(id) { document.getElementById(id).classList.remove('hidden'); }
function closeModal(id) { document.getElementById(id).classList.add('hidden'); }

function payRepair() {
  const cost = state.currentPanne.cout;
  if (state.cash < cost) return;
  state.cash -= cost;
  state.condition = Math.min(100, state.condition + 24);
  // Mood never decreases
  state.currentPanne = null;
  closeModal('modal-panne');
  updateGarageUI();
  if (Math.random() < 0.7) showLaura('argent');
  setTimeout(startRide, 500);
}

/* ---------- DIY ---------- */
let diyRAF = null;
let diyStartTime = null;
let diyZoneStart = 0;
let diyZoneWidth = 0;

function startDiy() {
  closeModal('modal-panne');
  state.diyAttempts++;

  diyZoneWidth = Math.max(8, 22 - state.diyAttempts * 3.5);
  diyZoneStart = 16 + Math.random() * (80 - diyZoneWidth - 16);
  document.getElementById('diy-zone').style.left = diyZoneStart + '%';
  document.getElementById('diy-zone').style.width = diyZoneWidth + '%';

  openModal('modal-bricolage');
  diyStartTime = performance.now();
  cancelAnimationFrame(diyRAF);
  diyRAF = requestAnimationFrame(animateDiy);
}

function animateDiy(t) {
  const elapsed = (t - diyStartTime) / 1000;
  const period = 1.3;
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
    state.condition = Math.min(100, state.condition + 12);
    state.mood = Math.min(100, state.mood + 4); // only increases
    state.currentPanne = null;
    updateGarageUI();
    document.getElementById('garage-msg').textContent = "Killian s'essuie les mains, fier de lui.";
    vibrate(25);
    setTimeout(startRide, 400);
  } else {
    state.condition = Math.max(0, state.condition - 14);
    // Mood never decreases
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

/* ---------- Ride with steering + obstacles ---------- */
let rideTimer = null;
let rideTimeLeft = 0;
let rideProgress = 0;
let bikeLane = 1; // 0 left, 1 center, 2 right
let obstacles = [];
let obstacleId = 0;
let lastObstacleTime = 0;
const RIDE_TICK = 50;
const LANE_POSITIONS = [18, 50, 82]; // % left

function startRide() {
  let pool = RIDE_TYPES;
  if (state.day < 4) pool = RIDE_TYPES.slice(0, 2);
  if (state.day < 7) pool = RIDE_TYPES;
  state.currentRideType = pick(pool);

  const rt = state.currentRideType;
  rideProgress = 0;
  rideTimeLeft = rt.duration;
  bikeLane = 1;
  obstacles = [];
  obstacleId = 0;
  lastObstacleTime = 0;

  document.getElementById('progress-fill').style.width = '0%';
  document.getElementById('timer-fill').style.width = '100%';
  document.getElementById('ride-cash').textContent = state.cash + '€';
  document.getElementById('ride-type-icon').textContent = rt.icon;
  document.getElementById('ride-type-name').textContent = rt.name;
  document.getElementById('ride-title').textContent =
    rt.id === "autoroute" ? "Autoroute — évite les bolides !" :
    rt.id === "ville" ? "Ville — attention aux nids-de-poule !" :
    "Campagne — reste concentré !";

  document.getElementById('obstacles').innerHTML = '';
  updateBikePosition();

  showScreen('screen-ride');

  clearInterval(rideTimer);
  rideTimer = setInterval(rideTick, RIDE_TICK);

  if (Math.random() < 0.25) setTimeout(() => showLaura('random'), 1200);
}

function updateBikePosition() {
  const el = document.getElementById('bike-on-road');
  el.style.left = LANE_POSITIONS[bikeLane] + '%';
}

function steer(dir) {
  bikeLane = Math.max(0, Math.min(2, bikeLane + dir));
  updateBikePosition();
  vibrate(15);
}

function spawnObstacle() {
  const lane = Math.floor(Math.random() * 3);
  const types = ['🚗', '🚙', '🕳️', '🪨', '🚧'];
  const type = pick(types);
  const id = 'obs-' + (obstacleId++);
  const el = document.createElement('div');
  el.className = 'obstacle';
  el.id = id;
  el.textContent = type;
  el.style.left = LANE_POSITIONS[lane] + '%';
  el.style.top = '-40px';
  el.style.transform = 'translateX(-50%)';
  document.getElementById('obstacles').appendChild(el);

  obstacles.push({ id, lane, y: -40, el, hit: false });
}

function rideTick() {
  const rt = state.currentRideType;
  rideTimeLeft -= RIDE_TICK / 1000;

  const pct = Math.max(0, (rideTimeLeft / rt.duration) * 100);
  document.getElementById('timer-fill').style.width = pct + '%';

  // Spawn obstacles
  lastObstacleTime += RIDE_TICK;
  const spawnInterval = 900 / (rt.obstacleRate || 0.7);
  if (lastObstacleTime > spawnInterval && rideTimeLeft > 1.2) {
    spawnObstacle();
    lastObstacleTime = 0;
  }

  // Move obstacles
  const speed = 4.2 + (state.day * 0.08);
  obstacles.forEach(o => {
    if (o.hit) return;
    o.y += speed;
    o.el.style.top = o.y + 'px';

    // Collision check (bike is around y 160-200 of the 210px container)
    if (o.y > 145 && o.y < 195 && o.lane === bikeLane && !o.hit) {
      o.hit = true;
      o.el.style.opacity = '0.3';
      onCollision();
    }

    if (o.y > 230) {
      o.el.remove();
    }
  });
  obstacles = obstacles.filter(o => o.y <= 230);

  if (rideTimeLeft <= 0) {
    clearInterval(rideTimer);
    endRide(rideProgress >= 100);
  }
}

function onCollision() {
  const baseDamage = 8 + Math.random() * 7;
  const damage = baseDamage * (1 - state.collisionReduction);
  state.condition = Math.max(0, state.condition - damage);
  vibrate([60, 30, 60]);
  // small visual flash could be added, but keep simple
}

function onAccelerate() {
  const bonus = 7.5 + Math.random() * 4 + (state.accelBonus * 6);
  rideProgress = Math.min(100, rideProgress + bonus);
  document.getElementById('progress-fill').style.width = rideProgress + '%';
  if (rideProgress >= 100) {
    clearInterval(rideTimer);
    endRide(true);
  }
}

function endRide(success) {
  clearInterval(rideTimer);
  const rt = state.currentRideType || RIDE_TYPES[1];

  let wear = (7 + Math.random() * 9) * rt.wearMult;
  wear *= (1 - state.wearReduction);
  state.condition = Math.max(0, state.condition - wear);

  let earned = 0;
  if (success) {
    earned = Math.round((16 + state.day * 1.6 + Math.random() * 12) * rt.cashMult);
    earned = Math.round(earned * (1 + state.cashBonus));
    state.cash += earned;
    state.day += 1;
    state.mood = Math.min(100, state.mood + 3); // only increases
    vibrate(30);
  } else {
    earned = Math.round(rideProgress / 100 * 10 * rt.cashMult);
    state.cash += earned;
    // Mood never decreases
    vibrate([40, 30, 40]);
  }

  // Clean obstacles
  document.getElementById('obstacles').innerHTML = '';
  obstacles = [];

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

/* ---------- Shop ---------- */
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
    const unlocked = state.day >= u.unlockAt;
    const item = document.createElement('div');
    item.className = 'shop-item' + (owned ? ' owned' : '') + (!unlocked ? ' locked' : '');

    let priceHtml = owned ? 'Possédé' : (unlocked ? u.price + '€' : '🔒');
    let actionHtml = '';
    if (owned) {
      actionHtml = '';
    } else if (!unlocked) {
      actionHtml = `<div class="shop-item-lock">Débloqué au niveau ${u.unlockAt}</div>`;
    } else {
      actionHtml = `<button class="btn btn-primary shop-item-btn" data-id="${u.id}">Acheter</button>`;
    }

    item.innerHTML = `
      <div class="shop-item-header">
        <span class="shop-item-name">${u.name}</span>
        <span class="shop-item-price">${priceHtml}</span>
      </div>
      <div class="shop-item-desc">${u.desc}</div>
      ${actionHtml}
    `;
    list.appendChild(item);
  });

  list.querySelectorAll('.shop-item-btn').forEach(btn => {
    btn.addEventListener('click', () => buyUpgrade(btn.dataset.id));
  });
}

function buyUpgrade(id) {
  const u = UPGRADES.find(x => x.id === id);
  if (!u || state.upgrades[id] || state.cash < u.price || state.day < u.unlockAt) return;
  state.cash -= u.price;
  state.upgrades[id] = true;
  applyOwnedUpgrades();
  vibrate(35);
  renderShop();
  updateGarageUI();
}

function cajoleLaura() {
  if (state.cash < 15 || state.mood >= 98) return;
  state.cash -= 15;
  state.mood = Math.min(100, state.mood + 12);
  updateGarageUI();
  showLaura('garage');
  document.getElementById('garage-msg').textContent = "Laura sourit. Ça valait le coup.";
  vibrate(20);
}

/* ---------- Game Over ---------- */
function gameOver() {
  document.getElementById('final-day').textContent = state.day - 1;
  document.getElementById('final-cash').textContent = state.cash + '€';
  document.getElementById('final-mood').textContent = Math.round(state.mood) + '%';
  document.getElementById('gameover-msg').textContent = pick([
    "Killian pousse la moto jusqu'au garage, dépité.",
    "Laura ne dira pas 'je te l'avais dit'... mais elle le pense très fort.",
    "La SMX 300 fume une dernière fois avant de s'éteindre.",
    "Au moins Laura est encore là… pour l'instant.",
  ]);

  const isNew = saveHighScoreIfBetter(state.day - 1);
  document.getElementById('new-highscore-line').style.display = isNew ? 'block' : 'none';

  showScreen('screen-gameover');
  vibrate([80, 40, 80, 40, 120]);
}
