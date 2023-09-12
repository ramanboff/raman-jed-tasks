//*Task6. Get the sum of all user IDs.

let url = "https://jsonplaceholder.typicode.com/users";

const ES6ArrayMethods = (url) => {
  fetch(url)
    .then((res) => res.json())
    .then((users) => {
      //!with map
      // let sum = 0;
      // users.map((user) => sum += user.id);
      //  console.log(sum);
     //!with reduce

 const sumOfUsersId = users.reduce((SumOfIds, user) => {
  return SumOfIds + user.id
 },0)
 console.log(sumOfUsersId);

    });
};
console.log(ES6ArrayMethods(url));
