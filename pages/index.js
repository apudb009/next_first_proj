import Head from 'next/head';
import Nav from '../components/Nav'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja | Home</title>
        <meta name="keyword" content="It is ninja meta"/>
      </Head>
      <div className={styles.main}>
        <h1>Home</h1>
        <p>Lorem ifsum goes here</p>
      </div>
    </>
  )
}
