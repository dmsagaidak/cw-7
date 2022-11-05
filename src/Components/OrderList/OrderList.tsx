import React from 'react';
import './OrderList.css'

interface OrderListProps extends React.PropsWithChildren {
  name: string;
  count: number;
  price: number;
  remove: React.MouseEventHandler;
}

const OrderList: React.FC<OrderListProps> = (props) => {
  const classNames = ["item"];
  if(props.count === 0){
    classNames.push('hidden');
  }

  return (
    <div className={classNames.join(' ')}>
      <div className="item-name">{props.name}</div>
      <div>x {props.count}</div>
      <div>{props.price} KGS</div>
      <button onClick={props.remove} className="remove-btn">Remove</button>
      <div>{props.children}</div>
    </div>
  );
};

export default OrderList;