// let users : object;
// users = {namespace: 'users', username:'kkk'}
// let users : object[];
// users = [{namespace: 'users', username:'kkk'}]
var users;
users = [];
var user1;
// let user1 : {name: string, userID?: number, passed: boolean} //optional userID
user1 = { name: "John", userID: 101, passed: true };
users.push(user1);
var user2;
user2 = { name: "Wick", userID: 102, passed: false };
users.push(user2);
// console.log('users',  users);
for (var key in users) {
    console.log(users[key]["name"]);
}
