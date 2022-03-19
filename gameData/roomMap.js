class Room {
    constructor(name,path,north,west,east,south, inventory = []){
        this.name = name
        this.path = path
        this.north = north
        this.west = west
        this.east = east
        this.south = south
        this.inventory = inventory
    }

    asJSON() {
        return {
            name: this.name,
            path: this.path,
            north: this.north,
            west: this.west,
            east: this.east,
            south: this.south,
            inventory: this.inventory
        }
    }
}

const mainHall = new Room("Main Hall", "mainhall", 3, 1, 4, 6, [])
const meetingRoom = new Room("Meeting Room", "meetingroom", 2, 5, 0, -1, [])
const lounge = new Room("Lounge", "lounge", -1, -1, 3, 1, ['\ud83e\udda2'])
const kitchen = new Room("Kitchen", "kitchen", 9, 2, -1, 0, ['\ud83c\udf5e'])
const engineRoom = new Room("Engine Room", "engineroom", -1, 0, 10, 7)
const admin = new Room("Admin", "admin", -1, -1, 1, -1)
const comms = new Room("Communicatons", "communications", 0, -1, 7, 8)
const security = new Room("Security", "security", 4, 6, -1, -1)
const electrical = new Room("Electrical", "electrical", 6, -1, -1, -1)
const medbay = new Room("MedBay", "medbay", -1, -1, -1, 3)
const reactor = new Room("Reactor", "reactor", -1, 4, -1, -1)

export const map = [
    mainHall,
    meetingRoom,
    lounge,
    kitchen,
    engineRoom,
    admin,
    comms,
    security,
    electrical,
    medbay,
    reactor
]

const mapKey = map.reduce((key,room,index) => ({...key, [room.path]: index}),{})

export function getAllRoomPaths() {
    return map.map(room => {
        return {
            params: {
            room: room.path
            }
        }
    })
  }

  export function getRoomData(path) {
      return map[mapKey[path]].asJSON()
  }