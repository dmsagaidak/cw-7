import React, {useState} from 'react';
import OrderList from '../../Components/OrderList/OrderList'
import './App.css';

interface OrderList {
  name: string;
  count: number;
  price: number;
  id: string;
}

function App() {
  const [items, setItems] = useState ([
    {name: 'Hamburger', count: 0, price: 80, id: 'h1'},
    {name: 'Cheeseburger', count: 0, price: 90, id: 'c1'},
    {name: 'Fries', count: 0, price: 45, id: 'f1'},
    {name: 'Coffee', count: 0, price: 70, id: 'cf1'},
    {name: 'Tea', count: 0, price: 50, id: 't1'},
    {name: 'Cola', count: 0, price: 40, id: 'cl1'}
  ])

  const [newItem, setNewItem] = useState(' ');

  const addItem = () =>{};

  const getPrice = items.reduce((acc, item) => acc + item.count * item.price, 0)


  const orderList: React.ReactNode = items.map((item: OrderList) =>(
    <OrderList
     key={item.id}
     name={item.name}
     count={item.count}
     price={item.price}
    >

    </OrderList>
  ))

  return (
    <div className="App">
      <div className="order-details">
        <p>Order details</p>
        <div className="list">
          {orderList}
        </div>

        <p>Total price: {getPrice} KGS</p>
      </div>
      <div className="add-items">
        <p>Add items</p>

      </div>
    </div>
  );
}

export default App;
