let depo = document.getElementById('dep');
let withd = document.getElementById('with');
let checkbal = document.getElementById('check');
let baltxt = document.getElementById('balanceAmount')

let balance = 0;

depo.addEventListener('click', function() {
    let addmoney = parseFloat(prompt('Enter the amount to deposit'));
    if (!isNaN(addmoney) && addmoney > 0) {
        balance += addmoney;
        alert(`Deposited $${addmoney}. Your balance is now $${balance}`);
    } else {
        alert('Invalid input. Please enter a valid positive number.');
    }
});

checkbal.addEventListener('click', function() {
    alert(`Your balance is $${balance}`);
});

withd.addEventListener('click', function() {
    let dedmoney = parseFloat(prompt('Enter the amount to withdraw'));
    if (!isNaN(dedmoney) && dedmoney > 0) {
        if (dedmoney <= balance) {
            balance -= dedmoney;
            alert(`Withdrawn $${dedmoney}. Your balance is now $${balance}`);
        } else {
            alert('Not enough money in the account.');
        }
    } else {
        alert('Invalid input. Please enter a valid positive number.');
    }
});

baltxt.innerHTML = balance;









