import React, { ReactElement } from 'react';
import Link from 'next/link';

interface Props {
  
}

export default function Header({}: Props): ReactElement {
  return (
    <div className="nav_area grid grid-cols-3 gap-2 place-items-stretch space-x-4">
      <Link href="/"><span>Home</span></Link>
      <Link href="/login"><span>login</span></Link>
      <Link href="/reservation"><span>reservation</span></Link>
    </div>
  )
}
