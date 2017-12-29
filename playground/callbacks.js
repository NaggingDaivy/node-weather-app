var getUser = (id, callback) => {
    var user = {
        id: id,
        name: 'Vikram'
    };

    setTimeout(() => {
        callback(user);
    }, 2000);

};
console.log("Starting app");
getUser(31, (userObject) => {
    console.log(userObject);

});

console.log("Ending app");

// https://maps.googleapis.com/maps/api/geocode/json