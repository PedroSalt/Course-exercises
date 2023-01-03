
//async stuff exercise: getting data with XMLHttpRequest && promises and fetch and async && await

//XMLHttpRequest and promises 
const exercise_1 = () => {
    return new Promise((resolve, reject) => {

        const request = new XMLHttpRequest();
        request.open("GET", "https://jsonplaceholder.typicode.com/posts/1");
        request.send();
        request.addEventListener("readystatechange", () => {
            if (request.readyState === 4 && request.status === 200) {
                resolve(request.responseText);
            } else if (request.readyState === 4) {
                reject("could not find resource. something went wrong");
            }
        })

    }).then(val => console.log("Here is the data:\n\n", val)).catch((err) => console.log(err));
};

//exercise_1();


//fetch
const exercise_2 = () => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
        .then(value => value.json())//must always return 
        .then(result => console.log(result))
        .catch(err => console.log("Could not fetch data. Error message:\n\n", err))
}
//exercise_2()


//asynch and await
const exercise_3 = async () => {
    const response = await fetch("https://jsonplaceholder.typicod.com/posts/1");
    const data = await response.json();
    return data;
}
exercise_3().then(result => console.log(result))
    .catch(err => console.log(err))
