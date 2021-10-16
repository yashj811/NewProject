import React from "react";
import { Card } from "react-bootstrap";

const CryptoItem = ({ key, item, variant, text }) => {
  return (
    <Card key={key} bg={variant} text={text}>
      <Card.Body>
        <Card.Text>
          <div>Rank : {item.rank}</div>
          <div>Name : {item.name}</div>
          <div>Price : {item.price}</div>
          <div>24h : {item["24h"]}</div>
          <div>7d : {item["7d"]}</div>
          <div>Volume : {item.volume}</div>
          <div>Market Cap : {item.marketCap}</div>
          <div>Circulating Price : {item.circulatingPrice}</div>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CryptoItem;
