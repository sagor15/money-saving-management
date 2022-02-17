document.getElementById('Calculate-btn').addEventListener('click',function(){
    //function call 
    const allItemPlus = parseFloat(expense('Food')) + parseFloat(expense('Rent'))+parseFloat(expense('Cloth'));
    const TotalCost = document.getElementById('Total-cost');
    const resultTotalCost = TotalCost.innerText = allItemPlus;
    // declare income-input
    const incomeTotal = document.getElementById('Income-Input');
    const incomeTotalValue = incomeTotal.value;
    // new balance 
    const newBalance = document.getElementById('New-Balance');
    const newBalanceValue = newBalance.innerText;
    const resultNewBalance = parseFloat(incomeTotalValue)  - resultTotalCost;
    const soreNewBalance = newBalance.innerText = resultNewBalance;
})

// function declare
function expense(item){
    const cost = document.getElementById(item + "-Input").value;
    return cost;
}


document.getElementById('save').addEventListener('click',function(){
    const incomeTotal = document.getElementById('Income-Input');
    const incomeTotalValue = incomeTotal.value;
// newBAlance 
    const newBalance = document.getElementById('New-Balance');
    const newBalanceValue = newBalance.innerText;
    const saveInput = document.getElementById('save-input');
    const saveInputValue = saveInput.value;
    const savingResult = parseFloat(incomeTotalValue) * (parseFloat(saveInputValue) / 100) ;
// declare saving-amount 
    const savingAmount = document.getElementById('saving-amount');
    const savingAmountValue = savingAmount.innerText;
    savingAmount.innerText = savingResult;
// remaingBalance 
    const remainingBalance = document.getElementById('remaining-balance');
    const remainingBalanceValue = remainingBalance.innerText;
// result show reamaning er jaigai
    const ReamaningAmountResult = parseFloat(newBalanceValue) - savingResult;
    remainingBalance.innerText = ReamaningAmountResult;
})