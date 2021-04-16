import React, { ReactElement, useState } from 'react';
import withHead from '@/components/hoc/withHead';
import styles from './Login.module.scss';

interface Props {
  onSubmit: (form: {id: string; pw: string}) => void
}

function Login({onSubmit}: Props): ReactElement {
  const [form, setForm] = useState({
    id: '',
    pw: '',
  })
  const [belong, setBelong] = useState('')

  const { id, pw } = form;

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(id, pw, belong)
  }

  const onChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    })
  }

  const onChangeSelect = (e:React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    setBelong(value)
  }

  return (
    <div className="container mx-auto max-w-md">
      <form className={`flex flex-col ${styles.form_area}`} onSubmit={submit}>
        <input 
          type="text" 
          name="id" 
          onChange={onChange} 
          className="border-solid border-2 border-purple-500" 
        />
        <input 
          type="password" 
          name="password" 
          onChange={onChange} 
          className="border-solid border-2 border-purple-500"
        />
        <select name="belong" id="" onChange={onChangeSelect}>
          <option value="">소속</option>
          <option value="ims_mobility">IMS Mobility</option>
          <option value="bemycar">비마이카</option>
        </select>
        <button type="submit" className={`bg-green-500 ${styles.login_btn}`}>로그인</button>
      </form>
    </div>
  )
}


export default withHead(Login, '로그인', '로그인 페이지입니다.');