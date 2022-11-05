import React from 'react';
import './Btns.css';
import foodImg from '../../assets/spoon-knife.png';
import drinkImg from '../../assets/mug.png';

interface BtnsProps extends React.PropsWithChildren {
  name: string;
  price: number;
  onItemAdd: React.MouseEventHandler;
}

const Btns: React.FC<BtnsProps> = (props) => {
  let img;
  if(props.name === 'Hamburger' || props.name === 'Cheeseburger' || props.name === 'Fries'){
    img = foodImg;
  }else{
    img = drinkImg
  }
  return (
    <div>
      <button onClick={props.onItemAdd} className="order-btn">
        <div className="icon-cont">
          <img src={img}/></div>
        <div>
          <div>{props.name}</div>
          <div>Price: {props.price} KGS</div>
        </div>
      </button>
    </div>
  );
};

export default Btns;