// number, string, boolean, void, undefined, null
var random; // this is any type which is super.
var userId;
var firstName;
var lastName;
var fullName;
var isActive;
userId = 101;
firstName = "John";
lastName = " Doe";
isActive = true;
fullName = firstName.concat(lastName);
console.log('ok', fullName);
console.log('split', fullName.split(' '));
console.log('split', fullName.split(''));
//void type function which returns nothing
function display() {
    console.log('hi i am display');
}
display();
