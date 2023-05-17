function findUserCountry(user) {
    // if (user.address && user.address.country) {
    //     return user.address.country
    // } else {
    //     return "unknown";
    // }
    return user?.address?.country || "unknown";
}

let user1 = {
    name: "Puan chan",
    age: 25,
    address: {
        city: "Jakarta",
        country: "Indonesia",
    },
};

let user2 = {
    name: "Mega chan",
    age: 30,
};

console.log(findUserCountry(user1));
console.log(findUserCountry(user2));