//*Task9. Get an array of users whose name starts with the letter 'P'.

let url = "https://jsonplaceholder.typicode.com/users";

const ES6ArrayMethods = (url) => {
  fetch(url)
    .then((res) => res.json())
    .then((users) => {
      const usersStartP = users.filter((user) => user.name.startsWith('P'));
      console.log(usersStartP);
    });
};
console.log(ES6ArrayMethods(url));