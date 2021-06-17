const somethingWillHappen = () => {
    return new Promise((resolve, reject) => {
        if(false) {
            resolve("hey");
        } else {
            reject("whoooops");
        }
    });
};

somethingWillHappen()
    .then(response => console.log(response))
    .catch(error => console.log(error));