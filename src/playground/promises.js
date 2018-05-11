const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('This is my resolved data');
    }, 2000)
    
});

promise.then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
})