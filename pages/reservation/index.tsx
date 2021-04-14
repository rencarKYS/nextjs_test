import React, { ReactElement } from 'react';
import withHead from '@/components/hoc/withHead';
interface Props {
  
}

function Reservation({}: Props): ReactElement {
  return (
    <div>
      reservation
    </div>
  )
}

export default withHead(Reservation, '회의실 예약', '회의실 예약 페이지입니다.');

