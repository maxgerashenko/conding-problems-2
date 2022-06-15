console.clear();

(() => {
  //const hello = (name, action, day) => 'Hello '+name+'! nice to '+action+' you '+day+' !';
  const hello = name => action => day =>
    "Hello " + name + "! Nice to " + action + " you " + day + "!";

  // console.log(hello('Max', 'see', 'today'));
  console.log(hello("Max")("see")("today"));
})();

(() => {
  let dragons = [
    { name: "d1", power: "light" },
    { name: "d2", power: "light" },
    { name: "d3", power: "fire" },
    { name: "d4", power: "water" }
  ];
  const hasElement = power => el => el.power === power;

  // console.log(dragons.filter( el => hasElement('light', el) ))
  console.log(dragons.filter(hasElement("light")).map(o => o.name));
})();
