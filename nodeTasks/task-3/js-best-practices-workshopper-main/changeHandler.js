
module.exports = {
    getAmount: function(coinType) {
        if(coinType === 'p'){
            return 1
        }else if(coinType === 'n'){
            return 5
        }
        else if(coinType === 'd'){
            return 10
        }
        else if(coinType === 'q'){
            return 25
        }else{
            throw new Error('Unrecognized coin ' + coinType);
        }
      },
    
};