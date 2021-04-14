import React, { ReactElement } from 'react';
import Link from 'next/link';

interface Props {
  
}

export default function Header({}: Props): ReactElement {
  return (
    <div className="nav_area grid grid-cols-3 gap-2 place-items-stretch">
      <Link href="/">Home</Link>
      <Link href="/login">login</Link>
      <Link href="/reservation">reservation</Link>
    </div>
  )
}
