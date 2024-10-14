// Fetch text file data
let textBtn = document.querySelector('#text-btn');

textBtn.addEventListener('click', () => {
    // Create an AJAX request
    let xhr = new XMLHttpRequest();
    xhr.open('GET', './data/message.txt', true); // Asynchronous request
    xhr.send();

    xhr.onload = () => {
        if (xhr.status === 200) {
            let data = xhr.responseText;
            displayData(data);
        }
    };
});

// Display text data
let displayData = (data) => {
    let htmlTemplate = `<h3>${data}</h3>`;
    document.querySelector('#text-card').innerHTML = htmlTemplate;
};

// Display JSON data
let displayJSON = (mobile) => {
    let htmlTemplate = `
        <ul>
            <li>ID: ${mobile.id}</li>
            <li>BRAND: ${mobile.brand}</li>
            <li>PRICE: ${mobile.price}</li>
        </ul>`;
    document.querySelector('#json-card').innerHTML = htmlTemplate;
};

// Fetch JSON data of mobiles
let jsonBtn = document.querySelector('#json-btn');

jsonBtn.addEventListener('click', () => {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', './data/mobiles.json', true);
    xhr.send();

    xhr.onload = () => {
        if (xhr.status === 200) {
            let data = xhr.responseText;
            let mobile = JSON.parse(data);
            displayJSON(mobile);
        }
    };
});

// Fetch API data from jsonplaceholder
let apiBtn = document.querySelector('#api-btn');

apiBtn.addEventListener('click', () => {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/users', true);
    xhr.send();

    xhr.onload = () => {
        if (xhr.status === 200) {
            let data = JSON.parse(xhr.responseText);
            displayAPIData(data);
        }
    };
});

// Display API data
let displayAPIData = (users) => {
    let htmlTemplate = users.map((user )=> `
        <ul class="list-group">
            <li class="list-group-item">Email: ${user.id}</li>

            <li class=" list-group-item">${user.name} (${user.username})</li>
            <li class="list-group-item">Email: ${user.email}</li>
            <li class=" list-group-item">Phone: ${user.phone}</li>
        </ul>
    `).join('');
    document.querySelector('#api-card').innerHTML = htmlTemplate;
};