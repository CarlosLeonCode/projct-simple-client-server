import React from 'react'
import { Badge } from 'antd';

export default function BadgeComponent(props){
  const { color, text } = props;

  return <Badge color={ color } text={text} />
}
