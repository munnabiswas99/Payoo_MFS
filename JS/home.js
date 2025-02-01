document.getElementById('add-money-btn').addEventListener('click', function(event){
    event.preventDefault();

    const addAmount = document.getElementById('input-amount').value;

    const pin = document.getElementById('input-pin').value;
    
    // pin validate
    if(pin === '1234'){
        // Add balance
        const accountBalance = document.getElementById('account-balance').innerText;
        const newBalance = parseFloat(accountBalance) + parseFloat(addAmount);

        // Update Balance
        document.getElementById('account-balance').innerText = newBalance;
    }
    else{
        alert('Incorrect Pin');
    }
})