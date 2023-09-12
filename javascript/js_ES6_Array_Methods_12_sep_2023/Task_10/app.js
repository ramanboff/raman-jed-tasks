//*Task10. Get an array of users whose email contains the string 'org'.

let url = "https://jsonplaceholder.typicode.com/users";

const ES6ArrayMethods = (url) => {
  fetch(url)
    .then((res) => res.json())
    .then((users) => {
      const UsersContainsOrg = users.filter((user) => user.email.includes('org'));
      console.log(UsersContainsOrg.length);
    });
};
console.log(ES6ArrayMethods(url));