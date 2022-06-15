console.clear();
(function(){
    let name = 'Joe';

    // Does function just has copy of variable? Not just copy of variable, but scope - Closuse()
    function sayHi(){
        console.log(`Hi ${name}!`);
    }

    name = 'not Joe'

    sayHi();

    // Practical Mozila https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures
    function makeSizer(size) {
      return function() {
        return (document.body.style.fontSize = `${size}px`);
      };
    }
    const size14 = makeSizer(14);
    const size16 = makeSizer(16);
    document.body.onclick = size14;
    document.body.onclick = size16;

    // How to emulate private property or method
    person = (function() {
      const name = "Joe";
      const surname = "Doe";
      function getFullname() {
        return `${name} ${surname}`;
      }
      return {
        greating() {
          return `Hi my name is ${getFullname()}`;
        }
      };
    })();

    console.log(person.greating());
    console.log('person.name', person.name);
    console.log('person.surname', person.surname);
    console.log('person.fullname()', person.getFullname);

    // Closure Scope Chain
    function Sum(x){
        return function(y){
            return x + y;
        }
    }
    console.log(Sum(1)(2));

    // Closuere in the loops
    const arr = ['zero','one','two','three','four'];
    for(var i=0;i<arr.length-1; i++) {
        let number = arr[i];
        setTimeout(()=>{
         console.log(arr[i]); // four x 4 or undefined x 4 if i<arr.length
//       console.log(number); // zero one two three or + four if i<arr.length
        },100);
    }
})();