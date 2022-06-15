// https://www.youtube.com/watch?v=W4brAobC2Hc&list=PL0zVEGEvSaeHJppaRLrqjeTPnCH6vw-sm

// ES Feature Descructure in function signtature
console.clear();

let animal = {
  weight: 23,
  sound: "woof"
};

// 1
// function makeSound(option){
//     if(option.spicies == null) option.spicies = 'animal';
//     console.log(option.spicies + ' says '+ option.sound + '!');
// }

// 2
// function makeSound(option){
//     spicies = option.spicies || 'animal';
//     sound = option.sound;
//     console.log(spicies + ' says '+ sound + '!');
// }

// 3
// function makeSound({spicies='animal', sound}){
//     console.log(`${spicies} says ${sound}!`);
// }

// 4

const getSound = ({ spicies = "animal", sound }) => `${spicies} says ${sound}!`;
console.log(getSound(animal));
