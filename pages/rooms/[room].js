import RoomTemplate from '../../components/roomtemplate'
import { getAllRoomPaths, getRoomData, map } from '../../gameData/roomMap.js'
import {useState} from 'react'

export default function Room({roomData}) {
    const initRoomInv = map.find(room => roomData.path === room.path).inventory
    const [roomInv,updateRoomInv] = useState([...initRoomInv])
    console.log(initRoomInv)
    console.log(roomInv)
    const [playerInv,updatePlayerInv] = useState([])
    const updateInventory = targetItem => {
        updateRoomInv(inv => inv.filter(item => item != targetItem))
        updatePlayerInv(inv => ([...inv, targetItem]))
    }
    return (<>
    <RoomTemplate roomData={roomData} roomInventory={roomInv} playerInventory={playerInv} updateInventory={updateInventory} />
        </>)
}

export async function getStaticProps({ params }) {
    const roomData = getRoomData(params.room)
    return {
      props: {
        roomData
      }
    }
  }

export async function getStaticPaths() {
  const paths = getAllRoomPaths()
  return {
    paths,
    fallback: false
  }
}