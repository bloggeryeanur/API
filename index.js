/////////JSON//////////

/* const user = {id: 1, name: 'Yeanur Rahman', job: 'Dalivery'};

const stringified = JSON.stringify(user)
console.log(stringified)
console.log(user) */

/* const shop ={
    owner : 'Yeanur',
    address: {
        street: 'Dhanmondhi new road',
        city: 'Dhaka',
        cunrty: 'Bangladesh'
    },
    product: ['Laptop', 'Phone', 'Mouse', 'Keyboard'],
    revenue: 40000,
    isOpern: true,
    isNew: false
}

const convaret = JSON.stringify(shop);
//console.log(typeof convaret)
const convart2 = JSON.parse(convaret)
console.log(convart2)
 */


//////////////////Fech API//////////////////


/* fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))
 */


/*  const getUrl = 'https://jsonplaceholder.typicode.com/todos/1'
 fetch(getUrl)
 .then(res => res.json())
 .then(json => console.log(json)) */


function loadData() {
    const getUrl = 'https://jsonplaceholder.typicode.com/todos/1'
    fetch(getUrl)
        .then(res => res.json())
        .then(hello => console.log(hello))
}


// stytem one
function loadUser() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => console.log(data))
}


///System tow 
function helloFunc() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => displayUser(data))
}

function displayUser(data) {
    console.log(data)
}


/////////////////Dynamic Data\\\\\\\\\\\\\\\\\

function loaduser4() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => otherFunction(data))
}

/*  function otherFunction(hi){
   console.log(hi)
 } */

function otherFunction(users) {
    for (const user of users) {
        //console.log(user)
        console.log(user.website)
    }
}

//show btn 5 

/*   function showFunc(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => inputFunc(data))
  }

  function inputFunc(data){
    const ul = document.getElementById('user-list');
    for(const user of data){
        console.log(user)
        const li = document.createElement('li');
        li.innerText = user.email;
        ul.appendChild(li)
    }
  }
 */

function hi() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(instance => other(instance))
}

function other(instance) {
    const ul = document.getElementById('user-list')
    for (const getUser of instance) {
        const li = document.createElement('li');
        li.innerText = getUser.name;
        ul.appendChild(li)
    }
}

/////////Post\\\\\\\\\\\

function loadPost() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => displayPost(data))
}


function displayPost(post) {
    const postContaienr = document.getElementById('post-container');
    for (const getPost of post) {
        const postDiv = document.createElement('div');
        postDiv.classList.add('hi')
        postDiv.innerHTML = `
        <h4>User ${getPost.id}</h4>
        <h5>Post ${getPost.title} </h5>
        <p>Post ${getPost.body}</p>
        `;
        postContaienr.appendChild(postDiv);
        console.log(getPost)
    }
}

loadPost()



//////////Get Vs Post\\\\\\\\\\\\