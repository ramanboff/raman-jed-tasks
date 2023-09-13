//*Task16. Get an array of all user IDs multiplied by 2.

let url = "https://jsonplaceholder.typicode.com/users";

const ES6ArrayMethods = (url) => {
  fetch(url)
    .then((res) => res.json())
    .then((users) => {
      const allUsersIdsMultiple2 = users.map((user) => user.id * 2);
      console.log(allUsersIdsMultiple2);
    });
};
console.log(ES6ArrayMethods(url));
