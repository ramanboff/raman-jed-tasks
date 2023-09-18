// A: u r best, milord 👑
//*Task3. Get an array of objects containing only the name and email of users whose name starts with 'C'.
const url = "https://jsonplaceholder.typicode.com/users";
const ES6ArrayMethods = (url) => {
  fetch(url)
    .then((response) => response.json())
    .then((users) => {
      const startsWithC = users
        .filter((user) => user.name.startsWith("C"))
        .map((user) => `name: ${user.name} __  email: ${user.email}`);
      console.log(startsWithC);
    });
};

console.log(ES6ArrayMethods(url));
