//*Task17. Get the total number of characters in all user names.

let url = "https://jsonplaceholder.typicode.com/users";

const ES6ArrayMethods = (url) => {
  fetch(url)
    .then((res) => res.json())
    .then((users) => {
      const TotalNumberOfUsers = users.map(user => user.name.length).reduce((acc,curr) => acc + curr)
      console.log(TotalNumberOfUsers);
    });
};
console.log(ES6ArrayMethods(url));


