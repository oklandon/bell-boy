export function elevatorController(state, action={}){
    switch(action.opName){
        default:
            return state
    }
}

// export default function simulate(numElevators, totalFloors){
//     const state =
// }


export class Simulator {
    constructor(numElevators, totalFloors) {
            let elevators = []
            for (let i = 0; i < numElevators; i++) {
                elevators.push(
                    new Elevator(totalFloors, `num_${i+1}`)
                )
            }
            this.state = elevatorController({
                elevators,
                totalFloors
            })
    }

    summonElevator(floorNumber){
        return true
    }

    getState(){
        return this.state
    }
}


export class Elevator {
    constructor(topFloor, name, currentFloor=1) {
        this.name= name
        this.currentFloor = currentFloor
        this.targetFloor = null
        this.door_open = false
        this.total_trips = 0
        // why keep track of this??
        this.floors_passed = 0
        this.active = true
        this.topFloor = topFloor
    }

    moveOne(targetFloor){
        this.currentFloor = targetFloor >= this.currentFloor
            ? this.currentFloor += 1
            : this.currentFloor -= 1
    }

    where(){
        return this.currentFloor
    }

    declareDistance(targetFloor){
        return Math.abs(targetFloor - this.currentFloor)
    }
}