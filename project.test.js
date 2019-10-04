import { Simulator, Elevator } from './elevator.js'

test('initalizes with right amount of elevators', () => {
    // try with one elevator
    let sim = new Simulator(1, 2)
    // try with 1000 elevators
    let sim2 = new Simulator(1000, 2)
    expect(sim.getState().elevators.length).toEqual(1)
    expect(sim2.getState().elevators.length).toEqual(1000)
})

test('queues a job', () => {
    let sim = new Simulator(1, 20)
    sim.queueJob(15)
    sim.queueJob(12)

    let jobs = [{
       assignedTo: null,
       done: false,
       targetFloor: 15,
     },
     {
       assignedTo: null,
       done: false,
       targetFloor: 12,
     }]

    expect(sim.getJobs()).toEqual(jobs)
    // won't queue job out of range
    sim.queueJob(100)
    expect(sim.getJobs()).toEqual(jobs)
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

test('calculates elevator distance', () => {
    let onOne =  new Elevator(10, 'Darrryl', 1)

    // figures upper correctly
    expect(onOne.distance(10)).toEqual(9)
    // figures distance from lower floor too
    let onTen=  new Elevator(10, 'jojo', 10)
    expect(onTen.distance(3)).toEqual(7)
})
