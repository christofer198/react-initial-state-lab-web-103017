// Bomb Component Code Goes Here
import React from 'react'

class Bomb React.component{
  constructor(props){
    super()

    this.state = {
      secondsLeft: props.initialCount
    }
  }

  render(){
    return(
      const timer = this.state.secondsLeft === 0 ? 'Boom' : '${this.state.secondsLeft} seconds left before I go boom!'
        <p>{timer}</p>
    )}
}

extends default Bomb
