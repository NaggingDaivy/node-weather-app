var asyncAdd = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof a === 'number' && typeof b === 'number') {
                resolve(a + b);
            } else
                reject('Arguments must be numbers');

        }, 1500);

    });
}

var somePromise = new Promise((resolve, reject) => {

    setTimeout(() => {
        resolve('Hey. It worked !');
        reject('Unable to fulfill the promise');
    }, 2500);

})

// somePromise.then((message) => {
//     console.log('Success :', message);
//     return asyncAdd(sum, 33);
// }, (errorMessage) => {
//     console.log('Error :', errorMessage)

// });

asyncAdd(3, 5).then((sum) => {
    console.log(sum);
    return asyncAdd(sum, 33);
}).then((sum) => {
    console.log(sum);
}).catch((errorMessage) => {
    console.log('Error :', errorMessage);
});