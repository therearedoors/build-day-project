import Head from 'next/head'
//import Image from 'next/image'
import styles from './roomtemplate.module.css'
//import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import {map} from '../gameData/roomMap.js'
import { useEffect } from 'react'

export default function RoomTemplate({location}) {


  return (
    <div className={`${styles.container}`}>
      <Head>
        {map[location].name}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1 className={styles.title}>
            You are in the &nbsp;<strong>{map[location].name}</strong>
        </h1>

        <p className={styles.descrition}>
          
        </p>

        <div className={styles.grid}>
          <div id={styles.north}>
          <div></div>
          {map[map[location].north] ? <Link href={`/rooms/${map[map[location].north].path}`}>
            <a className={styles.card}>
            <h3>North &uarr;</h3>
            <p>To the <code>{map[map[location].north].name}</code></p>
          </a>
          </Link> : <div className={styles.card}></div>}
          <div></div>
          </div>
          <div id={styles.westEast}>
          {map[map[location].west] ? <Link href={`/rooms/${map[map[location].west].path}`}>
            <a id={styles.west} className={styles.card}>
            <h3>West &larr;</h3>
            <p>To the <code>{map[map[location].west]?.name || "Dead End"}</code></p>
          </a>
          </Link> : <div className={styles.card}></div>}
          <div></div>
          {map[map[location].east] ? <Link href={`/rooms/${map[map[location].east]?.path}`}>
            <a id={styles.east} className={styles.card}>
            <h3>East &rarr;</h3>
            <p>To the <code>{map[map[location].east].name}</code></p>
          </a>
          </Link> : <div className={styles.card}></div>}
          </div>
          <div id={styles.south}>
          <div></div>
          {map[map[location].south] ? <Link href={`/rooms/${map[map[location].south].path}`}>
            <a className={styles.card}>
            <h3>South &darr;</h3>
            <p>
              To the <code>{map[map[location].south].name}</code>
            </p>
            </a>
            </Link> : <div className={styles.card}></div>}
          <div></div>
          </div>
        </div>
      </main>

      <footer>
        {/*<a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel" className="logo" />
  </a>*/}
      </footer>
    </div>
  )
}