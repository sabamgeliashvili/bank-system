let usersArr = JSON.parse(localStorage.getItem('users')) || [];

function saveUsersToStorage() {
    localStorage.setItem('users', JSON.stringify(usersArr));
}

function createAccount() {
    let username = document.getElementById('username').value;
    let lastname = document.getElementById('lastname').value;
    let id = document.getElementById('usid').value;

    if (username === '' || lastname === '' || id === '') {
        alert('Please fill in all the input fields');
    } else {
        let user = { username: username, lastname: lastname, id: id };
        usersArr.push(user);
        console.dir(usersArr);
        saveUsersToStorage();
        window.location.href = 'old_index.html';
    }
}

function login() {
    let loginus = document.getElementById('logus').value;
    let loginlast = document.getElementById('loglast').value;

    if (loginus !== '' && loginlast !== '') {
        let user = usersArr.find(user => user.username === loginus && user.lastname === loginlast);
        if (user) {
            document.getElementById('useroutput').innerHTML = `Hello ${user.username} ${user.lastname}`;
            setTimeout(function() {
                window.location.href = 'old_index.html';
            }, 2000); 
        } else {
            alert('User not found');
        }
    } else {
        alert('Please fill in all fields');
    }
}

document.getElementById('login').addEventListener('click', function() {
    document.getElementById('reg-box').style.display = 'none';
    document.getElementById('inp-box').style.display = 'flex';
});

document.getElementById('create-btn').addEventListener('click', function() {
    document.getElementById('reg-box').style.display = 'none';
    document.getElementById('create-inp').style.display = 'flex';
});

document.getElementById('c-submit').addEventListener('click', createAccount);

document.getElementById('logsub').addEventListener('click', login);
