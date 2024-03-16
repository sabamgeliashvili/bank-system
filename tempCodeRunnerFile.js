let usersarr = [];

function Accounts(username, lastname, id) {
    this.username = username;
    this.lastname = lastname;
    this.id = id;
}

csub.addEventListener('click', function () {
    let username = document.querySelector('.username').value;
    let lastname = document.querySelector('.lastname').value;
    let id = document.querySelector('.usid').value;

    // Check if any of the fields are empty
    if (username === '' || lastname === '' || id === '') {
        alert('Please fill in all the input fields');
    } else {
        usersarr.push(new Accounts(username, lastname, id));
        console.dir(usersarr);
        // Redirect to another page (index.html)
        window.location.href = 'index.html';
    }
});

console.log(usersarr);

