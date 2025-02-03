document.getElementById('cash-out-btn').addEventListener('click', function(event){
    event.preventDefault();
    
    const amount = document.getElementById('cashOut-amount').value;
    const pin = document.getElementById('cashOut-pin').value ;

    // validate pin
    if(pin === '1234'){
        const accoutBalance = document.getElementById('account-balance').innerText;
        const newBalance = parseFloat(accoutBalance) - parseFloat(amount);

        // update new balance
        document.getElementById('account-balance').innerText = newBalance;
    }
    else{
        alert("Invalid pin number");
    }
})