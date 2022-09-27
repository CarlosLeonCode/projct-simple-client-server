import React from 'react';
import { Card } from 'antd';

export default function CardComponent(props){
  const { description, id, status, title } = props;

  return(
    <Card title={title} extra={<a href="#">More</a>} style={{ width: 300 }}>
      <p>{description}</p>
      <p>{status}</p>
    </Card>
  )
}
