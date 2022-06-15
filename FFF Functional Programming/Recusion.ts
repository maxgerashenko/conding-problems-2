console.clear();

(() => {
  const species = [
    { class: "animal", parent: null },
    { class: "mammal", parent: "animal" },
    { class: "cats", parent: "mammal" },
    { class: "dogs", parent: "mammal" },
    { class: "labrador", parent: "dogs" },
    { class: "chihuahua", parent: "dogs" },
    { class: "persian", parent: "cats" },
    { class: "siamis", parent: "cats" }
  ];

  function makeTree(parent) {
    let root = {};

    species
      .filter(el => el.parent == parent)
      .forEach(el => {
        root[el.class] = makeTree(el.class);
      });

    return root;
  }

  console.log(JSON.stringify(makeTree(null), null, 2));
})();

// {
//   "animal": {
//     "mammal": {
//       "cats": {
//         "persian": {},
//         "siamis": {}
//       },
//       "dogs": {
//         "labrador": {},
//         "chihuahua": {}
//       }
//     }
//   }
// }
