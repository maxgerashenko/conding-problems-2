// https://www.youtube.com/watch?v=W4brAobC2Hc&list=PL0zVEGEvSaeHJppaRLrqjeTPnCH6vw-sm

console.clear();

function get(object, ...props) {
  let key = props.shift(),
    val = object[key];
  if (props.length === 0) return val;
  return val == null ? val : get(val, ...props);
}

let user = { name: "user1" },
  userWithAdress = { user: "user2", address: { zip: "10009" } };

// user.address.zip', user.addressress.zip // error

let zip = get(user, "name", "address");
console.log(zip);
let zip1 = get(user, "address", "zip");
console.log(zip1);
let zip2 = get(userWithAdress, "address", "zip");
console.log(zip2);
