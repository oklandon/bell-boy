export function elevatorController(state, action={}){
    switch(action.op){
        case 'queue':
            return {
                ...state,
                queue: [...state.queue, action.data]
            }
        default:
            return state
    }
}

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
                totalFloors,
                jobs: []
            })
    }

    queueJob(targetFloor){
        this.state = elevatorController(
            this.state,
            {
                op: 'queue',
                data: {
                    targetFloor,
                    assigned: false,
                    done: false
                }
            }
        )
    }

    assignElevator(target){
        const activeElevator = this.findClosestElevator(target)
        activeElevator.addJob(target)
        return true
    }

    findClosestElevator(target) {
        return this.state.elevators.reduce((closest, elevator) => {
            if (!closest || closest.distance(target) < elevator.distance(target)){
                return elevator
            }
        }, null)
    }

    getState(){
        return this.state
    }
}


export class Elevator {
    constructor(topFloor, name, currentFloor=1) {
        this.name= name
        this.currentFloor = currentFloor
        this.targetFloors = []
        this.doorOpen = false
        this.totalTrips = 0
        // why keep track of this??
        this.floorsPassed = 0
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

    distance(targetFloor){
        return Math.abs(targetFloor - this.currentFloor)
    }

    addJob(targetFloor){
        this.targetFloors = [...this.targetFloors, targetFloor]
    }

    setJobComplete(target) {
        this.targetFloors = this.targetFloors.filter(f => f !== target)
        this.totalTrips += 1
        if (this.totalTrips >= 100) {
            return false
        }
    }
}