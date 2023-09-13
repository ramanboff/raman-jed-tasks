//*Task15. Get the average length of all user names.

let url = "https://jsonplaceholder.typicode.com/users";

const ES6ArrayMethods = (url) => {
  fetch(url)
    .then((res) => res.json())
    .then((users) => {
      let getLengthOfNames = users.map((user) => user.name.length)
      let getSumOfLength = getLengthOfNames.reduce((acc, curr) => acc+curr)
      getSumOfLength /= users.length
      console.log(getSumOfLength);  

      
    }); 
};
console.log(ES6ArrayMethods(url));