class Room {
    constructor(name,path,north,west,east,south){
        this.name = name
        this.path = path
        this.north = north
        this.west = west
        this.east = east
        this.south = south
        this.inventory = []
    }
}

const mainHall = new Room("Main Hall", "mainhall", 3, 1, 4, -1)
const meetingRoom = new Room("Meeting Room", "meetingroom", 2, -1, 0, -1)
const lounge = new Room("Lounge", "lounge", -1, -1, 3, 1)
const kitchen = new Room("Kitchen", "kitchen", -1, 2, -1, 0)
const engineRoom = new Room("Engine Room", "engineroom", -1, 0, -1, -1)

export const map = [mainHall,meetingRoom,lounge,kitchen,engineRoom]