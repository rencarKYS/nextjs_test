import React, { ReactElement } from 'react';
import withHead from '@/components/hoc/withHead';
import styles from './Login.module.scss';

interface Props {
  
}

function Login({}: Props): ReactElement {
  return (
    <div className="container mx-auto">
      <form className={styles.login_area}>
        <input type="text" name="id" />
        <input type="password" name="password" />
        <button type="submit">로그인</button>
      </form>
    </div>
  )
}


export default withHead(Login, '로그인', '로그인 페이지입니다.');