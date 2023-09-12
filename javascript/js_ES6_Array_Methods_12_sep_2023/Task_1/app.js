//*Task1. Get all users whose zip code is less than or equal to 50000.

function arr() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((users) => {
      console.log(users);
      const zipcodeLess50000 = users.filter(
        (user) => user.address.zipcode <= 50000
      );
      console.log(zipcodeLess50000);
    });
}

console.log(arr());
