const chai = require('chai');
const expect = require('chai').expect;
const queries = require('./database');

describe('Query functions', () => {

  describe('productList()', () => {
    it('productList returns an array', () => {
      return queries.productList('dairy').then((result) => {
        expect(result).to.be.an('array');
      })
    });


    it('productList returns butter as first product in section dairy', () => {
      return queries.productList('dairy').then((result) => {
        expect(result[0]).to.deep.equal({ name: 'Butter', section: 'dairy' });
      })
    });

    // it.only('productList returns an empty array when an invalid parameter is passed', () => {
    //   return queries.productList('cow').then((result) => {
    //     expect(result).to.be.undefined;
    //     console.log(result, 'result');
    //   })
    // });
  });



  describe('shopperOrders()', () => {
    it('shopperOrders returns an array', () => {
      return queries.shopperOrders(1).then((result) => {
        expect(result).to.be.an('array');
      })
    });

    it('should return the order id and the total cost of the order', () => {
      return queries.shopperOrders(3).then((result) => {
        expect(result[0].total_cost).to.equal('14.08');
        expect(result[0].order_id).to.equal(4);
      })
    });
  });



  describe('realShoppers()', () => {
    it('realShoppers returns an array', () => {
      return queries.realShoppers().then((result) => {
        expect(result).to.be.an('array');
      })
    });

    it('realShoppers array contains three shoppers', () => {
      return queries.realShoppers().then((result) => {
        expect(result.length).to.equal(5);
      })
    });

    it('realShoppers has 2 total orders for Amine', () => {
      return queries.realShoppers(1).then((result) => {
        expect(result[0].shopper_name).to.equal('Omar');
        expect(result[0].number_of_orders).to.equal('1');
      })
    });
  });
});
