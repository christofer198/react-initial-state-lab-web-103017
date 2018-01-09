// Bomb Component Code Goes Here
import Reach from 'react'

class ImageSlider extends React.component {
  constructor(){
    super()
    this.state = {
      currentSlideIndex: 0
    }
  }

  render(){
    return (
      <p>I am on slide {this.state.currentSlideIndex}</p>
    )}
}

extends default ImageSlider
