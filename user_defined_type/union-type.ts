let userID: (string | number | boolean);

userID = "101";
userID = 102;

function displayUser(userID:string | number) {
    console.log('user',userID);
}

displayUser(111);