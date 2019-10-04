import { Simulator, Elevator } from './elevator.js'

test('initalizes with right amount of elevators', () => {
    // try with one elevator
    let sim = new Simulator(1, 2)
    // try with 1000 elevators
    let sim2 = new Simulator(1000, 2)
    expect(sim.getState().elevators.length).toEqual(1)
    expect(sim2.getState().elevators.length).toEqual(1000)
})

test('move elevator', () => {
    let onFloorOne = new Elevator(10, 'Craigary', 1)

    // goes up
    onFloorOne.moveOne(5)
    expect(onFloorOne.where()).toEqual(2)
    // goes down
    onFloorOne.moveOne(1)
    expect(onFloorOne.where()).toEqual(1)
})

test('find where elevator is', () => {
    let onFloorThree = new Elevator(10, 'jimothy', 3)

    let moves = 0
    const targetFloor = 10
    while(moves < 3){
        onFloorThree.moveOne(targetFloor)
        moves++
    }
    expect(onFloorThree.where()).toEqual(6)
})