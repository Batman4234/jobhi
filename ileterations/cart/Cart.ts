export interface Card {
  url: string;
  link: string;
  author: string;
  product: string;
  price:  number | string;
  discount?: number | string;
}
const Cart:Card[] = [
  {
    url: 'https://img.perniaspopupshop.com/catalog/product/d/m/DMMC042202_1.jpg?impolicy=detailimageprod',
    link: '/items/mens/rock',
    author: 'Peeki Kaka',
    product: 'Jojo Apten',
    price: 10000
  }, {
    url: 'https://img.perniaspopupshop.com/catalog/product/d/m/DMMC042202_1.jpg?impolicy=detailimageprod',
    link: '/items/mens/rock',
    author: 'Manda Kaka',
    product: 'Yojo Apten',
    price: 10000
  }, {
    url: 'https://img.perniaspopupshop.com/catalog/product/d/m/DMMC042202_1.jpg?impolicy=detailimageprod',
    link: '/items/mens/rock',
    author: 'Kulle Kaka',
    product: 'Yeyu Apten',
    price: 10000
  }, {
    url: 'https://img.perniaspopupshop.com/catalog/product/d/m/DMMC042202_1.jpg?impolicy=detailimageprod',
    link: '/items/mens/rock',
    author: 'Jimmy Kaka',
    product: 'Heze Apten',
    price: 10000,
    discount: 60
  },
];
export default Cart