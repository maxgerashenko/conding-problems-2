//
//
//

const SURFACE = [];

const surfaceN = parseInt(readline()); // the number of points used to draw the surface of Mars.
for (let i = 0; i < surfaceN; i++) {
  var inputs = readline().split(' ');
  const landX = parseInt(inputs[0]); // X coordinate of a surface point. (0 to 6999)
  const landY = parseInt(inputs[1]); // Y coordinate of a surface point. By linking all the points together in a sequential fashion, you form the surface of Mars.
  SURFACE.push({ landX, landY });
}

const G_MARS = 3.711;
const MAX_POWER = 4;
const MIN_POWER = 0;
const MAX_ROTATE = 90;
const MIN_ROTATE = 0;
const LANDING_VER_LIMIT = 40;
const LANDING_HOR_LIMIT = 20;

// game loop
while (true) {
  const [
    DISTANCE,
    HEIGTH,
    H_SPEED,
    V_SPEED,
    FUEL,
    ROTATE,
    POWER
  ] = readline().split(' ');

  // Fv F cos(L)
  // Fh F sin(L);

  // vertical breaking speed
  let break_ver_dist = getBreakDist({
    v: LANDING_VER_LIMIT,
    u: V_SPEED,
    a: G_MARS - MAX_POWER,
    delay: 1500
  });

  let delay = Math.round(((90 + Number(ROTATE)) / 180) * 1700);
  console.error('delay', delay, ROTATE);

  // horizontal breaking speed
  let break_hor_dist = getBreakDist({
    v: 0,
    u: H_SPEED,
    a: 0 - MAX_POWER,
    delay
  });

  HOR_DIST = DISTANCE - SURFACE[3].landX;

  let power = break_ver_dist > HEIGTH ? MAX_POWER : MIN_POWER;
  let rotate = break_hor_dist > HOR_DIST ? -MAX_ROTATE : MAX_ROTATE;

  let heigth = HEIGTH - (SURFACE[2].landY + SURFACE[3].landY) / 2;
  log({
    HEIGTH: heigth,
    HOR_DIST,
    POWER,
    break_ver_dist,
    break_hor_dist,
    FUEL,
    H_SPEED,
    V_SPEED
  });
  console.log(`${0} ${power}`);
}

// Math
// v2 - u2 = 2as
// (v2 - u2) / 2a = s
// s = (v2 - u2) / 2a
function getBreakDist({ v, u, a, delay }) {
  return Math.round((v ** 2 - u ** 2) / (a * 2)) + delay;
}

function log({
  HEIGTH,
  HOR_DIST,
  POWER,
  break_ver_dist,
  break_hor_dist,
  FUEL,
  H_SPEED,
  V_SPEED
}) {
  console.error('VER_DIST-B_DIST', HEIGTH, '-', break_ver_dist);
  console.error('V_SPEED', V_SPEED);
  console.error('POWER:', POWER);
  console.error('---------------');
  // console.error('HOR_DIST-B_DIST', HOR_DIST, '-', break_hor_dist);
  // console.error('H_SPEED:', H_SPEED);
}
