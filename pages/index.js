import Head from 'next/head'
import Link from 'next/link'
//import Layout from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {

  return (
    <>
      <Head>
        <title>Build-Day Game</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={utilStyles.container}>
      <Link href="/rooms/mainhall"><button>Start Game</button></Link>
      </div>
    </>
  )
}
