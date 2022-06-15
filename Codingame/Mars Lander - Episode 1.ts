// https://www.codingame.com/ide/puzzle/mars-lander-episode-1
//
// Mars Lander - Episode 1

/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const surfaceN = parseInt(readline()); // the number of points used to draw the surface of Mars.
for (let i = 0; i < surfaceN; i++) {
  var inputs = readline().split(' ');
  const landX = parseInt(inputs[0]); // X coordinate of a surface point. (0 to 6999)
  const landY = parseInt(inputs[1]); // Y coordinate of a surface point. By linking all the points together in a sequential fashion, you form the surface of Mars.
}

// game loop
while (true) {
  var inputs = readline()
    .split(' ')
    .map(el => +el);
  let [DISTANCE, HEIGTH, H_SPEED, V_SPEED, FUEL, ROTATE, POWER] = inputs;

  const G_MARS = 3.711;
  const MAX_POWER = 4;
  const MIN_POWER = 0;
  const LANDING_VERTICAL_LIMIT = 40 - 5;

  // V_SPEED = get_velocity_from_a({a: G_MARS - POWER, u:V_SPEED, t:1});

  const breakingDistance = get_vert_breaking_distance({
    v: LANDING_VERTICAL_LIMIT,
    u: -V_SPEED,
    a: G_MARS - MAX_POWER,
    POWER
  });

  const breakingDelayDistance = get_vert_delay_in_dist({
    u: -V_SPEED,
    POWER,
    G_MARS
  });

  const breakingHight = breakingDistance + breakingDelayDistance;
  const landingHightAbs = 100;
  const landingHight = HEIGTH - landingHightAbs;
  const isLaunchLanding = breakingHight > landingHight;
  power = isLaunchLanding ? MAX_POWER : MIN_POWER;

  // LOG
  console.error(
    'BREAK_DIS:DELAY',
    breakingDistance,
    ':',
    breakingDelayDistance
  );
  console.error('TOTAL_BR_DIS:HIGHT', ':', breakingHight, landingHight);

  // RESPONSE
  console.log(`${ROTATE} ${power}`);
}

function get_vert_breaking_distance({ v, u, a, POWER = 0, G_MARS = 3.711 }) {
  while (true) {
    let a = G_MARS - POWER;
    if (a < 0) break;

    u = get_velocity_from_a({ u, a, t: 1 });
    POWER++;
  }

  // https://www.physicsclassroom.com/class/1DKin/Lesson-6/Kinematic-Equations-and-Free-Fall
  // v^2 = u^2 + 2 a d
  // d = (v^2 - u^2) / 2 a
  return Math.round((v ** 2 - u ** 2) / (2 * a));
}

function get_dis_from_a({ u, a, t }) {
  // https://www.calculatorsoup.com/calculators/physics/displacement_v_a_t.php
  // 𝑠=𝑢𝑡+0.5𝑎𝑡2
  return Math.round(u * t + 0.5 * a * t ** 2);
}

function get_velocity_from_a({ u, a, t }) {
  // https://www.calculatorsoup.com/calculators/physics/displacement_v_a_t.php
  // 𝑣=𝑢+𝑎𝑡
  return u + a * t;
}

function get_vert_delay_in_dist({ u, POWER, MAX_POWER, G_MARS = 3.711 }) {
  if (POWER === MAX_POWER) return 0;

  let distance = 0;
  const t = 1;
  while (true) {
    let a = G_MARS - POWER;
    if (a < 0) return distance;

    distance += get_dis_from_a({ u, a, t });
    u = get_velocity_from_a({ u, a, t });
    POWER++;
  }
}
