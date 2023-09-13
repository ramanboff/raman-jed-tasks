//*Task14. Get an array of all user names in lowercase.

let url = "https://jsonplaceholder.typicode.com/users";

const ES6ArrayMethods = (url) => {
  fetch(url)
    .then((res) => res.json())
    .then((users) => {
      const GetUserNameInLowercase = users.map((user) => user.name.toLowerCase());
      console.log(GetUserNameInLowercase);
    });
};
console.log(ES6ArrayMethods(url));