//*Task2. Get all users whose email ends with '.net'.
// A: done as 🐉
const es6Arrays = () => {
   fetch('https://jsonplaceholder.typicode.com/users')
   .then((res) => res.json())
   .then((users) => {
    console.log(users);
    const endsWithDotNet = users.filter((user) => user.email.endsWith('.net'))
    console.log(endsWithDotNet);
   })
}

console.log(es6Arrays());
