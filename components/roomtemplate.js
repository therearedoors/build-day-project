import Head from 'next/head'
//import Image from 'next/image'
import styles from './roomtemplate.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import {map} from '../gameData/roomMap.js'
//import { useEffect } from 'react'

export default function RoomTemplate({roomData, playerInventory, roomInventory, updateInventory}) {
  console.log(roomInventory)
  return (
    <div className={`${styles.container}`}>
      <Head>
        <title>{roomData.name}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta charset="UTF-8"/>
      </Head>
      <main>
      <h1 className={styles.title}>
            <strong>{roomData.name}</strong>
        </h1>
        <p className={styles.descrition}>
          
          </p>
        <div className={styles.body}>
          <div className={styles.grid}>
            <div id={styles.north}>
            <div></div>
            {map[roomData.north] ? <Link href={`/rooms/${map[roomData.north].path}`}>
              <a className={styles.card}>
              <h3>North &uarr;</h3>
              <p>To <code>{map[roomData.north].name}</code></p>
            </a>
            </Link> : <div className={styles.card}></div>}
            <div></div>
            </div>
            <div id={styles.westEast}>
            {map[roomData.west] ? <Link href={`/rooms/${map[roomData.west].path}`}>
              <a id={styles.west} className={styles.card}>
              <h3>West &larr;</h3>
              <p>To <code>{map[roomData.west]?.name}</code></p>
            </a>
            </Link> : <div className={styles.card}></div>}
            <div></div>
            {map[roomData.east] ? <Link href={`/rooms/${map[roomData.east]?.path}`}>
              <a id={styles.east} className={styles.card}>
              <h3>East &rarr;</h3>
              <p>To <code>{map[roomData.east].name}</code></p>
            </a>
            </Link> : <div className={styles.card}></div>}
            </div>
            <div id={styles.south}>
            <div></div>
            {map[roomData.south] ? <Link href={`/rooms/${map[roomData.south].path}`}>
              <a className={styles.card}>
              <h3>South &darr;</h3>
              <p>
                To <code>{map[roomData.south].name}</code>
              </p>
              </a>
              </Link> : <div className={styles.card}></div>}
            <div></div>
            </div>
          </div>
          <div>
            <h2>Items</h2>
            {roomInventory && <div>
              <ul>
              {roomInventory.map((item,index) => <li
              className={utilStyles.inventory}
              key={item+index}
              onClick={() => updateInventory(item)}
              >{item}</li>)}
              </ul>
            </div>}
          </div>
        </div>
      </main>
      <footer>
            <ul>
                {playerInventory.map((item,index) => <li key={item+index}>{item}</li>)}
            </ul>
      </footer>
    </div>
  )
}