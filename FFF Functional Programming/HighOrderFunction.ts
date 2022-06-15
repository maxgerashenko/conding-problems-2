// https://www.youtube.com/watch?v=BMUiFMZr7vk&list=PL0zVEGEvSaeEd9hlmCXrk5yUyqUag-n84
console.clear();

// simple example of the hight order function
[1, 1, 0, 0].filter(x => x === 0); // [0,0]

// simple example of the hight order function
[1, 1, 1, 1, 1, 0, 0, 0, 0].reduce((prev, x) => prev + x, 0); // 5

// map
[{ number: 1 }, { number: 2 }].map(({ number }) => number); // [1,2]

// reduce
`
Q1 TESLA 240 250 100M B
Q2 TESLA 230 270 120M B
Q3 TESLA 130 240 80M B
Q4 TESLA 800 850 1T B
`
  .trim()
  .split("\n")
  .map(line =>
    line
      .split(" ")
      .reduce(
        (prev, el, i) => ({
          ...prev,
          [["quater", "ticket", "low", "high", "cap", "rec"][i]]: el.trim()
        }),
        {}
      )
  )
  .reduce((prev, { quater, ...rest }) => ({ ...prev, [quater]: rest }), {});

// [1,2,3].map(x=>x*3); // [3,6,9]
[1, 2, 3].reduce((prev, x) => [...prev, x * 3], []);
