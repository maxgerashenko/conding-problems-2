console.clear();

// Creates new Promise
const fetch = val => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(val);
    }, val * 1000);
  });
};

fetch(2).then(val => {
  console.log("res", val);
});

// Make requests in paralle;
Promise.all([fetch(1), fetch(2), fetch(3)]).then(respones => {
  respones.forEach(val => {
    console.log(val);
  });
});
