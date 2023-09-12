//*Task5. Get the total number of users in the array.

let url = "https://jsonplaceholder.typicode.com/users";

const ES6ArrayMethods = (url) => {
  fetch(url)
    .then((res) => res.json())
    .then((users) => {
      const TotalNumberOfUsers = users.map((user) => user.name);
      console.log(TotalNumberOfUsers.length);
    });
};
console.log(ES6ArrayMethods(url));