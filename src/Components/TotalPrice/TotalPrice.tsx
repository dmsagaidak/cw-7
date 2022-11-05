import React from 'react';

interface Props {
  totalPrice: number;
}

const TotalPrice: React.FC<Props> = ({totalPrice}) => {
  const priceStyle: React.CSSProperties = {
    color: "#115511",
    textAlign: "center",
    fontSize: "20px"
  }
  return (
    <p style={priceStyle}>Total price: <strong>{totalPrice}</strong>  KGS</p>
  );
};

export default TotalPrice;