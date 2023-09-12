//*Task7. Get the user with the highest ID.



let url = "https://jsonplaceholder.typicode.com/users";

const ES6ArrayMethods = (url) => {
  fetch(url)
    .then((res) => res.json())
    .then((users) => {
      const getUserWithHighestId = users.filter((user,i, arr) => user.id === arr[i].id  );
      console.log(getUserWithHighestId);
    });
};
console.log(ES6ArrayMethods(url));




//?ALINMADI