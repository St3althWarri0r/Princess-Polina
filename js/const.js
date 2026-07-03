// Core constants for Princess Polina.

export const TILE = 16;
export const VIEW_W = 432;          // 27 tiles
export const VIEW_H = 240;          // 15 tiles
export const FPS = 60;
export const DT = 1 / FPS;

// Physics tuning (px/sec, px/sec^2), modeled on the classic momentum-tier
// system: jump height and reach scale in three discrete tiers with ground
// speed (standing ~4.4 tiles high / ~5 wide, jog ~5.4/8, full run ~6.4/11).
// The arc is near-symmetric with a brief hover at the apex, and horizontal
// stops are effectively instant — precision lives in the level, not the physics.
export const PHYS = {
  walkSpeed: 80,
  runSpeed: 165,
  accel: 600,          // snappy up to walk speed
  runAccel: 135,       // slow build past walk speed: full run needs real runway
  decel: 2000,         // near-instant stop
  airAccel: 500,
  airDecel: 100,       // air momentum mostly persists
  skidDecel: 1600,
  gravUp: 780,
  gravDown: 760,       // descent imperceptibly gentler than ascent
  apexGravScale: 0.35, // brief hover at the top of the arc
  apexBand: 42,        // |vy| below this counts as the apex
  maxFall: 280,
  jumpV1: -330,        // standing/walking: ~4.4 tiles
  jumpV2: -366,        // jogging: ~5.4 tiles
  jumpV3: -399,        // full run: ~6.4 tiles
  jumpTier2: 95,       // |vx| thresholds for the higher tiers
  jumpTier3: 135,
  jumpCutFactor: 0.45,
  coyoteTime: 0.13,
  jumpBuffer: 0.14,
  wallSlideMax: 78,
  wallJumpVX: 160,
  wallJumpVY: -330,
  rollSpeed: 190,
  rollTime: 0.34,
  poundSpeed: 360,
  dashSpeed: 250,
  dashTime: 0.18,
  glideFall: 46,
  swimAccel: 300,
  swimMax: 96,
  swimGravity: 160,
  swimJump: -150,
  climbSpeed: 72
};

// Game states
export const ST = {
  BOOT: 0,
  TITLE: 1,
  SAVES: 2,
  STORY: 3,
  WORLDMAP: 4,
  LEVEL: 5,
  ENDING: 6
};

// Entity collision layers
export const HIT = { NONE: 0, PLAYER: 1, ENEMY: 2, PLAYER_ATK: 3, ENEMY_ATK: 4 };

// Power-up ids
export const POWER = {
  NONE: 'none',
  FIRE: 'fire',        // Fire Crown — throw fireballs
  ICE: 'ice',          // Ice Tiara — freeze enemies into platforms
  WIND: 'wind',        // Wind Cloak — higher jump + slow fall
  BEAR: 'bear',        // Bear Spirit — smash blocks, stronger stomp
  BOLT: 'bolt',        // Lightning Jewel — dash attack is lethal, faster run
  CRYSTAL: 'crystal',  // Crystal Armor — absorbs two extra hits
  SHADOW: 'shadow',    // Shadow Cape — brief phase through hazards
  PHOENIX: 'phoenix'   // Phoenix Feather — one revive on death
};

// Ability unlock order (granted by defeating world bosses / finding shrines)
export const ABILITY = {
  RUN: 'run',
  WALLJUMP: 'walljump',
  ROLL: 'roll',
  CLIMB: 'climb',
  SWIM: 'swim',
  POUND: 'pound',
  DOUBLEJUMP: 'doublejump',
  DASH: 'dash',
  GLIDE: 'glide'
};

export const WORLD_COUNT = 9;
