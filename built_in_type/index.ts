// number, string, boolean, void, undefined, null

let random;  // this is any type which is super.
let userId: number;
let firstName: string;
let lastName: string;
let fullName: string;
let isActive: boolean;

userId=101;
firstName="John";
lastName=" Doe";
isActive=true;
fullName=firstName.concat(lastName)

console.log('ok',fullName);
console.log('split',fullName.split(' '));
console.log('split',fullName.split(''));

//void type function which returns nothing
function display(): void {
    console.log('hi i am display');
}

display();