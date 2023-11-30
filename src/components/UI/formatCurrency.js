export const formatCurrency = (amount) => {
    const roundedAmount = Math.floor(Number(amount));
    const formattedAmount = roundedAmount.toLocaleString();
    const formattedCurrency = formattedAmount;
  
    return formattedCurrency;
  }

  export let checkBag =0 ;

export const handleCheckbag = (check) =>{
    checkBag += check;
}
  

export let checkMoney =0 ;

export const handleCheckMoney = (check) =>{
    checkMoney += check;
}
export let idItem = null;

export const handleDeleteIdItem = (check) =>{
    idItem = check;
    console.log(idItem);
    
}