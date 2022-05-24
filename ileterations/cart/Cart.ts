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
    url: 'https://images.unsplash.com/photo-1533738363-b7f9aef128ce?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y2F0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500',
    link: '/items/mens/mande',
    author: 'Mande Kaka',
    product: 'Yojo Apten',
    price: 10000
  }, {
    url: 'https://images.unsplash.com/photo-1519052537078-e6302a4968d4?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNhdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500',
    link: '/items/mens/mande',
    author: 'Mande Kaka',
    product: 'Yojo Apten',
    price: 10000
  }, {
    url: 'https://images.unsplash.com/photo-1573865526739-10659fec78a5?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2F0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500',
    link: '/items/mens/mande',
    author: 'Mande Kaka',
    product: 'Yojo Apten',
    price: 10000
  }, {
    url: 'https://images.unsplash.com/photo-1592194996308-7b43878e84a6?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y2F0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500',
    link: '/items/mens/mande',
    author: 'Mande Kaka',
    product: 'Yojo Apten',
    price: 10000,
    discount: 60
  },
];
export default Cart