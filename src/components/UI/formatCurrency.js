export const formatCurrency = (amount) => {
    const roundedAmount = Math.floor(Number(amount));
    const formattedAmount = roundedAmount.toLocaleString();
    const formattedCurrency = formattedAmount;
  
    return formattedCurrency;
  }

  export let checkBag =0 ;

export const handleCheckbag = (check, count) =>{
    if (count == 0) {
        checkBag += check;
        
    } else {
        checkBag -= count
    }
}
  

export let checkMoney =0 ;

export const handleCheckMoney = (check , arg) =>{
    if (arg == 0) {
        checkMoney += check;
        
    } else {
        checkMoney -= check*arg
    }
}

export let idItem = null;

export const handleDeleteIdItem = (check) =>{
    idItem = check;
    console.log(idItem);
    
}