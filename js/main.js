var budget = prompt('Ваш бюджет?');
var nameOfStore = prompt('Название вашего магазина?')
var shopGoodsFirst = prompt('Какой тип товаров будем продавать?');
var shopGoodsSecond = prompt('Какой тип товаров будем продавать?');
var shopGoodsThird = prompt('Какой тип товаров будем продавать?');

var mainList = {
    budget,
    nameOfStore,
    employers: {
        firstEmployer: 'John',
        secondEmployer: 'Elise',
        thirdEmployer: 'Alex'
    },
    open: confirm('Магазин открыт?'),
    shopGoods: [shopGoodsFirst, shopGoodsSecond, shopGoodsThird]
};

alert(budget / 30)

console.log(mainList)