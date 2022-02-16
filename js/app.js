document.getElementById('Calculate-btn').addEventListener('click',function(){
    // console.log('clicked');




  
    const FoodInput = document.getElementById('Food-Input');
    const FoodValue = FoodInput.value;
    const RentInput = document.getElementById('Rent-Input');
    const RentValue = RentInput.value;
    const ClothInput = document.getElementById('Cloth-Input');
    const ClothValue = ClothInput.value;
    const allItemPlus = parseFloat(FoodValue) + parseFloat(RentValue)+parseFloat(ClothValue);
    const TotalCost = document.getElementById('Total-cost');
    const TotalCostValue = TotalCost.innerText;
    const resultTotalCost = TotalCost.innerText = allItemPlus;


    const incomeTotal = document.getElementById('Income-Input');
    const incomeTotalValue = incomeTotal.value;

    // new balance 
    const newBalance = document.getElementById('New-Balance');
    const newBalanceValue = newBalance.innerText;
    const resultNewBalance = parseFloat(incomeTotalValue)  - resultTotalCost;
    newBalance.innerText = resultNewBalance;

    FoodInput.value = '';
    RentInput.value= '';
    ClothInput.value = '';
    incomeTotal.value = '';
})