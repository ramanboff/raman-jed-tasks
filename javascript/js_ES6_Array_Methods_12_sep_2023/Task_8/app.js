//*Task8. Get an array of all user names sorted in alphabetical order.



let url = "https://jsonplaceholder.typicode.com/users";

const ES6ArrayMethods = (url) => {
  fetch(url)
    .then((res) => res.json())
    .then((users) => {
      const allUsersNames = users.map((user) => user.name);
      console.log(allUsersNames);
      const SortedNamesinArray = allUsersNames.sort()
      console.log(SortedNamesinArray);
    });
};
console.log(ES6ArrayMethods(url));