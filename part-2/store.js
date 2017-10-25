const queries = require('./database');
const print = require('node-print');
const realShoppers = require('./database').realShoppers;
const shopperOrders = require('./database').shopperOrders;
const productList = require('./database').productList;

switch(process.argv[2]){
  case 'realShoppers':
    realShoppers()
    .then(results => print.pt(results))
    break;

  case 'shopperOrders':
    shopperOrders(process.argv[3])
    .then(results => print.pt(results))

    break;

  case 'productList':
    productList(process.argv[3])
    .then(results => print.pt(results))

    break;

  default:
    console.log('Please enter a command after store.')
    console.log('The commands are realShoppers, shopperOrders, and productList')
}
