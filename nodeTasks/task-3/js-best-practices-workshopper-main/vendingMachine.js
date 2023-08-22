
var balanceManager = require('./balanceManager');
var changeHandler = require('./changeHandler');
var productInventory = require('./productInventory');

module.exports = {
  insertCoin: function(coinType){
    var value = changeHandler.getAmount(coinType);
    balanceManager.increaseBalance(value);
  },

  releaseChange: function(){
    var currentBalance = balanceManager.getBalance();
    balanceManager.decreaseBalance(currentBalance);
    return this.convertToChange(currentBalance);
  },

  vendProduct: function(productId){
    var product = productInventory.getProduct(productId);
    balanceManager.decreaseBalance(product.price);
    return product;
  },
  getProducts: function(){
    return productInventory.getProducts();
  },

  convertToChange: function(amount) {
    var coins = {
      'q': 25,
      'd': 10,
      'n': 5,
      'p': 1,
    };
    
    var coinsByAmount = ['q', 'd', 'n', 'p'];

    var change = [];
    for(var i in coinsByAmount){
      var coinType = coinsByAmount[i];
      var coinValue = coins[coinType];

      while(amount >= coinValue){
        change.push(coinType);
        amount -= coinValue;
      }
    }
    return change;
  }

};
