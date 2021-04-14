import React, { ReactElement } from 'react';
import Link from 'next/link';

interface Props {
  
}

export default function Header({}: Props): ReactElement {
  return (
    <div>
      <Link href="/">Home</Link>
      <Link href="/login">login</Link>
      <Link href="/reservation">reservation</Link>
    </div>
  )
}
