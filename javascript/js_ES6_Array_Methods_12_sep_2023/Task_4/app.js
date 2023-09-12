//*Task4. Get an array of all user names in uppercase.

let url = "https://jsonplaceholder.typicode.com/users";

const ES6ArrayMethods = (url) => {
  fetch(url)
    .then((res) => res.json())
    .then((users) => {
      const userNameToUpperCase = users.map((user) => user.name.toUpperCase());
      console.log(userNameToUpperCase);
    });
};
console.log(ES6ArrayMethods(url));
