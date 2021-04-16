import React, { ReactElement, useState } from 'react';
import Calendar from 'react-calendar';
import dayjs from 'dayjs';
import 'react-calendar/dist/Calendar.css';
import withHead from '@/components/hoc/withHead';
interface Props {
  
}

function Reservation({}: Props): ReactElement {
  const [value, changeDate] = useState(new Date());
  return (
    <div className="mx-auto max-w-full">
      <Calendar
        onChange={changeDate}
        value={value}
        minDate={new Date()}
        calendarType="US"
        className="mx-auto"
      />
      <div>{dayjs(value).format('YYYY-MM-DD')}</div>
    </div>
  )
}

export default withHead(Reservation, '회의실 예약', '회의실 예약 페이지입니다.');

