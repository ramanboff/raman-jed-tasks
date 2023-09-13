//*Task13. Get an array of all user cities.

let url = "https://jsonplaceholder.typicode.com/users";

const ES6ArrayMethods = (url) => {
  fetch(url)
    .then((res) => res.json())
    .then((users) => {
      const GetAllUserCities = users.map((user) => user.address.city );
      console.log(GetAllUserCities);
    });
};
console.log(ES6ArrayMethods(url));