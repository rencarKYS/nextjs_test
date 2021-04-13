import Head from 'next/head';
import Login from './login';
import Reservation from './reservation';
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Login/>
      <Reservation/>
    </div>
  )
}
