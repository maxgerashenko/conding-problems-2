// https://www.youtube.com/watch?v=W4brAobC2Hc&list=PL0zVEGEvSaeHJppaRLrqjeTPnCH6vw-sm
console.clear();
// run in node.js
// const fetch = require('node-fetch');
const fetchFake = () => (new Promise(res=>{res()}));

//     return fetch(`https://.../users/${userId}`)
//         .then(res=>res.json())
//         .then(data=>data.imageUrl);
async function fetchAvatar(userId){
    const res = await fetch(`https://.../users/${userId}`);
    const data = await res.json();
    return data.imageUrl;
}
let imageUrl = fetchAvatar('userId');

// Promise all example
// is A lot lot faster
// The main point that all requests will be done in the parallel
function fetchAvatarsPromisAll(userId){
     return fetch(`https://.../users/${userId}`)
        .then(res=>res.json())
        .then(user=>{

            const promises = users.cats.map( catID => 
            fetch(`https://.../cats/${catID}`))
                .then(res=>res.json())
                .then(data=>data.imageUrl);
            return Promise.all(promises);

        })
}
const urlsArray = fetchAvatarsPromisALL('userId'); // [..., ..., ...,];

// Mix, now it async
async function fetchAvatarsPromiseAllMix(userId){
    let uer = await fetch(`https://.../users/${userId}`);

    const promises = user.cats.map(async function(catID) => {
            let res = await fetch(`https://.../cats/${catID}`);
            let data = await res.json();
            return data.imageUrl;});
    return await Promise.all(promises);

}
const URLS = fetchAvatarsPromiseAllMix('userId');

// can also do, buy why ???
const cats = [];
for(let cat of user.cats){
  cats.push( await fetchFake(cat));
}
