import React, { ReactElement } from 'react';
import styles from './Login.module.scss';

interface Props {
  
}

export default function Login({}: Props): ReactElement {
  return (
    <div>
      <form className={styles.login_area}>
        <input type="text" name="id" />
        <input type="password" name="password" />
        <button type="submit">로그인</button>
      </form>
    </div>
  )
}
