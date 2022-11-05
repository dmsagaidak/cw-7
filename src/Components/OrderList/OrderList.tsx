import React from 'react';
import './OrderList.css'

interface OrderListProps extends React.PropsWithChildren {
  name: string;
  count: number;
  price: number;
}

const OrderList: React.FC<OrderListProps> = (props) => {
  const classNames = ["item"];
  if(props.count === 0){
    classNames.push('hidden');
  }

  return (
    <div className={classNames.join(' ')}>
      <div>{props.name}</div>
      <div>x {props.count}</div>
      <div>{props.price} KGS</div>
      <div>{props.children}</div>
    </div>
  );
};

export default OrderList;