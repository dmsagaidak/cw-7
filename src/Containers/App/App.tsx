import React, {useState} from 'react';
import OrderList from '../../Components/OrderList/OrderList';
import Btns from "../../Components/Btns/Btns";
import TotalPrice from "../../Components/TotalPrice/TotalPrice";
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

  const [count, setCount] = useState(0);

  const addItem = (id: string) =>{
    setItems(prev => prev.map(item =>{
      return item.id === id? {
        ...item,
        count: item.count +1,
      }: item;
    }));
    setCount(count)
  };

  const remove = (id: string) =>{
    setItems(prev => prev.map(item =>{
      return item.id === id? {
        ...item,
        count: item.count = 0,
      }: item;
    }));
  }


  const getPrice = items.reduce((acc, item) => acc + item.count * item.price, 0);

  let orderList: React.ReactNode = null;

  if (getPrice !== 0){
    orderList = items.map((item: OrderList) =>(
      <OrderList
        key={item.id}
        name={item.name}
        count={item.count}
        price={item.price}
        remove={() =>remove(item.id)}
      >
      </OrderList>
    ))
  } else {
    orderList = 'Your list is empty, please add some items'
  }

  const buttonsList: React.ReactNode = items.map((item) =>(
    <Btns
      key={item.id}
      name={item.name}
      price={item.price}
      onItemAdd={() => addItem(item.id)}
    />
  ))


  return (
    <div className="App">
      <div className="order-details">
        <p>Order details</p>
        <div className="list">
          {orderList}
        </div>
        <TotalPrice totalPrice={getPrice}/>
      </div>
      <div className="add-items">
        <p>Add items</p>
        <div className="buttons-cont">
          {buttonsList}
        </div>
      </div>
    </div>
  );
}

export default App;
