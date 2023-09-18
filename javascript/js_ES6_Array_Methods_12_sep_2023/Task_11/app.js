//*Task11. Get an array of users whose phone number starts with the area code '1-770'.
// A: u r best, milord 👑
const ArrayMethods = (url) => {
 fetch(url)
 .then((response) => response.json())
 .then((users) => {
  const PhoneStartsWith1_770 = users.filter((user) => user.phone.startsWith('1-770'))
  console.log(PhoneStartsWith1_770);
 })


}
console.log(ArrayMethods('https://jsonplaceholder.typicode.com/users'));
