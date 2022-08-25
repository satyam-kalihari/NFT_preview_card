let age = prompt("Enter your age", 17);
if(age >= 18){
    console.log("you can enjoy the site");
}
else{
    console.log("sorry we cannot allow you to enter the site");
}

let friends = {
    "a" : 13,
    "b" : 24,
    "c" : 10
};

for(myFriend in friends){
    console.log(` ${myFriend} and it's age is ${friends[myFriends]}`);
}