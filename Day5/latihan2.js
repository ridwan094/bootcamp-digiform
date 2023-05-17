//Belajar asynchronous javascript
//Function biasa
function greet(name) {
    console.log("Halo, " + name + "!");
}

//memanggil function biasa
greet("Diki slebew");

//Function callback
function greetUser(name, callback) {
    callback(name);
}

//Memanggil function callback
greetUser("Shinta sitata", greet); //Output: Halo, Shinta sitata

//promise
fetch("https://jsonplaceholder.typicode.com/todos/80")
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error))


//Promise2
// const getPost = () => fetch('https://jsonplaceholder.typicode.com/posts/1')
// const getAuthor = () => fetch('https://jsonplaceholder.typicode.com/users/' + id)
// const getComment = () => fetch('https://jsonplaceholder.typicode.com/users/' + id)


// getPost()
//     .then(postResponse => postResponse.json())
//     .then(postResponse => getAuthor(postResponse.id))
//     .then(authorResponse => authorResponse.json()
//     .then