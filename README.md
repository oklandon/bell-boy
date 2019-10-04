# bell-boy

For running, this would prompt for user input:
- advance a tick
- add new floor request
- exit

Advance a tick:
  - All elevators move in direction of next floor
  - Report back to Simulator if they have reached an assigned floor and clear that floor from queue
  
Add new floor request:
  - Simulator state receives new floor request and closest elevator's jobs are appended with that floor
