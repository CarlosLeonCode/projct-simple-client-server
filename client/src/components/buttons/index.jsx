import React from 'react';
import { Button, Tooltip } from 'antd';
import { PlusCircleOutlined } from '@ant-design/icons';

import './styles.scss'

export function ButtonCircle(props){
  const { tooltipCaption } = props;

  return(
    <Tooltip title={tooltipCaption}>
      <Button type="primary" shape="circle" icon={<PlusCircleOutlined />} />
    </Tooltip>
  )
}

export function Buttonrectangle(props){
  const { caption } = props;
  return <Button className='btn_large'>{caption}</Button>
}
