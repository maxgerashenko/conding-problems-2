// https://www.youtube.com/watch?v=W4brAobC2Hc&list=PL0zVEGEvSaeHJppaRLrqjeTPnCH6vw-sm

// Generators
console.clear();

function fakeFetch() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res({
        json() {
          return new Promise((res, rej) => {
            res(
              new Promise((res, rej) => {
                res({ title: "POST TITLE" });
              })
            );
          });
        }
      });
    }, 300);
  });
}

// how it will be procceded with promise
// Promise seems to be better solution here, because it is good enougth
fakeFetch("123")
  .then(res => res.json())
  .then(post => post.title)
  .then(title => console.log("Promise.then title - ", title));

// How it works with a generator function
// Generators  are smarter, and recursive is cool
// however, it doesn't look like an improvement.
run(function*() {
  // after this call we go back to run
  const response = yield fakeFetch();
  // after this call we go back to run
  const post = yield response.json();
  return post.title;
})
  .catch(er => console.error(er))
  .then(title => console.log("Generator iterator title - ", title));

// Iterable verision
// function run(generator){
//     // Fist action
//     let iterator = generator();
//     let iteration = iterator.next();
//     let promise = iteration.value;
//     promise.then(response=>{
//         let anotheIterator = iterator.next(val);
//         let anothePromise = anotheIterator.value;
//         anothePromise.then(post => iterator.next(post));
//     });
// }
//

// Advanced recursion version
// ALL Starts here in run()
function run(generator) {
  // Fist action
  let iterator = generator();
  function iterate(iteration) {
    if (iteration.done) return iteration.value;
    const promise = iteration.value;
    return promise.then(response => iterate(iterator.next(response)));
  }
  return iterate(iterator.next());
}
