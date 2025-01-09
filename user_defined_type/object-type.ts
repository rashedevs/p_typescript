// let users : object;
// users = {namespace: 'users', username:'kkk'}


// let users : object[];
// users = [{namespace: 'users', username:'kkk'}]

let users : object[];
users=[];

let user1 : {name: string, userID: number, passed: boolean}
// let user1 : {name: string, userID?: number, passed: boolean} //optional userID
user1 = {name: "John", userID: 101, passed: true}
users.push(user1);

let user2 : {name: string, userID: number, passed: boolean}
user2 = {name: "Wick", userID: 102, passed: false}
users.push(user2);

// console.log('users',  users);
for (const key in users) {
    console.log(users[key]["name"]);
}