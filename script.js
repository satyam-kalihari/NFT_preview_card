// let age = prompt("Enter your age", 17);

let friends = {
    "a" : 13,
    "b" : 24,
    "c" : 10
};

for(myFriend in friends){
    console.log(`It's ${myFriend} and it's age is ${friends[myFriend]}`);
}

//price icon interval

let priceIcon = document.querySelectorAll('.price-icon:hover').setInterval(priceIcon, 1000);

// setInterval(priceIcon, 1000);
