import React from 'react';
import './Btns.css'

interface BtnsProps extends React.PropsWithChildren {
  name: string;
  price: number;
  onItemAdd: React.MouseEventHandler;
}

const Btns: React.FC<BtnsProps> = (props) => {
  return (
    <div>
      <button onClick={props.onItemAdd}>{props.name}</button>
    </div>
  );
};

export default Btns;