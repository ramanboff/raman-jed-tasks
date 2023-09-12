//*Task12. Get an array of all user addresses as strings.

let url = "https://jsonplaceholder.typicode.com/users";

const ES6ArrayMethods = (url) => {
  fetch(url)
    .then((res) => res.json())
    .then((users) => {
      const userAddressesAsString = users.map((user) => user.address);
      console.log(userAddressesAsString);
      const ObjToString = JSON.stringify(userAddressesAsString)
      console.log(ObjToString);
    });
};
console.log(ES6ArrayMethods(url));