let balance = 0;
module.exports = {
    getBalance: function(){ 
        return balance;
      },
      increaseBalance: function(amount){
        balance += amount;
      },
      canAfford: function(amount){
        return amount <= balance;
      },
      decreaseBalance: function(amount){
      
        let errorMessage;
        if(!this.canAfford(amount)){
            errorMessage = 'Insufficient balance';
        }
        if(errorMessage){
            throw new Error(errorMessage);
        }
        balance -= amount;
      },
      isValidAmount: function(amount){
        if(amount === null || amount === undefined){
          return false;
        } else {
          return true;
        }
      },
};