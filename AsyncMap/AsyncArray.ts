// https://advancedweb.hu/asynchronous-array-functions-in-javascript/

console.clear;

// Parallel Map
(async () => {
  const double = str => {
    return Promise.resolve(str + str);
  };

  const string = ["a", "b", "c"];
  console.log(await Promise.all(string.map(await double))); // await doesn't work with map [Promise, Promise, Promise]
})();

// Reduce in parallel
(async () => {
  const sleep = n => new Promise(res => setTimeout(res, n));

  const arr = [1, 2, 3];

  const startTime = new Date().getTime();
  const asyncRes = arr.reduce(async (sum, x) => {
    await sleep(10);
    return (await sum) + x;
  }, 0);

  console.log(
    await asyncRes,
    "Promises are runing in parallel, but it takes much more memory"
  );
  console.log(`Took ${new Date().getTime() - startTime} ms`);
})();

// Reduce in Order
(async () => {
  const sleep = n => new Promise(res => setTimeout(res, n));
  const arr = [1, 2, 3];

  const startTime = new Date().getTime();
  const asyncRes = arr.reduce(async (sum, x) => {
    let s = await sum;
    await sleep(10);
    return s + x;
  }, 0);

  console.log(await asyncRes, "Promises are runing in order");
  console.log(`Took ${new Date().getTime() - startTime} ms`);
})();

// Filter array with asyc
(async () => {
  const sleep = n => new Promise(res => setTimeout(res, n));
  const arr = [1, 2, 3, 4, 5];

  const asyncFilter = async (arr, filer) => {
    let res = await Promise.all(arr.map(filer));

    return arr.filter((x, i) => res[i]);
  };

  const asyncRes = await asyncFilter(arr, async x => {
    await sleep(10);
    return x % 2 === 0;
  });

  console.log(asyncRes, "Filtered array");
})();

// Filter array with asyc - short
(async () => {
  const sleep = n => new Promise(res => setTimeout(res, n));
  const arr = [1, 2, 3, 4, 5];

  const asyncRes = async (arr, filter) =>
    await Promise.all(arr.map(filter)).then(res =>
      arr.filter((x, i) => res[i])
    );

  console.log(
    await asyncRes(arr, async x => {
      await sleep(10);
      return x % 2 === 0;
    }),
    "Filtered array - short"
  );
})();

// Reduce inseted of Filter
// concurrently
(async () => {
  const sleep = n => new Promise(res => setTimeout(res, n));
  const arr = [1, 2, 3, 4, 5];

  const asyncFilter = async (arr, predicate) =>
    arr.reduce(
      async (memo, e) => ((await predicate(e)) ? [...(await memo), e] : memo),
      []
    );

  console.log(
    await asyncFilter(arr, async x => {
      await sleep(10);
      return x % 2 === 0;
    }),
    "Redice to filtered array - concurently"
  );
})();

// sequentially
(async () => {
  const sleep = n => new Promise(res => setTimeout(res, n));
  const arr = [1, 2, 3, 4, 5];

  // sequentially
  const asyncFilter = async (arr, predicate) =>
    arr.reduce(
      async (memo, e) => [
        ...(await memo),
        ...((await predicate(e)) ? [e] : [])
      ],
      []
    );

  console.log(
    await asyncFilter(arr, async x => {
      await sleep(10);
      return x % 2 === 0;
    }),
    "Redice to filtered array - sequentially"
  );
})();
