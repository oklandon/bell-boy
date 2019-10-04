export function elevatorController(state, action={}){
    switch(action.opName){
        default:
            return controllerState
    }
}

export default function simulate(numElevators, totalFloors){
    const state =
}


export class Simulator {
    constructor(numElevators, totalFloors) {
            let elevators = []
            for (let i = 0; i < numElevators; i++) {
            }
            this.state = elevatorController({
                elevators=
            })
    }

    summonElevator(floorNumber){
    }
}


export class Elevator {
    constructor(topFloor, name) {
        this.name= name
        this.currentFloor = 1
        this.targetFloor = null
        this.door_open = false
        this.total_trips = 0
        // why keep track of this??
        this.floors_passed = 0
        this.active = true
        this.topFloor = topFloor
    }
}